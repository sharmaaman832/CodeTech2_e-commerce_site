// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 1200, image: "https://sm.mashable.com/t/mashable_in/article/i/ive-review/ive-reviewed-over-59-laptops-and-this-is-the-best-windows-la_rzds.1248.jpg" },
    { id: 2, name: "Smartphone", price: 800, image: "https://m.media-amazon.com/images/I/510UC1BFlbL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 3, name: "Headphones", price: 200, image: "https://5.imimg.com/data5/SELLER/Default/2022/9/RJ/VD/FR/113915368/head-phone-1000x1000.jpg" },
];

let cart = [];

// Display products
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Display cart
function displayCart() {
    const cartItems = document.querySelector('#cart-items');
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Checkout functionality
document.querySelector('#checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart = [];
        displayCart();
    }
});
