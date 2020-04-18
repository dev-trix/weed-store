console.log("Working");

function incrementValue() {
  var value = parseInt(document.getElementById("number").innerHTML, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").innerHTML = value;

  console.log(value);
}
