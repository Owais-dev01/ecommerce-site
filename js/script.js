// =====================================================
// PRODUCTS DATABASE & CONSTANTS
// =====================================================
const MINIMUM_ORDER_VALUE = 1500;
const MIN_ORDER_WARNING = `Minimum order requirement: PKR ${MINIMUM_ORDER_VALUE}`;

const productsDatabase = [{
        id: 1,
        name: 'Premium Chocolate Delights',
        brand: 'Lindt',
        category: 'chocolate',
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.5,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&q=80',
        description: 'Premium quality chocolate delights crafted with the finest ingredients. Perfect for gift-giving or personal enjoyment. Each piece is carefully made to ensure superior taste and texture.'
    },
    {
        id: 2,
        name: 'Gummy Bears Collection',
        brand: 'Haribo',
        category: 'gummies',
        price: 12.99,
        originalPrice: 18.99,
        rating: 5,
        reviews: 456,
        image: 'https://images.unsplash.com/photo-1599599810445-85fc8e0ef84c?w=400&q=80',
        description: 'Delicious gummy bears in assorted flavors. Fun, tasty, and perfect for all ages. Made with quality ingredients and vibrant natural colors.'
    },
    {
        id: 3,
        name: 'Colorful Lollipops',
        brand: 'Dum Dums',
        category: 'hard',
        price: 8.99,
        originalPrice: 12.99,
        rating: 4.5,
        reviews: 123,
        image: 'https://images.unsplash.com/photo-1599599810829-5d37f80ea8da?w=400&q=80',
        description: 'Bright and colorful lollipops with amazing flavors. Great for parties and celebrations. Each lollipop is individually wrapped.'
    },
    {
        id: 4,
        name: 'Sweet Caramel Candies',
        brand: 'Werther\'s',
        category: 'hard',
        price: 16.99,
        originalPrice: 22.99,
        rating: 5,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1599599810732-c7bd16f3eb0e?w=400&q=80',
        description: 'Soft, chewy caramel candies with a rich, buttery taste. Individually wrapped for freshness. Perfect as a gift or treat for yourself.'
    },
    {
        id: 5,
        name: 'Fresh Mint Candies',
        brand: 'Altoids',
        category: 'mints',
        price: 5.99,
        originalPrice: 8.99,
        rating: 4.5,
        reviews: 267,
        image: 'https://images.unsplash.com/photo-1599599810888-4e8db6e4f5f5?w=400&q=80',
        description: 'Refreshing mint candies to freshen your breath. Strong mint flavor that lasts. Available in various pack sizes.'
    },
    {
        id: 6,
        name: 'Gourmet Truffle Mix',
        brand: 'Lindt',
        category: 'chocolate',
        price: 22.99,
        originalPrice: 32.99,
        rating: 5,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=400&q=80',
        description: 'Assorted gourmet chocolate truffles with premium fillings. Perfect for special occasions and gifting.'
    },
    {
        id: 7,
        name: 'Fruity Jelly Beans',
        brand: 'Haribo',
        category: 'gummies',
        price: 9.99,
        originalPrice: 14.99,
        rating: 4.5,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1599599810445-85fc8e0ef84c?w=400&q=80',
        description: 'Vibrant and flavorful jelly beans with authentic fruit taste. Bulk quantity in resealable package.'
    },
    {
        id: 8,
        name: 'Sugar-Free Mints',
        brand: 'Altoids',
        category: 'mints',
        price: 6.99,
        originalPrice: 9.99,
        rating: 4,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1599599810888-4e8db6e4f5f5?w=400&q=80',
        description: 'Sugar-free mint candies for guilt-free freshness. Great for health-conscious individuals.'
    }
];

// =====================================================
// SLIDER FUNCTIONALITY
// =====================================================
function initSlider() {
    const slider = document.querySelector('.products-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const itemWidth = document.querySelector('.slider-item') ? .offsetWidth || 300;
    const gap = 20;

    if (prevBtn && nextBtn && slider) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -(itemWidth + gap),
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: itemWidth + gap,
                behavior: 'smooth'
            });
        });
    }
}

// =====================================================
// PRODUCTS PAGE - LOAD & FILTER
// =====================================================
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = productsDatabase.map(product => `
        <div class="col animate-slide-up">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary custom-btn">View Details</a>
                    </div>
                </div>
                <div class="product-info">
                    <h5>${product.name}</h5>
                    <p class="text-muted">${product.brand}</p>
                    <div class="rating mb-2">
                        ${generateStarRating(product.rating)}
                    </div>
                    <div class="price-section">
                        <span class="price">PKR ${product.price}</span>
                        <span class="original-price">PKR ${product.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// =====================================================
// STAR RATING GENERATOR
// =====================================================
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }

    return stars;
}

// =====================================================
// FILTER PRODUCTS
// =====================================================
function initFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-check');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });

    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = e.target.value;
            filterProducts();
        });
    }
}

function filterProducts() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-check:checked'))
        .filter(cb => cb.id.startsWith('cat') || cb.id.startsWith('brand'))
        .map(cb => cb.value);

    const maxPrice = parseFloat(document.getElementById('priceRange') ? .value || 100);

    const filtered = productsDatabase.filter(product => {
        const categoryMatch = selectedCategories.length === 0 ||
            selectedCategories.includes(product.category) ||
            selectedCategories.includes(product.brand);
        const priceMatch = product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    displayFilteredProducts(filtered);
}

function displayFilteredProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="col-12 text-center py-5"><p class="lead">No products found matching your criteria.</p></div>';
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="col animate-slide-up">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary custom-btn">View Details</a>
                    </div>
                </div>
                <div class="product-info">
                    <h5>${product.name}</h5>
                    <p class="text-muted">${product.brand}</p>
                    <div class="rating mb-2">
                        ${generateStarRating(product.rating)}
                    </div>
                    <div class="price-section">
                        <span class="price">PKR ${product.price}</span>
                        <span class="original-price">PKR ${product.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// =====================================================
// PRODUCT DETAIL PAGE
// =====================================================
function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = productsDatabase.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found');
        return;
    }

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumbName');
    if (breadcrumb) breadcrumb.textContent = product.name;

    // Update product info
    document.getElementById('mainImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `PKR ${product.price}`;
    document.getElementById('productOriginalPrice').textContent = `PKR ${product.originalPrice}`;
    document.getElementById('productBrand').textContent = product.brand;
    document.getElementById('productCategory').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    document.getElementById('productDescription').textContent = product.description;

    // Update rating
    const ratingContainer = document.querySelector('.rating');
    if (ratingContainer) {
        ratingContainer.innerHTML = generateStarRating(product.rating) +
            `<span class="ms-2 text-muted">(${product.reviews} reviews)</span>`;
    }

    // Add to cart functionality
    const addToCartBtn = document.getElementById('addToCart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(document.getElementById('quantity').value);
            addToCart(product, quantity);
            updateCartDisplay();
        });
    }

    // Quantity controls
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantity');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value);
            if (current > 1) quantityInput.value = current - 1;
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const current = parseInt(quantityInput.value);
            quantityInput.value = current + 1;
        });
    }

    // Initial cart display
    updateCartDisplay(); // Load related products
    loadRelatedProducts(product.category, productId);
}

function loadRelatedProducts(category, excludeId) {
    const relatedContainer = document.getElementById('relatedProducts');
    if (!relatedContainer) return;

    const related = productsDatabase.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);

    relatedContainer.innerHTML = related.map(product => `
        <div class="col animate-scale">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary custom-btn">View Details</a>
                    </div>
                </div>
                <div class="product-info">
                    <h5>${product.name}</h5>
                    <p class="text-muted">${product.brand}</p>
                    <div class="rating mb-2">
                        ${generateStarRating(product.rating)}
                    </div>
                    <div class="price-section">
                        <span class="price">PKR ${product.price}</span>
                        <span class="original-price">PKR ${product.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(product, quantity) {
    // Get existing cart or create new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({...product, quantity });
    }

    // Calculate total cart value
    const cartTotal = calculateCartTotal(cart);

    // Check minimum order requirement
    if (cartTotal < MINIMUM_ORDER_VALUE) {
        showNotification(
            `Order total: PKR ${cartTotal.toFixed(2)}. ${MIN_ORDER_WARNING}. You need PKR ${(MINIMUM_ORDER_VALUE - cartTotal).toFixed(2)} more.`,
            'warning'
        );
    } else {
        showNotification(`${product.name} added to cart! Total: PKR ${cartTotal.toFixed(2)}`, 'success');
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function calculateCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartDisplay() {
    const cartValueElement = document.getElementById('cartValue');
    if (cartValueElement) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = calculateCartTotal(cart);
        cartValueElement.textContent = `PKR ${total.toFixed(2)}`;

        // Update color based on minimum order requirement
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            if (total >= MINIMUM_ORDER_VALUE) {
                cartTotal.className = 'mt-2 text-success fw-bold';
                cartTotal.innerHTML = `<small><i class="fas fa-check-circle me-1"></i>Current cart total: <span id="cartValue">PKR ${total.toFixed(2)}</span> (Order ready!)</small>`;
            } else {
                cartTotal.className = 'mt-2 text-warning';
                cartTotal.innerHTML = `<small>Current cart total: <span id="cartValue">PKR ${total.toFixed(2)}</span> (Need PKR ${(MINIMUM_ORDER_VALUE - total).toFixed(2)} more)</small>`;
            }
        }
    }
}

// =====================================================
// CONTACT FORM
// =====================================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }

        // Save to localStorage for demonstration
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        messages.push({...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('contactMessages', JSON.stringify(messages));

        // Reset form
        contactForm.reset();

        // Show success message
        showNotification('Message sent successfully! We will contact you soon.', 'success');
    });
}

// =====================================================
// NOTIFICATIONS
// =====================================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    let alertType = 'success';
    if (type === 'error') alertType = 'danger';
    else if (type === 'warning') alertType = 'warning';

    const notification = document.createElement('div');
    notification.className = `notification alert alert-${alertType} alert-dismissible fade show`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideDown 0.5s ease-in-out;
    `;
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// =====================================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// =====================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// =====================================================
// ACTIVE NAV LINK
// =====================================================
function updateActiveNavLink() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// =====================================================
// LAZY LOADING FOR IMAGES
// =====================================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// =====================================================
// INIT ALL ON PAGE LOAD
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize functions based on page
    initSlider();
    initSmoothScroll();
    updateActiveNavLink();
    initLazyLoading();

    // Page specific initialization
    if (document.getElementById('productsGrid')) {
        loadProducts();
        initFilters();
    }

    if (document.getElementById('productName')) {
        loadProductDetail();
    }

    if (document.getElementById('contactForm')) {
        initContactForm();
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideUp 0.8s ease-in-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale').forEach(el => {
        observer.observe(el);
    });
});

// =====================================================
// MOBILE MENU CLOSE ON LINK CLICK
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarToggler.click();
            }
        });
    });
});

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 30) {
            if (!navbar.classList.contains('bg-dark')) {
                navbar.classList.add('bg-dark');
            }
        } else {
            navbar.classList.remove('bg-dark');
        }
    }
});

// =====================================================
// SCROLL TO TOP BUTTON
// =====================================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 300) {
        if (!document.getElementById('scrollTopBtn')) {
            const btn = document.createElement('button');
            btn.id = 'scrollTopBtn';
            btn.className = 'btn btn-primary custom-btn';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 999;
                width: 50px;
                height: 50px;
                padding: 0;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: slideUp 0.3s ease-in-out;
            `;
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            document.body.appendChild(btn);
        }
    } else {
        const btn = document.getElementById('scrollTopBtn');
        if (btn) btn.remove();
    }
});