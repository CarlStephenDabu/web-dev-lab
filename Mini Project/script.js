function orderItem(item) {
  alert("You ordered " + item + "!");
  document.getElementById("order-summary").innerText = "You ordered: " + item;
}