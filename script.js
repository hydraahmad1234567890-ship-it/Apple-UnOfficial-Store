const products = [
    {
        id: 1,
        title: "AirPods Max",
        topic: "Over-ear",
        des: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.",
        image: "apple-airpods-max.jpg",
        bgColor: "#e3e3e3",
        price: "$549.00",
        specs: { "Charging": "1.5 Hours", "Usage": "20 Hours", "Battery": "664 mAh", "Bluetooth": "5.0", "Audio": "Spatial" }
    },
    {
        id: 2,
        title: "AirPods Pro",
        topic: "In-ear",
        des: "AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio.",
        image: "apple-airpods-pro.jpg",
        bgColor: "#60b6fb",
        price: "$249.00",
        specs: { "Charging": "1.0 Hour", "Usage": "6 Hours", "Battery": "523 mAh", "Bluetooth": "5.3", "Rating": "IPX4" }
    },
    {
        id: 3,
        title: "iPhone 14 Mini",
        topic: "Compact",
        des: "The most powerful compact smartphone. Incredible performance in a size that fits perfectly in your hand.",
        image: "iphone-14-mini.jpg",
        bgColor: "#ff7675",
        price: "$599.00",
        specs: { "Charging": "1.2 Hours", "Usage": "17 Hours", "Battery": "2406 mAh", "Chip": "A15 Bionic", "Network": "5G" }
    },
    {
        id: 4,
        title: "iPhone 17 Air",
        topic: "Futuristic",
        des: "The thinnest iPhone ever made. A revolutionary design that pushes the boundaries of engineering and aesthetics.",
        image: "iphone-17-air.jpg",
        bgColor: "#55efc4",
        price: "$1,199.00",
        specs: { "Charging": "0.5 Hour", "Usage": "24 Hours", "Battery": "3500 mAh", "Thickness": "5mm", "Weight": "120g" }
    },
    {
        id: 5,
        title: "iPhone 17 Pro Max",
        topic: "Powerhouse",
        des: "The ultimate Pro experience. Featuring the most advanced camera system and the fastest chip ever in a smartphone.",
        image: "iphone-17-pro-max.jpg",
        bgColor: "#ff8c00",
        price: "$1,299.00",
        specs: { "Charging": "0.8 Hour", "Usage": "29 Hours", "Battery": "4852 mAh", "Chip": "A19 Pro", "Zoom": "10x" }
    },
    {
        id: 6,
        title: "MacBook Air M4",
        topic: "Portable",
        des: "Strikingly thin and fast so you can work, play, or create anywhere. The new M4 chip makes it more capable than ever.",
        image: "macbook-air-13-inch-m4.jpg",
        bgColor: "#ffeaa7",
        price: "$1,099.00",
        specs: { "Charging": "1.5 Hours", "Usage": "18 Hours", "Battery": "66.5 Wh", "Chip": "M4", "Memory": "24GB" }
    },
    {
        id: 7,
        title: "iPad Pro M4",
        topic: "Creativity",
        des: "The thinnest Apple product ever. Featuring the world's most advanced display and the outrageous performance of M4.",
        image: "ipad-pro.jpg",
        bgColor: "#a29bfe",
        price: "$999.00",
        specs: { "Display": "Tandem OLED", "Chip": "M4", "Pencil": "Pro", "Refresh": "120Hz", "Storage": "2TB" }
    },
    {
        id: 8,
        title: "Apple Watch Ultra 2",
        topic: "Adventure",
        des: "The most rugged and capable Apple Watch. Designed for the demands of endurance athletes and explorers.",
        image: "apple-airpods-max.jpg", // Placeholder
        bgColor: "#ff9f43",
        price: "$799.00",
        specs: { "Usage": "36 Hours", "Case": "Titanium", "Brightness": "3000 nits", "Water": "100m", "GPS": "Dual-freq" }
    },
    {
        id: 9,
        title: "Mac Mini",
        topic: "Desktop",
        des: "More muscle. More hustle. Mac mini with M2 or M2 Pro is so fast, you can get more done, more quickly.",
        image: "apple-mac-mini.jpg",
        bgColor: "#dfe6e9",
        price: "$599.00",
        specs: { "Chip": "M2 Pro", "Memory": "32GB", "Storage": "8TB", "Ports": "Thunderbolt 4", "Video": "8K Support" }
    },
    {
        id: 10,
        title: "Vision Pro",
        topic: "Spatial",
        des: "Welcome to the era of spatial computing. Apple Vision Pro seamlessly blends digital content with your physical space.",
        image: "apple-vision-pro.jpg",
        bgColor: "#6c5ce7",
        price: "$3,499.00",
        specs: { "Display": "Micro-OLED", "Chip": "M2 + R1", "Audio": "Spatial", "Tracking": "Eye/Hand", "Battery": "2 Hours" }
    },
    {
        id: 11,
        title: "iPad Air",
        topic: "Versatile",
        des: "Light. Bright. Full of might. iPad Air is powered by the Apple M2 chip. It features a stunning Liquid Retina display.",
        image: "ipad-air.jpg",
        bgColor: "#74b9ff",
        price: "$599.00",
        specs: { "Chip": "M2", "Camera": "12MP", "Display": "Liquid Retina", "TouchID": "Top Button", "Pencil": "USB-C" }
    },
    {
        id: 12,
        title: "iPhone 15",
        topic: "Mainstream",
        des: "New camera. New design. Newfound powers. iPhone 15 features Dynamic Island, a 48MP Main camera, and USB-C.",
        image: "iphone-15.jpg",
        bgColor: "#fd79a8",
        price: "$799.00",
        specs: { "Camera": "48MP", "Port": "USB-C", "Chip": "A16 Bionic", "Display": "Super Retina", "Dynamic": "Island" }
    },
    {
        id: 13,
        title: "iPhone XS Max",
        topic: "Legacy",
        des: "Welcome to the big screens. Super Retina in two sizes — including the largest display ever on an iPhone.",
        image: "iphone-xs-max.jpg",
        bgColor: "#f39c12",
        price: "$499.00",
        specs: { "Display": "6.5 OLED", "Chip": "A12 Bionic", "Camera": "Dual 12MP", "FaceID": "Gen 2", "Build": "Steel/Glass" }
    },
    {
        id: 14,
        title: "iPhone 16 Pro Max",
        topic: "Advanced",
        des: "The most advanced iPhone yet. Featuring a larger display, Camera Control, and the incredible A18 Pro chip.",
        image: "apple-iphone-16-pro-max.jpg",
        bgColor: "#2d3436",
        price: "$1,199.00",
        specs: { "Chip": "A18 Pro", "Camera": "48MP Tele", "Display": "6.9 inch", "Battery": "Best Ever", "Button": "Action" }
    },
    {
        id: 15,
        title: "MacBook Neo",
        topic: "Next-Gen",
        des: "A glimpse into the future of computing. The MacBook Neo features a dual-screen design with seamless integration.",
        image: "macbook-neo.jpg",
        bgColor: "#8e44ad",
        price: "$1,999.00",
        specs: { "Chip": "M4 Ultra", "Display": "Dual XDR", "Memory": "64GB", "Battery": "30 Hours", "Weight": "1.2kg" }
    },
    {
        id: 16,
        title: "MacBook Pro M3",
        topic: "Professional",
        des: "Mind-blowing. Head-turning. The most advanced chips ever built for a personal computer.",
        image: "macbook-pro.jpg",
        bgColor: "#34495e",
        price: "$2,499.00",
        specs: { "Chip": "M3 Max", "Memory": "128GB", "Display": "Liquid XDR", "Battery": "22 Hours", "GPU": "40-Core" }
    },
    {
        id: 17,
        title: "MacBook Air M2",
        topic: "Sleek",
        des: "Strikingly thin and fast so you can work, play, or create anywhere. The M2 chip makes it more capable than ever.",
        image: "macbook-air-m2.jpg",
        bgColor: "#2980b9",
        price: "$999.00",
        specs: { "Chip": "M2", "Battery": "18 Hours", "Weight": "1.24kg", "Display": "Liquid Retina", "Audio": "Four-speaker" }
    },
    {
        id: 18,
        title: "Vision",
        topic: "Entry",
        des: "Experience spatial computing at a new scale. The lighter, more accessible version of the Vision Pro.",
        image: "apple-vision.jpg",
        bgColor: "#b2bec3",
        price: "$1,999.00",
        specs: { "Display": "4K Per Eye", "Chip": "M2", "Weight": "450g", "Battery": "External", "Fit": "Solo Knit" }
    },
    {
        id: 19,
        title: "Apple Watch Series 7",
        topic: "Classic",
        des: "The largest, most advanced Always-On Retina display yet. Series 7 is the most durable Apple Watch ever built.",
        image: "apple-series-7.jpg",
        bgColor: "#00b894",
        price: "$399.00",
        specs: { "Display": "Always-On", "Charge": "Fast", "Durability": "IP6X", "ECG": "Yes", "Oxygen": "Yes" }
    },
    {
        id: 20,
        title: "Apple Watch Series 8",
        topic: "Health",
        des: "Advanced sensors for insights into your health. Crash Detection for your safety. A future-proof health partner.",
        image: "images/Apple Seriess 8.jpg",
        bgColor: "#d63031",
        price: "$429.00",
        specs: { "Sensor": "Temp", "Crash": "Detection", "Cycle": "Tracking", "Display": "Retina", "Heart": "Insights" }
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];
let activeIndex = 0;

const carouselList = document.getElementById('carousel-list');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const backBtn = document.getElementById('back');
const carousel = document.querySelector('.carousel');

function saveCart() {
    localStorage.setItem('apple_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounts.forEach(el => el.textContent = totalItems);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    alert(`${product.title} added to cart!`);
}

// Initialize Carousel
function init() {
    if (!carouselList) return; 
    
    carousel.style.setProperty('--bg-color', products[0].bgColor);
    carousel.style.backgroundColor = products[0].bgColor + '10';

    products.forEach((product, index) => {
        const item = document.createElement('div');
        item.classList.add('item');
        if (index === 0) item.classList.add('active');
        
        let specsHTML = '';
        for (const [key, value] of Object.entries(product.specs)) {
            specsHTML += `<div><p>${key}</p><span>${value}</span></div>`;
        }

        item.innerHTML = `
            <div class="intro">
                <div class="content">
                    <div class="topic">${product.topic}</div>
                    <div class="title">${product.title}</div>
                    <div class="des">${product.des}</div>
                    <button class="see-more">See details &#8599;</button>
                </div>
            </div>
            <div class="detail">
                <div class="content">
                    <div class="title">${product.title}</div>
                    <div class="des">${product.des}</div>
                    <div class="spec">${specsHTML}</div>
                    <div class="price-tag">Price: <span>${product.price}</span></div>
                    <div class="checkout">
                        <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO CART</button>
                        <button class="buy-now" onclick="location.href='checkout.html'">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src="${product.image}" alt="${product.title}">
            </div>
        `;
        carouselList.appendChild(item);

        item.querySelector('.see-more').onclick = () => {
            carousel.classList.add('showDetail');
        };
    });
    
    updateCartCount();
}

// Parallax Effect
document.addEventListener('mousemove', (e) => {
    if (carousel.classList.contains('showDetail')) return;
    const activeImg = document.querySelector('.item.active .image img');
    if (!activeImg) return;
    
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    activeImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

function showSlider(type) {
    const items = document.querySelectorAll('.carousel .list .item');
    carousel.classList.remove('showDetail');
    items[activeIndex].classList.remove('active');

    if (type === 'next') {
        activeIndex = (activeIndex + 1) % items.length;
    } else {
        activeIndex = (activeIndex - 1 + items.length) % items.length;
    }

    items[activeIndex].classList.add('active');
    carousel.style.setProperty('--bg-color', products[activeIndex].bgColor);
    carousel.style.backgroundColor = products[activeIndex].bgColor + '10';
}

if (nextBtn) nextBtn.onclick = () => showSlider('next');
if (prevBtn) prevBtn.onclick = () => showSlider('prev');
if (backBtn) backBtn.onclick = () => carousel.classList.remove('showDetail');

init();
