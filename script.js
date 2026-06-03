const products = [
  {
    id: "geekbar-cool-mint",
    name: "Geek Bar Pulse Cool Mint",
    category: "Vape jetable",
    description: "Saveur menthe fraîche, idéale pour une expérience propre et glacée.",
    price: 24,
    image: "https://oss.geekbar.com/uploads/upload/upload/202408281011265585_650X650.png",
    colors: ["#d8efff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Saveur: "Menthe fraîche",
      Type: "Vape jetable",
      "Âge requis": "18+",
    },
  },
  {
    id: "geekbar-watermelon",
    name: "Geek Bar Pulse Watermelon Ice",
    category: "Vape jetable",
    description: "Saveur pastèque glacée avec une finition fraîche et fruitée.",
    price: 24,
    image: "https://oss.geekbar.com/products/meloso-ultra/3/Watermelon%20Ice.png",
    colors: ["#ffe28a", "#fff5f2"],
    stock: "Stock limité",
    stockClass: "low-stock",
    specs: {
      Saveur: "Pastèque glacée",
      Type: "Vape jetable",
      "Âge requis": "18+",
    },
  },
  {
    id: "geekbar-strawberry-mango",
    name: "Geek Bar Pulse Strawberry Mango",
    category: "Vape jetable",
    description: "Mélange fruité de fraise et mangue avec une sensation douce et tropicale.",
    price: 24,
    image: "https://oss.geekbar.com/products/meloso-ultra/3/Strawberry%20Mango.png",
    colors: ["#ffd0a6", "#fff3e8"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Saveur: "Fraise mangue",
      Type: "Vape jetable",
      "Âge requis": "18+",
    },
  },
  {
    id: "vozol-rave-40k",
    name: "Vozol Rave 40K",
    category: "Vape jetable",
    description: "Modèle longue durée avec design moderne et saveurs intenses.",
    price: 35,
    image: "https://media.vaping360.com/images/vozol-rave-40000-efcdbd2e.webp?imageType=Standard&MaxWidth=500&MaxHeight=500",
    colors: ["#e7f1ff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "Jusqu'à 40K",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "vozol-gear",
    name: "Vozol Gear",
    category: "Vape jetable",
    description: "Format compact, pratique et rechargeable avec une bonne autonomie.",
    price: 28,
    image: "https://elfvaping.com/wp-content/uploads/2025/12/VOZOL-GEAR-ICE-SWEET-50K-50000-Puffs-Disposable-Vapes-Wholesale-Bulk-Buy-Four-Ice-Levels-Two-Sweet-Levels-11.webp",
    colors: ["#f1f7ff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Type: "Vape jetable rechargeable",
      Format: "Compact",
      "Âge requis": "18+",
    },
  },
  {
    id: "sweet-50k",
    name: "Sweet 50K",
    category: "Vape jetable",
    description: "Grande autonomie avec des saveurs sucrées, fruitées et gourmandes.",
    price: 38,
    image: "https://vapordna.com/cdn/shop/files/Artery-CL6-50K-blueberry-watermelon.png?v=1750696794&width=580",
    colors: ["#fff0f6", "#ffffff"],
    stock: "Stock limité",
    stockClass: "low-stock",
    specs: {
      Bouffées: "Jusqu'à 50K",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
];

const businessWhatsAppNumber = "12078767674";
const cart = new Map();

const ageModal = document.querySelector("#ageModal");
const confirmAge = document.querySelector("#confirmAge");
const denyAge = document.querySelector("#denyAge");
const productsGrid = document.querySelector("#productsGrid");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartCount = document.querySelector("#cartCount");
const clearCart = document.querySelector("#clearCart");
const checkoutBtn = document.querySelector("#checkoutBtn");
const cartJump = document.querySelector("#cartJump");
const checkoutModal = document.querySelector("#checkoutModal");
const checkoutForm = document.querySelector("#checkoutForm");
const closeCheckout = document.querySelector("#closeCheckout");
const copyOrderBtn = document.querySelector("#copyOrderBtn");
const productModal = document.querySelector("#productModal");
const closeProduct = document.querySelector("#closeProduct");
const productModalArt = document.querySelector("#productModalArt");
const productModalCategory = document.querySelector("#productModalCategory");
const productModalTitle = document.querySelector("#productModalTitle");
const productModalDescription = document.querySelector("#productModalDescription");
const productModalPrice = document.querySelector("#productModalPrice");
const productSpecs = document.querySelector("#productSpecs");
const modalAddBtn = document.querySelector("#modalAddBtn");
let selectedProductId = null;

function formatPrice(value) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function renderProducts() {
  productsGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-art" style="--card-a:${product.colors[0]}; --card-b:${product.colors[1]};">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span>${product.category}</span>
              <span class="stock-badge ${product.stockClass}">${product.stock}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              <span class="product-price">${formatPrice(product.price)}</span>
              <div class="product-actions">
                <button class="detail-btn" type="button" data-detail="${product.id}">Détails</button>
                <button class="btn add-btn" type="button" data-product="${product.id}">Ajouter</button>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function getCartStats() {
  let total = 0;
  let count = 0;

  cart.forEach((quantity, productId) => {
    const product = products.find((item) => item.id === productId);
    total += product.price * quantity;
    count += quantity;
  });

  return { total, count };
}

function getSelectedPaymentMethod() {
  return document.querySelector('input[name="payment"]:checked')?.parentElement.textContent.trim() || "Orange Money";
}

function getCartLines() {
  return Array.from(cart.entries()).map(([productId, quantity]) => {
    const product = products.find((item) => item.id === productId);
    return {
      name: product.name,
      quantity,
      price: product.price,
      subtotal: product.price * quantity,
    };
  });
}

function renderCart() {
  const { total, count } = getCartStats();
  cartCount.textContent = count;
  cartTotal.textContent = formatPrice(total);

  if (cart.size === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide.</p>';
    return;
  }

  cartItems.innerHTML = Array.from(cart.entries())
    .map(([productId, quantity]) => {
      const product = products.find((item) => item.id === productId);
      return `
        <div class="cart-line">
          <div>
            <strong>${product.name}</strong>
            <span>${formatPrice(product.price)} chacun</span>
          </div>
          <div class="qty-controls" aria-label="Quantité pour ${product.name}">
            <button type="button" data-decrease="${product.id}" aria-label="Réduire ${product.name}">-</button>
            <span>${quantity}</span>
            <button type="button" data-increase="${product.id}" aria-label="Ajouter ${product.name}">+</button>
          </div>
          <strong>${formatPrice(product.price * quantity)}</strong>
        </div>
      `;
    })
    .join("");
}

function addToCart(productId) {
  cart.set(productId, (cart.get(productId) || 0) + 1);
  renderCart();
}

function removeFromCart(productId) {
  const quantity = cart.get(productId) || 0;

  if (quantity <= 1) {
    cart.delete(productId);
  } else {
    cart.set(productId, quantity - 1);
  }

  renderCart();
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  selectedProductId = productId;
  productModalCategory.textContent = `${product.category} · ${product.stock}`;
  productModalTitle.textContent = product.name;
  productModalDescription.textContent = product.description;
  productModalPrice.textContent = formatPrice(product.price);
  productModalArt.innerHTML = `<img src="${product.image}" alt="${product.name}" />`;
  productModalArt.style.setProperty("--card-a", product.colors[0]);
  productModalArt.style.setProperty("--card-b", product.colors[1]);
  productSpecs.innerHTML = Object.entries(product.specs)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  productModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.add("hidden");
  selectedProductId = null;

  if (ageModal.classList.contains("hidden") && checkoutModal.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function hideAgeModal() {
  ageModal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  localStorage.setItem("kinvape-age-verified", "true");
}

function initAgeGate() {
  const verified = localStorage.getItem("kinvape-age-verified") === "true";

  if (verified) {
    hideAgeModal();
    return;
  }

  document.body.classList.add("modal-open");
}

function openCheckoutModal() {
  checkoutModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.querySelector("#customerName").focus();
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
  if (ageModal.classList.contains("hidden")) {
    document.body.classList.remove("modal-open");
  }
}

function buildOrderMessage() {
  const { total } = getCartStats();

  const lines = getCartLines()
    .map((item) => `- ${item.name} x${item.quantity} - ${formatPrice(item.subtotal)}`)
    .join("\n");

  return `🛒 Nouvelle commande KinVape

Client : ${document.querySelector("#customerName").value}
Téléphone : ${document.querySelector("#customerPhone").value}

📍 Livraison
Ville : ${document.querySelector("#customerCity").value}
Quartier : ${document.querySelector("#customerArea").value}
Adresse : ${document.querySelector("#customerAddress").value}

🛍️ Produits commandés
${lines}

💰 Total : ${formatPrice(total)}
Mode de paiement : ${getSelectedPaymentMethod()}
Numéro Mobile Money : ${document.querySelector("#paymentPhone").value}

✅ Confirmation d'âge : ${document.querySelector("#ageConfirm").value}

Merci de confirmer la disponibilité des produits, les frais de livraison et les instructions de paiement.`;
}

function openWhatsAppOrder() {
  const orderMessage = encodeURIComponent(buildOrderMessage());
  window.open(
    `https://wa.me/${businessWhatsAppNumber}?text=${orderMessage}`,
    "_blank"
  );
}
productsGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-product]");
  const detailButton = event.target.closest("[data-detail]");

  if (addButton) {
    addToCart(addButton.dataset.product);
    return;
  }

  if (detailButton) {
    openProductModal(detailButton.dataset.detail);
  }
});

confirmAge.addEventListener("click", hideAgeModal);

denyAge.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

clearCart.addEventListener("click", () => {
  cart.clear();
  renderCart();
});

cartItems.addEventListener("click", (event) => {
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");

  if (increaseButton) {
    addToCart(increaseButton.dataset.increase);
    return;
  }

  if (decreaseButton) {
    removeFromCart(decreaseButton.dataset.decrease);
  }
});

checkoutBtn.addEventListener("click", () => {
  const { count } = getCartStats();
  if (!count) {
    alert("Votre panier est vide.");
    return;
  }
  openCheckoutModal();
});

cartJump.addEventListener("click", () => {
  document.querySelector("#cart").scrollIntoView({ behavior: "smooth", block: "start" });
});

closeCheckout.addEventListener("click", closeCheckoutModal);

closeProduct.addEventListener("click", closeProductModal);

productModal.addEventListener("click", (event) => {
  if (event.target === productModal) {
    closeProductModal();
  }
});

modalAddBtn.addEventListener("click", () => {
  if (!selectedProductId) return;
  addToCart(selectedProductId);
  closeProductModal();
  document.querySelector("#cart").scrollIntoView({ behavior: "smooth", block: "start" });
});

checkoutModal.addEventListener("click", (event) => {
  if (event.target === checkoutModal) {
    closeCheckoutModal();
  }
});

copyOrderBtn.addEventListener("click", async () => {
  if (!checkoutForm.reportValidity()) return;

  try {
    await navigator.clipboard.writeText(buildOrderMessage());
    alert("Commande copiée. Vous pouvez la coller dans WhatsApp.");
  } catch {
    alert("Copie impossible automatiquement. Utilisez Envoyer sur WhatsApp.");
  }
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openWhatsAppOrder();
});

renderProducts();
renderCart();
initAgeGate();
