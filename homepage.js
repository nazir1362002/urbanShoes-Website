// products List for home page
const cart1 = [
    { id: 1, name: "Casual Sneker", price: 200, url: "images/cover.jpg" },
    { id: 2, name: "Running Shoes", price: 50, url: "images/yello.jpg" },
    { id: 3, name: "Boot", price: 100, url: "images/green.jpg" },
    { id: 4, name: "Lofer", price: 100, url: "images/green2.jpg" },
    { id: 5, name: "Shoes", price: 100, url: "images/whiteShoe.jpg" },
    { id: 6, name: "Sneker", price: 100, url: "images/yello.jpg" }
];
//const p_container = document.getElementsByClassName("products")[0];
document.addEventListener("DOMContentLoaded", function () {
    // your forEach loop code here
    const p_container = document.querySelector(".products");
    cart1.forEach(i => {
        p_container.innerHTML += `<div class="card">
        <img src= ${i.url}>
        <h3>${i.name}</h3>
        <p>${i.price}</p>
        <button onclick="addToCart('${i.name}', ${i.price})">Add to Cart</button>
      </div>`;
    });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// Cart Page
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    alert("Added to cart!");
}
if (document.getElementById("cart-items")) {
    let total = 0;
    const container = document.getElementById("cart-items");
    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `
          <div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price}</span>
          </div>
        `;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

// Receipt Page
if (document.getElementById("receipt")) {
    let sum = 0;
    const box = document.getElementById("receipt");
    box.classList.add("receipt-box");

    cart.forEach(item => {
        sum += item.price;
        box.innerHTML += `<p><span>${item.name}</span><span>$${item.price}</span></p>`;
    });

    box.innerHTML += `<hr><p><strong>Total</strong><strong>$${sum}</strong></p>`;
    localStorage.clear();
}