=> GET.allProducts <= https://localhost:8080/products/

---

=> POST.newProduct <= https://localhost:8080/products/

{"sku": NUMBER###,
"name": "###",
"description": "###",
"price": NUMBER###,
"currency": "###",
"creatorId": "###",
"categories": ["###"]
}

---

=> PUT.productById <= https://localhost:8080/products/5c791cbdbe262c5a1f75a603

{"price": NUMBER#####,
"categories": [ "#####" ]
}

---

=> GET.allUsers <= https://localhost:8080/users/

---

=> GET.userById <= https://localhost:8080/users/5c77d9e254d7ee65b2a3adb5

---

=> POST.newUser <= https://localhost:8080/users/

{"firstName": "###",
"lastName": "###",
"telephone": ""###",
"nickName": "###",
"location": "###",
"password": "###",
"email": "###"
}

---

=> PUT.userById <= https://localhost:8080/products/5c7941732d613473ee5b545f
{"favoriteProducts":"###"}

---

=> POST.newOrder <= https://localhost:8080/orders/

{
"creator": "###",
"productsList": [{ "productId": "###", "productType": "###", "itemsCount": NUMBER### }],
"deliveryType": "###",
"deliveryAdress": "###",
"sumToPay": NUMBER###,
"status": "###"
}

---

=> GET.orderById <= https://localhost:8080/orders/5c791dbfbe262c5a1f75a60a

---
