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

=> PUT.productById <= https://localhost:5000/products/5c791d12be262c5a1f75a606

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

=> PUT.userById <= https://localhost:8080/users/5c77d9e254d7ee65b2a3adb5
{"favoriteProducts":"test"}

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

=> GET.productById <= https://localhost:8080/products/5c791d12be262c5a1f75a606

---
