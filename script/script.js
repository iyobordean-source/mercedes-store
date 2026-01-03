// ====== CART COUNT BADGE ======
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cart-count");
  if(cartCountEl) cartCountEl.textContent = count;
}

// Call this on page load
updateCartCount();

// Example: When adding product to cart
function addToCart(product){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const existingIndex = cart.findIndex(item => item.id === product.id);
  if(existingIndex !== -1){
    cart[existingIndex].qty += 1;
  } else {
    cart.push({...product, qty: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// Usage Example
// addToCart({id:"g-wagon", name:"G-Wagon", price:90000000, img:"assets-img/g-wagon.jpeg"});
