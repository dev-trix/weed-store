function getCardNumber() {
  var stripe = Stripe("pk_test_xx3T2Cuudm41CR9chvd3GqpI009cEAb4OO");
  var elements = stripe.elements();

  var style = {
    base: {
      color: "#32325d",
      lineHeight: "18px",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var elements = stripe.elements();

  // Create an instance of the card Element.
  var card = elements.create("card", { style: style });
}
