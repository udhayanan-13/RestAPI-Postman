// cart = ["shirts", "pants", "shoes"];

// const promise = createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = 1213;
//     if (validateCart(orderId)) {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }
// function proceedToPayment(orderId) {
//   //logic for money received
//   return new Promise(function (resolve, reject) {
//     if (moneyReceived(orderId)) resolve("Payment successful!");

//     if (!moneyReceived(orderId)) {
//       const err = new Error("Payment Unsuccessful!");
//       reject(err);
//     }
//   });
// }
// function validateCart(cart) {
//   return 1;
// }
// function moneyReceived() {
//   return 1;
// }
import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log("Get request successful");
  res.status(201).send("Get request successful");
});
app.post("/", (req, res) => {
  console.log("Post request successful");
  res.send("Post request successful");
});
app.put("/", (req, res) => {
  console.log("put request successful");
  res.status(200).send("put request running");
});
app.patch("/", (req, res) => {
  console.log("patch request successful");
  res.sendStatus(404);
});
app.delete("/", (req, res) => {
  console.log("delete request successful");
  res.status(202).send("delete");
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});
