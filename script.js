const products = [
  {
    id: "vozol-vista-20k-watermelon",
    name: "Vozol Vista 20.000 Watermelon",
    category: "Vape jetable",
    description: "Promotion spéciale sur la saveur pastèque fraîche, avec 20.000 bouffées et 5% de nicotine.",
    price: 10,
    oldPrice: 20,
    image: "assets/products/vozol-vista-20k-watermelon-transparent.png",
    imageClass: "product-cutout",
    badge: "Promo",
    colors: ["#e9fff4", "#ffffff"],
    stock: "En promo",
    stockClass: "in-stock sale-stock",
    specs: {
      Saveur: "Watermelon",
      Bouffées: "20.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Prix promo": "$10 au lieu de $20",
      "Âge requis": "18+",
    },
  },
  {
    id: "vozol-rave-40k",
    name: "Vozol Rave 40.000",
    category: "Vape jetable",
    description: "Modèle rechargeable longue durée avec 40.000 bouffées et 5% de nicotine.",
    price: 25,
    image: "https://media.vaping360.com/images/vozol-rave-40000-efcdbd2e.webp?imageType=Standard&MaxWidth=500&MaxHeight=500",
    colors: ["#e7f1ff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "40.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "vozol-gear-ice-sweet-50k",
    name: "Vozol Gear Ice & Sweet 50.000",
    category: "Vape jetable",
    description: "Vozol Gear Ice & Sweet avec 50.000 bouffées et 5% de nicotine.",
    price: 30,
    image: "assets/products/vozol-gear-transparent.png",
    imageClass: "product-cutout",
    colors: ["#f1f7ff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "50.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "jnr-vapewatch-30k",
    name: "JNR VAPE WATCH 30.000",
    category: "Vape jetable",
    description: "Vape connectée au style montre avec 30.000 bouffées et 5% de nicotine.",
    price: 25,
    image: "assets/products/vapewatch-30k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#effdf3", "#ffffff"],
    stock: "Stock limité",
    stockClass: "low-stock",
    specs: {
      Bouffées: "30.000",
      Nicotine: "5%",
      "Disponibilité": "Stock limité",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "kangertech-50k",
    name: "KangerTech 50.000",
    category: "Vape jetable",
    description: "Vape rechargeable haute autonomie avec 50.000 bouffées et 5% de nicotine.",
    price: 30,
    image: "assets/products/kangertech-50k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#f2f5f7", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "50.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "oxbar-45k",
    name: "Oxbar 45.000",
    category: "Vape jetable",
    description: "Vape rechargeable avec écran, 45.000 bouffées et 5% de nicotine.",
    price: 28,
    image: "assets/products/oxbar-45k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#fff0f6", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "45.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "ripe-vapes-ivory-40k",
    name: "RIPE VAPES IVORY 40.000",
    category: "Vape jetable",
    description: "Design premium Ivory avec 40.000 bouffées et 2% de nicotine.",
    price: 25,
    image: "assets/products/ripe-vapes-ivory-40k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#fffceb", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "40.000",
      Nicotine: "2%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "lost-mary-35k",
    name: "Lost Mary 35.000",
    category: "Vape jetable",
    description: "Grande autonomie avec 35.000 bouffées, écran intégré et 5% de nicotine.",
    price: 22,
    image: "assets/products/lost-mary-35k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#f6edff", "#ffffff"],
    stock: "En stock",
    stockClass: "in-stock",
    specs: {
      Bouffées: "35.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      "Âge requis": "18+",
    },
  },
  {
    id: "jnr-falcon-x-18k",
    name: "JNR Falcon X 18.000",
    category: "Vape jetable",
    description: "JNR Falcon X avec 18.000 bouffées, 5% de nicotine et saveurs puissantes.",
    price: 20.99,
    image: "assets/products/jnr-falcon-x-18k-transparent.png",
    imageClass: "product-cutout",
    colors: ["#eaf6ff", "#ffffff"],
    stock: "Rupture de stock",
    stockClass: "out-of-stock",
    specs: {
      Bouffées: "18.000",
      Nicotine: "5%",
      Type: "Vape jetable rechargeable",
      Disponibilité: "Rupture de stock",
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
    stock: "Rupture de stock",
    stockClass: "out-of-stock",
    specs: {
      Saveur: "Pastèque glacée",
      Type: "Vape jetable",
      Disponibilité: "Rupture de stock",
      "Âge requis": "18+",
    },
  },
];

const businessWhatsAppNumber = "243837933422";
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
      (product) => {
        const unavailable = product.stockClass.includes("out-of-stock");
        const priceMarkup = product.oldPrice
          ? `<span class="price-stack"><span class="old-price">${formatPrice(product.oldPrice)}</span><span class="product-price sale-price">${formatPrice(product.price)}</span></span>`
          : `<span class="product-price">${formatPrice(product.price)}</span>`;

        return `
        <article class="product-card ${unavailable ? "is-unavailable" : ""} ${product.badge ? "is-sale" : ""}">
          <div class="product-art" style="--card-a:${product.colors[0]}; --card-b:${product.colors[1]};">
            ${product.badge ? `<span class="promo-ribbon">${product.badge}</span>` : ""}
            <img class="${product.imageClass || ""}" src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-info">
            <div class="product-meta">
              <span>${product.category}</span>
              <span class="stock-badge ${product.stockClass}">${product.stock}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-footer">
              ${priceMarkup}
              <div class="product-actions">
                <button class="detail-btn" type="button" data-detail="${product.id}">Détails</button>
                <button class="btn add-btn" type="button" data-product="${product.id}" ${unavailable ? "disabled" : ""}>${unavailable ? "Indisponible" : "Ajouter"}</button>
              </div>
            </div>
          </div>
        </article>
      `;
      }
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
  return document.querySelector('input[name="payment"]:checked')?.parentElement.textContent.trim() || "M-Pesa";
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
  const product = products.find((item) => item.id === productId);
  if (!product || product.stockClass.includes("out-of-stock")) return;

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
  productModalPrice.innerHTML = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span><span class="sale-price">${formatPrice(product.price)}</span>`
    : formatPrice(product.price);
  productModalArt.innerHTML = `<img class="${product.imageClass || ""}" src="${product.image}" alt="${product.name}" />`;
  productModalArt.style.setProperty("--card-a", product.colors[0]);
  productModalArt.style.setProperty("--card-b", product.colors[1]);
  productSpecs.innerHTML = Object.entries(product.specs)
    .map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
    .join("");
  const unavailable = product.stockClass.includes("out-of-stock");
  modalAddBtn.disabled = unavailable;
  modalAddBtn.textContent = unavailable ? "Indisponible" : "Ajouter au panier";
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
  localStorage.setItem("shopyourvapex-age-verified", "true");
}

function initAgeGate() {
  const verified = localStorage.getItem("shopyourvapex-age-verified") === "true";

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

  return `🛒 Nouvelle commande ShopYourVapeX

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
