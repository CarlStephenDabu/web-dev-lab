const menuItems = [
  { category: "Coffee", name: "Espresso", price: 110 },
  { category: "Coffee", name: "Breve", price: 105 },
  { category: "Coffee", name: "Mocha", price: 135 },
  { category: "Hot", name: "Hot Chocolate", price: 60 },
  { category: "Hot", name: "Cafe Au Lait", price: 135 },
  { category: "Pastry", name: "Bagel", price: 35 },
  { category: "Pastry", name: "Muffin", price: 25 },
  { category: "Pastry", name: "Croissant", price: 40 }
];

const menuList = document.getElementById("menu-list");
const orderSummary = document.getElementById("order-summary");
let orders = [];

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "col-md-4";
  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Category: ${item.category}</p>
        <p class="card-text">Price: PHP ${item.price}</p>
        <button class="btn btn-primary w-100" onclick="orderItem('${item.name}', ${item.price})">
          Order Now
        </button>
      </div>
    </div>
  `;
  menuList.appendChild(card);
});

function orderItem(name, price) {
  orders.push({ name, price });
  const total = orders.reduce((sum, item) => sum + item.price, 0);
  orderSummary.innerHTML = `
    You ordered: ${orders.map(item => item.name).join(", ")}<br>
    <strong>Total: PHP ${total}</strong>
  `;
}