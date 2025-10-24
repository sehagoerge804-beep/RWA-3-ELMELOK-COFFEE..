let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentLang = localStorage.getItem('language') || 'ar';

// Translations object
const translations = {
    ar: {
        title: {
            index: "Ben Rawae' Al-Muluk - Home",
            menu: "RWA'3 El-MELOk Coffee - Menu",
            cart: "RWA'3 El-MELOk Coffee - Basket"
        },
        logo: "RWA'3 El-MELOk Coffee",
        subtitle: "Authentic Coffee & Drinks Experience",
        welcome: "Welcome to Our Coffee World",
        premium: "Premium Quality Coffee",
        experience: "With 10 years in the field",
        menuLink: "Menu - Drinks & Kilos",
        basket: "Basket",
        home: "Home",
        menu: "Menu",
        coffeeMenu: "قائمة القهوة",
        drinksMenu: "قائمة المشروبات",
        chooseQuantity: "اختر الكميه",
        addToCart: "أضف إلى السلة",
        basketTitle: "السلة",
        emptyCart: "السلة فارغة، يرجى إضافة الطلب وإعادة المحاولة.",
        total: "المجموع",
        specialInstructions: "تعليمات خاصة",
        instructionsPlaceholder: "اكتب تعليماتك هنا...",
        placeOrder: "اطلب عبر الواتساب",
        selectQuantityCoffee: "يرجى اختيار كمية للقهوة.",
        selectSizeDrink: "يرجى اختيار حجم للمشروب.",
        addedToCart: "تم إضافة {name} ({quantity}) إلى السلة!",
        basketEmptyOrder: "سلتك فارغة.",
        orderMessage: "مرحبا! إليك طلبي:\n",
        totalLabel: "المجموع:",
        specialLabel: "تعليمات خاصة:",
        orderSent: "تم إرسال الطلب إلى الواتساب! تم مسح السلة.",
        copyright: "&copy; 2023 RWA'3 El-MELOk Coffee. All rights reserved.",
        // Coffee items
        simpleCoffee: "بن ساده",
        simpleCoffeeDesc: "من أجود أنواع البن",
        roastedCoffee: "بن محوج",
        roastedCoffeeDesc: "خلطة بن وتحويجه مميزة",
        frenchCoffee: "بن فرنسي",
        frenchCoffeeDesc: "بن مخلوط بنكهات",
        hazelnutCoffee: "بن بالبندق",
        hazelnutCoffeeDesc: "بن مع طعم البندق المميز",
        caramelCoffee: "بن بالكراميل",
        caramelCoffeeDesc: "بن مع طعم الكراميل المميز",
        chocolateCoffee: "بن بالشيكولاته",
        chocolateCoffeeDesc: "بن مع طعم الشيكولاتة المميز",
        // Drinks
        latte: "لاتيه",
        latteDesc: "أحلى لاتيه هتشربوا",
        iceCoffee: "ايس كوفي",
        iceCoffeeDesc: "أحلى ice coffee مع الثلج",
        spanishLatte: "Spanish Latte",
        spanishLatteDesc: "اسبريسو مع حليب مكثف",
        cappuccinoMocha: "Cappuccino Mocha",
        cappuccinoMochaDesc: "كابتشينو مع موكا مع نكهة الشيكولاتة",
        cupCoffee: "كوب بن",
        cupCoffeeDesc: "جميع أنواع البن",
        // Sizes
        small: "صغير",
        large: "كبير",
        price: "السعر",
        cupPrice: "20 ج",
        remove: "إزالة"
    },
    en: {
        title: {
            index: "Ben Rawae' Al-Muluk - Home",
            menu: "RWA'3 El-MELOk Coffee - Menu",
            cart: "RWA'3 El-MELOk Coffee - Basket"
        },
        logo: "RWA'3 El-MELOk Coffee",
        subtitle: "Authentic Coffee & Drinks Experience",
        welcome: "Welcome to Our Coffee World",
        premium: "Premium Quality Coffee",
        experience: "With 10 years in the field",
        menuLink: "Menu - Drinks & Kilos",
        basket: "Basket",
        home: "Home",
        menu: "Menu",
        coffeeMenu: "Coffee Menu",
        drinksMenu: "Drinks Menu",
        chooseQuantity: "Choose Quantity",
        addToCart: "Add to Cart",
        basketTitle: "Basket",
        emptyCart: "The basket is empty, please add items and try again.",
        total: "Total",
        specialInstructions: "Special Instructions",
        instructionsPlaceholder: "Write your instructions here...",
        placeOrder: "Place Order via WhatsApp",
        selectQuantityCoffee: "Please select a quantity for the coffee.",
        selectSizeDrink: "Please select a size for the drink.",
        addedToCart: "{name} ({quantity}) added to cart!",
        basketEmptyOrder: "Your basket is empty.",
        orderMessage: "Hello! Here is my order:\n",
        totalLabel: "Total:",
        specialLabel: "Special instructions:",
        orderSent: "Order sent to WhatsApp! Cart cleared.",
        copyright: "&copy; 2023 RWA'3 El-MELOk Coffee. All rights reserved.",
        // Coffee items
        simpleCoffee: "Simple Coffee",
        simpleCoffeeDesc: "From the finest types of coffee",
        roastedCoffee: "Roasted Coffee",
        roastedCoffeeDesc: "Special coffee blend and roasting",
        frenchCoffee: "French Coffee",
        frenchCoffeeDesc: "Coffee mixed with flavors",
        hazelnutCoffee: "Hazelnut Coffee",
        hazelnutCoffeeDesc: "Coffee with distinctive hazelnut flavor",
        caramelCoffee: "Caramel Coffee",
        caramelCoffeeDesc: "Coffee with distinctive caramel flavor",
        chocolateCoffee: "Chocolate Coffee",
        chocolateCoffeeDesc: "Coffee with distinctive chocolate flavor",
        // Drinks
        latte: "Latte",
        latteDesc: "The best latte you'll drink",
        iceCoffee: "Ice Coffee",
        iceCoffeeDesc: "The best ice coffee with ice",
        spanishLatte: "Spanish Latte",
        spanishLatteDesc: "Espresso with condensed milk",
        cappuccinoMocha: "Cappuccino Mocha",
        cappuccinoMochaDesc: "Cappuccino with mocha and chocolate flavor",
        cupCoffee: "Cup of Coffee",
        cupCoffeeDesc: "All types of coffee",
        // Sizes
        small: "Small",
        large: "Large",
        price: "Price",
        cupPrice: "20 EGP",
        remove: "Remove"
    }
};

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    updateTexts();
}

// Function to update all texts
function updateTexts() {
    // Update title
    const page = document.body.className.includes('home') ? 'index' :
                 document.querySelector('#menu') ? 'menu' : 'cart';
    document.title = translations[currentLang].title[page];

    // Update elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });

    // Update select options
    document.querySelectorAll('select[data-key]').forEach(select => {
        const key = select.getAttribute('data-key');
        if (key === 'quantity' || key === 'size') {
            select.querySelector('option').innerText = translations[currentLang].chooseQuantity;
        }
    });

    // Update option elements with data-key
    document.querySelectorAll('option[data-key]').forEach(option => {
        const key = option.getAttribute('data-key');
        if (translations[currentLang][key]) {
            option.innerText = translations[currentLang][key];
        }
    });

    // Update cart display
    updateCartDisplay();
}

// Function to update cart display (for cart.html)
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalP = document.getElementById('cart-total');

    if (!cartItemsDiv || !cartTotalP) return; // Only on cart.html

    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        const emptyP = document.createElement('p');
        emptyP.setAttribute('data-key', 'emptyCart');
        emptyP.innerText = translations[currentLang].emptyCart;
        cartItemsDiv.appendChild(emptyP);
        cartTotalP.innerHTML = '';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.quantity} - ${item.price}</p>
            <button onclick="removeFromCart(${index})" data-key="remove">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += parseFloat(item.price.replace(/[^\d.]/g, ''));
    });

    cartTotalP.innerHTML = `<p data-key="total">${translations[currentLang].total}: $${total.toFixed(2)}</p>`;
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartDisplay();
}

// Function to add to cart
function addToCart(name, quantity, price, type) {
    if (type === 'coffee' && !quantity) {
        alert(translations[currentLang].selectQuantityCoffee);
        return;
    }
    if (type === 'drink' && !quantity) {
        alert(translations[currentLang].selectSizeDrink);
        return;
    }

    const item = {
        name: name,
        quantity: quantity,
        price: price
    };

    cart.push(item);
    saveCart();
    alert(translations[currentLang].addedToCart.replace('{name}', name).replace('{quantity}', quantity));
}

// Event listeners for menu.html
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.menu-grid')) {
        // Coffee add to cart
        const coffeeButtons = document.querySelectorAll('.order-btn[data-type="coffee"]');
        coffeeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const select = this.previousElementSibling; // quantity-select
                const quantity = select.value;
                const name = select.dataset.item;
                if (quantity) {
                    const [qty, price] = quantity.split('-');
                    addToCart(name, qty, price, 'coffee');
                    select.value = ''; // Reset select
                }
            });
        });
        
        // Drinks add to cart
        const drinkButtons = document.querySelectorAll('.order-btn[data-type="drink"]');
        drinkButtons.forEach(button => {
            button.addEventListener('click', function() {
                const select = this.previousElementSibling; // size-select
                const sizeValue = select.value;
                const name = select.dataset.item;
                if (sizeValue) {
                    const [size, price] = sizeValue.split('-');
                    addToCart(name, size, price, 'drink');
                    select.value = ''; // Reset select
                }
            });
        });
    }
    
    // Event listeners for cart.html
    if (document.getElementById('place-order-btn')) {
        const placeOrderBtn = document.getElementById('place-order-btn');
        const instructionsTextarea = document.getElementById('instructions');
        
        placeOrderBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert(translations[currentLang].basketEmptyOrder);
                return;
            }

            let message = translations[currentLang].orderMessage;
            cart.forEach(item => {
                message += `- ${item.name}: ${item.quantity} - ${item.price}\n`;
            });

            const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, '')), 0);
            message += translations[currentLang].totalLabel + total.toFixed(2) + '\n';

            const specialInstructions = instructionsTextarea.value.trim();
            if (specialInstructions) {
                message += translations[currentLang].specialLabel + specialInstructions + '\n';
            }

            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/201274446330?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');

            // Clear cart after order
            cart = [];
            saveCart();
            updateCartDisplay();
            instructionsTextarea.value = '';
            alert(translations[currentLang].orderSent);
        });
        
        // Load cart on page load
        updateCartDisplay();
    }

    // Initialize language
    setLanguage(currentLang);
});
