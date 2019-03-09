const Product = require("../../modules/db/schemas/product");
const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const { createdFailed, createdSuccess } = require("./configs/responses");
const {
  productUpdateSuccess,
  productUpdateFailed
} = require("./configs/responses");
const Ingredient = require("../../modules/db/schemas/ingredient");
const products = require("../../../db.json");

// let ingredientsfromMango = [];

// console.log(ingredientsfromMango);

// const newProduct = new Product(product);

// newProduct.save(function(err) {
//   if (err) {
//     console.log(err), createdFailed(response, err.message);
//   } else {
//     createdSuccess(response, newProduct);
//   }
// });

const addIngredientsFieldtoAll = (request, response) => {
  Product.findOneAndUpdate(
    { name: "Пицца Трюфели с артишоком" },
    { ingredients: ["5c80e38d728d6e6e0e2c385e", "5c80e39c728d6e6e0e2c385f"] },
    { new: true },
    function(error, products) {
      if (error) {
        productUpdateFailed(response, (reason = error.message));
      }
      console.log(products);
    }
  )
    .then(
      Product.findById("5c791cbdbe262c5a1f75a603")
        .populate("ingredients")
        .exec(function(err, ingr) {
          if (err) throw err;
          console.log("ingredients:", ingr.ingredients.map(i => i.name));
          // prints "The author is Ian Fleming"
        })
    )
    .then(user => console.log(user.name));
  // Ingredient.find({}, function(err, ingredients) {
  //   if (err) {
  //     throw err;
  //   }
  //   return ingredients;
  // })
  //   .then(ingredientsfromMango => {
  //     const pr = [];
  //     products.map(product => {
  //       product.ingrArray = [];
  //       product.ingredients.map(ingr =>
  //         ingredientsfromMango.map(e => {
  //           if (e.name === ingr) {
  //             product.ingrArray.push({
  //               ...e._id
  //             });
  //           }
  //         })
  //       );
  //       pr.push(product);
  //     });
  //     return pr;
  //   })
  //   .then(pr => {
  //     pr.map(product => {
  //       const newProduct = new Product({
  //         sku: Date.now(),
  //         name: product.name,
  //         description: product.description,
  //         price: product.price,
  //         currency: product.currency,
  //         creatorId: 2,
  //         categories: { ...product.category },
  //         likes: 5,
  //         ingredients: { ...product.ingrArray }
  //       });
  //       newProduct.save(function(err) {
  //         if (err) {
  //           console.log(err), createdFailed(response, err.message);
  //         }
  //       });
  //     });
  // pr.map(product => {
  //   console.log(product.ingrArray);
  //   let newIngrds = [];
  //   product.ingrArray.map(i => newIngrds.push({ ...i }));
  //   console.log(newIngrds);
  //   console.log(product.name);
  //   Product.findOneAndUpdate(
  //     { name: String(product.name) },
  //     { "ingredients.$[]": newIngrds },
  //     { new: true },
  //     function(error, products) {
  //       if (error) {
  //         productUpdateFailed(response, (reason = error.message));
  //       }
  //       console.log(products);
  //       // Product.find({}, function(err, all) {
  //       //   if (err) throw err;
  //       // console.log(all);
  //       // });
  //     }
  //   );
  // });
  // });
};

module.exports = addIngredientsFieldtoAll;
