const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3001, () => {
  console.log("Server is up!");
});

//Paymentpage Route
app.post("/charge", function(req, res) {
  var stripeToken = req.body.stripeToken;
  var finalPrice = app.get("price");
  console.log(finalPrice.slice(1, -1));
  const productPrice = parseInt(finalPrice.slice(1, -1)) * 1000;
  (async function() {
    // Create a Customer:

    // Charge the Customer instead of the card:
    const charge = await stripe.charges.create(
      {
        amount: productPrice,
        currency: "cad",
        source: "tok_visa", // obtained with Stripe.js
        description: "Charge for Dev-Trix.com"
      },
      function(err, charge) {
        // asynchronously called
      }
    );

    // YOUR CODE: Save the customer ID and other info in a database for later.
  })();
});
