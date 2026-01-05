// products List for home page
async function productInfo() {
    try {
        const response = await fetch("./Products/products.txt")
        const cart1 = await response.json();
        console.log(cart1);
        //const p_container = document.getElementsByClassName("products")[0];
  //Auto product card render
        const p_container = document.querySelector(".products");
        cart1.forEach(i => {
            p_container.innerHTML += 
            `<div class="card">
                <img src= ${i.url}>
                <h3>${i.name}</h3>
                <p>${i.price}</p>
                <button onclick="addToCart('${i.name}', ${i.price})">Add to Cart</button>
            </div>`;
        });

    }catch (error) {
        console.log("Errors:", error);
    }
}
productInfo();


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