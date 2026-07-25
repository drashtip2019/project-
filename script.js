document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflowY = 'auto';
        }, 2500); // 2.5s loader
    }

    // 2. Scroll Progress & Sticky Navbar
    const scrollBar = document.getElementById('scrollBar');
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        // Scroll Progress
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollBar.style.width = scrollPercentage + '%';
        
        // Sticky Navbar
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top
        if (scrollTop > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 3. Mouse Glow Effect
    const glow = document.querySelector('.mouse-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    // 4. Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
        mobileBtn.innerHTML = `<i data-lucide="${icon}"></i>`;
        lucide.createIcons();
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.innerHTML = `<i data-lucide="menu"></i>`;
            lucide.createIcons();
        });
    });

    // 5. Scroll Reveals (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. Inject Featured Products
    const products = [
    {
        "id": 11,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Kundan Palace",
        "name": "Traditional Gold-Plated Bangles Set",
        "price": 499,
        "oldPrice": 699,
        "img1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPowLnD-BNUuZ82YrfC1WvUe-NmuzXgHvHptAe45fU_r6_E8bOORR5eFo&s=10",
        "img2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPowLnD-BNUuZ82YrfC1WvUe-NmuzXgHvHptAe45fU_r6_E8bOORR5eFo&s=10",
        "badge": "Sale"
    },
    {
        "id": 12,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Matha Patti",
        "name": "Emerald Jumke (Earrings)",
        "price": 599,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/earrings,jumke",
        "img2": "https://loremflickr.com/600/800/earrings,emerald",
        "badge": "New"
    },
    {
        "id": 13,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Saree Gallery",
        "name": "Pearl Saree Plu Set",
        "price": 349,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/saree,plu",
        "img2": "https://loremflickr.com/600/800/saree,accessories",
        "badge": null
    },
    {
        "id": 14,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Kundan Palace",
        "name": "Glass Bangles - Multicolor",
        "price": 299,
        "oldPrice": 399,
        "img1": "https://loremflickr.com/600/800/bangles,glass",
        "img2": "https://loremflickr.com/600/800/bangles,multicolor",
        "badge": "Sale"
    },
    {
        "id": 15,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Matha Patti",
        "name": "Ruby Red Chandbali Jumke",
        "price": 799,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/chandbali,jumke",
        "img2": "https://loremflickr.com/600/800/jumke,red",
        "badge": "New"
    },
    {
        "id": 16,
        "category": "accessories",
        "subcategory": "women",
        "brand": "Saree Gallery",
        "name": "Saree Brooch Collection",
        "price": 249,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/brooch,saree",
        "img2": "https://loremflickr.com/600/800/brooch,pin",
        "badge": null
    },
    {
        "id": 17,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Titan",
        "name": "Classic Analog Watch",
        "price": 4499,
        "oldPrice": 5999,
        "img1": "https://loremflickr.com/600/800/watch,analog",
        "img2": "https://loremflickr.com/600/800/watch,leather",
        "badge": "Sale"
    },
    {
        "id": 18,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Tanishq",
        "name": "Gold-Plated Kada (Bangle)",
        "price": 1299,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/kada,gold",
        "img2": "https://loremflickr.com/600/800/kada,bangle",
        "badge": "New"
    },
    {
        "id": 19,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Leather Gallery",
        "name": "Premium Leather Wallet",
        "price": 1599,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/wallet,leather",
        "img2": "https://loremflickr.com/600/800/wallet,premium",
        "badge": null
    },
    {
        "id": 20,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Arrow",
        "name": "Formal Leather Belt",
        "price": 899,
        "oldPrice": 1199,
        "img1": "https://loremflickr.com/600/800/belt,leather",
        "img2": "https://loremflickr.com/600/800/belt,formal",
        "badge": "Sale"
    },
    {
        "id": 21,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Tanishq",
        "name": "Silver Statement Ring",
        "price": 2499,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/ring,silver",
        "img2": "https://loremflickr.com/600/800/ring,statement",
        "badge": "New"
    },
    {
        "id": 22,
        "category": "accessories",
        "subcategory": "men",
        "brand": "Fastrack",
        "name": "Sports Digital Watch",
        "price": 2999,
        "oldPrice": 3999,
        "img1": "https://loremflickr.com/600/800/watch,digital",
        "img2": "https://loremflickr.com/600/800/watch,sports",
        "badge": "Sale"
    },
    {
        "id": 1,
        "category": "women",
        "brand": "Zara",
        "name": "Floral Summer Dress",
        "price": 2999,
        "oldPrice": 3999,
        "img1": "https://loremflickr.com/600/800/dress,floral",
        "img2": "https://loremflickr.com/600/800/dress,floral",
        "badge": "New"
    },
    {
        "id": 2,
        "category": "women",
        "brand": "H&M",
        "name": "Elegant Evening Maxi",
        "price": 4599,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/dress,evening",
        "img2": "https://loremflickr.com/600/800/dress,evening",
        "badge": null
    },
    {
        "id": 3,
        "category": "women",
        "brand": "Nalli",
        "name": "Banarasi Silk Saree",
        "price": 8999,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/saree,silk",
        "img2": "https://loremflickr.com/600/800/saree,silk",
        "badge": null
    },
    {
        "id": 4,
        "category": "women",
        "brand": "Manish Malhotra",
        "name": "Designer Georgette Saree",
        "price": 15500,
        "oldPrice": 16500,
        "img1": "https://loremflickr.com/600/800/saree,designer",
        "img2": "https://loremflickr.com/600/800/saree,designer",
        "badge": null
    },
    {
        "id": 5,
        "category": "women",
        "brand": "FabIndia",
        "name": "Classic Cotton Saree",
        "price": 2199,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/saree,cotton",
        "img2": "https://loremflickr.com/600/800/saree,cotton",
        "badge": "New"
    },
    {
        "id": 6,
        "category": "women",
        "brand": "Kalyan",
        "name": "Traditional Silk Saree",
        "price": 12400,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/saree,traditional",
        "img2": "https://loremflickr.com/600/800/saree,traditional",
        "badge": "Sale"
    },
    {
        "id": 7,
        "category": "women",
        "brand": "Biba",
        "name": "Embroidered Anarkali Suit",
        "price": 3499,
        "oldPrice": 4499,
        "img1": "https://loremflickr.com/600/800/anarkali,suit",
        "img2": "https://loremflickr.com/600/800/anarkali,suit",
        "badge": null
    },
    {
        "id": 8,
        "category": "women",
        "brand": "W",
        "name": "Printed Cotton Kurti",
        "price": 1299,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/kurti,printed",
        "img2": "https://loremflickr.com/600/800/kurti,printed",
        "badge": null
    },
    {
        "id": 9,
        "category": "women",
        "brand": "Ritu Kumar",
        "name": "Designer Salwar Kameez",
        "price": 6500,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/salwar,kameez",
        "img2": "https://loremflickr.com/600/800/salwar,kameez",
        "badge": "New"
    },
    {
        "id": 10,
        "category": "women",
        "brand": "Mango",
        "name": "Wrap Midi Dress",
        "price": 3299,
        "oldPrice": 4299,
        "img1": "https://loremflickr.com/600/800/dress,midi",
        "img2": "https://loremflickr.com/600/800/dress,midi",
        "badge": null
    },
    {
        "id": 11,
        "category": "women",
        "brand": "Levi's",
        "name": "Casual Denim Jacket",
        "price": 2499,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/jacket,denim,women",
        "img2": "https://loremflickr.com/600/800/jacket,denim,women",
        "badge": "Sale"
    },
    {
        "id": 12,
        "category": "women",
        "brand": "Vero Moda",
        "name": "Pleated Midi Skirt",
        "price": 1799,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/skirt,pleated",
        "img2": "https://loremflickr.com/600/800/skirt,pleated",
        "badge": null
    },
    {
        "id": 13,
        "category": "women",
        "brand": "Forever 21",
        "name": "Chiffon Crop Top",
        "price": 999,
        "oldPrice": 1999,
        "img1": "https://loremflickr.com/600/800/top,crop",
        "img2": "https://loremflickr.com/600/800/top,crop",
        "badge": "New"
    },
    {
        "id": 14,
        "category": "women",
        "brand": "Samyakk",
        "name": "Traditional Dress",
        "price": 10600,
        "oldPrice": null,
        "img1": "https://media.samyakk.com/pub/media/catalog/product/g/r/green-shimmer-organza-designer-lehenga-with-printed-jacket-gc4759-b.jpg",
        "img2": "https://media.samyakk.com/pub/media/catalog/product/g/r/green-shimmer-organza-designer-lehenga-with-printed-jacket-gc4759-b.jpg",
        "badge": null
    },
    {
        "id": 15,
        "category": "women",
        "brand": "Aarsa",
        "name": "Indo Western Lehenga",
        "price": 16880,
        "oldPrice": null,
        "img1": "https://aarsa.in/cdn/shop/files/royal-blue-indo-western-front-view.jpg?v=1740574409&width=1946",
        "img2": "https://aarsa.in/cdn/shop/files/royal-blue-indo-western-front-view.jpg?v=1740574409&width=1946",
        "badge": null
    },
    {
        "id": 16,
        "category": "men",
        "brand": "Raymond",
        "name": "Classic White Shirt",
        "price": 1599,
        "oldPrice": 2099,
        "img1": "https://loremflickr.com/600/800/shirt,white,man",
        "img2": "https://loremflickr.com/600/800/shirt,white,man",
        "badge": "New"
    },
    {
        "id": 17,
        "category": "men",
        "brand": "Levi's",
        "name": "Casual Denim Shirt",
        "price": 2199,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/shirt,denim,man",
        "img2": "https://loremflickr.com/600/800/shirt,denim,man",
        "badge": null
    },
    {
        "id": 18,
        "category": "men",
        "brand": "Arrow",
        "name": "Oxford Button-Down",
        "price": 1899,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/shirt,oxford",
        "img2": "https://loremflickr.com/600/800/shirt,oxford",
        "badge": null
    },
    {
        "id": 19,
        "category": "men",
        "brand": "Peter England",
        "name": "Slim Fit Formal Shirt",
        "price": 1299,
        "oldPrice": 1799,
        "img1": "https://loremflickr.com/600/800/shirt,formal",
        "img2": "https://loremflickr.com/600/800/shirt,formal",
        "badge": null
    },
    {
        "id": 20,
        "category": "men",
        "brand": "U.S. Polo Assn.",
        "name": "Cotton Polo T-Shirt",
        "price": 1499,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/tshirt,polo",
        "img2": "https://loremflickr.com/600/800/tshirt,polo",
        "badge": "New"
    },
    {
        "id": 21,
        "category": "men",
        "brand": "Jack & Jones",
        "name": "Graphic Print Tee",
        "price": 899,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/tshirt,graphic",
        "img2": "https://loremflickr.com/600/800/tshirt,graphic",
        "badge": "Sale"
    },
    {
        "id": 22,
        "category": "men",
        "brand": "H&M",
        "name": "Basic Crew Neck T-Shirt",
        "price": 599,
        "oldPrice": 1099,
        "img1": "https://loremflickr.com/600/800/tshirt,basic",
        "img2": "https://loremflickr.com/600/800/tshirt,basic",
        "badge": null
    },
    {
        "id": 23,
        "category": "men",
        "brand": "Zara",
        "name": "V-Neck Muscle Tee",
        "price": 999,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/tshirt,vneck",
        "img2": "https://loremflickr.com/600/800/tshirt,vneck",
        "badge": null
    },
    {
        "id": 24,
        "category": "men",
        "brand": "Blackberrys",
        "name": "Slim Fit Chinos",
        "price": 2299,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/pants,chinos",
        "img2": "https://loremflickr.com/600/800/pants,chinos",
        "badge": "New"
    },
    {
        "id": 25,
        "category": "men",
        "brand": "Wrangler",
        "name": "Straight Fit Jeans",
        "price": 2799,
        "oldPrice": 3299,
        "img1": "https://loremflickr.com/600/800/jeans,man",
        "img2": "https://loremflickr.com/600/800/jeans,man",
        "badge": null
    },
    {
        "id": 26,
        "category": "men",
        "brand": "Van Heusen",
        "name": "Formal Trousers",
        "price": 1999,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/trousers,formal",
        "img2": "https://loremflickr.com/600/800/trousers,formal",
        "badge": "Sale"
    },
    {
        "id": 27,
        "category": "men",
        "brand": "Woodland",
        "name": "Cotton Cargo Pants",
        "price": 2599,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/pants,cargo",
        "img2": "https://loremflickr.com/600/800/pants,cargo",
        "badge": null
    },
    {
        "id": 28,
        "category": "men",
        "brand": "Louis Philippe",
        "name": "Tailored Blazer",
        "price": 5999,
        "oldPrice": 6499,
        "img1": "https://loremflickr.com/600/800/blazer,man",
        "img2": "https://loremflickr.com/600/800/blazer,man",
        "badge": "New"
    },
    {
        "id": 29,
        "category": "men",
        "brand": "Puma",
        "name": "Fleece Pullover Hoodie",
        "price": 3499,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/hoodie,man",
        "img2": "https://loremflickr.com/600/800/hoodie,man",
        "badge": null
    },
    {
        "id": 30,
        "category": "men",
        "brand": "Tommy Hilfiger",
        "name": "Leather Biker Jacket",
        "price": 8999,
        "oldPrice": null,
        "img1": "https://loremflickr.com/600/800/jacket,leather,man",
        "img2": "https://loremflickr.com/600/800/jacket,leather,man",
        "badge": null
    }
];

    // Detect current page and filter products
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    let filteredProducts = products;
    
    if (currentPage === 'women') {
        filteredProducts = products.filter(p => p.category === 'women');
    } else if (currentPage === 'men') {
        filteredProducts = products.filter(p => p.category === 'men');
    } else if (currentPage === 'accessories') {
        filteredProducts = products.filter(p => p.category === 'accessories');
    }

    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.innerHTML = filteredProducts.map(p => `
            <div class="product-card">
                <a href="product_details.html?name=${encodeURIComponent(p.name)}&price=${p.price}&img=${encodeURIComponent(p.img1)}" style="text-decoration: none; color: inherit;">
                    <img src="${p.img1}" alt="${p.name}" class="product-img">
                    <h3>${p.name}</h3>
                    <p class="price">₹${p.price}</p>
                </a>
                <div style="display: flex; gap: 10px; margin-top: 10px;">
                    <button class="btn btn-primary" style="flex: 1; padding: 8px; font-size: 0.8rem;">BUY NOW</button>
                    <button class="btn btn-outline" style="flex: 1; padding: 8px; font-size: 0.8rem;">ADD TO CART</button>
                </div>
            </div>
        `).join('');
    }


    // 7. Flash Sale Countdown
    const countdown = () => {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minsEl = document.getElementById('minutes');
        const secsEl = document.getElementById('seconds');
        
        if(!daysEl) return;

        let d = 2;
        let h = 14;
        let m = 45;
        let s = 30;

        setInterval(() => {
            s--;
            if (s < 0) { s = 59; m--; }
            if (m < 0) { m = 59; h--; }
            if (h < 0) { h = 23; d--; }
            if (d < 0) { d = 0; h = 0; m = 0; s = 0; } // end
            
            daysEl.innerText = d.toString().padStart(2, '0');
            hoursEl.innerText = h.toString().padStart(2, '0');
            minsEl.innerText = m.toString().padStart(2, '0');
            secsEl.innerText = s.toString().padStart(2, '0');
        }, 1000);
    };
    countdown();

    // 8. Testimonial Slider
    const tBtns = document.querySelectorAll('.t-btn');
    const tContent = document.querySelector('.testimonial-content');
    
    const testimonials = [
        {
            text: "The quality of the clothing is absolutely unmatched. The fit is perfect, and the customer service was incredibly helpful when I had questions. VogueWear is now my go-to for elegant fashion.",
            author: "Sarah J.",
            img: "https://loremflickr.com/150/150/woman,face"
        },
        {
            text: "I recently bought a suit from their new collection. The attention to detail and the fabric feel so premium. It genuinely feels like a bespoke piece. Highly recommend!",
            author: "Michael R.",
            img: "https://loremflickr.com/150/150/man,face"
        },
        {
            text: "Fast shipping and stunning packaging. Opening my VogueWear order felt like an experience. The dress I ordered is flawless.",
            author: "Emma W.",
            img: "https://loremflickr.com/150/150/woman,portrait"
        }
    ];

    tBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            tBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Fade out
            tContent.classList.remove('active');
            
            setTimeout(() => {
                const t = testimonials[index];
                tContent.innerHTML = `
                    <div class="stars">
                        <i data-lucide="star" class="filled"></i>
                        <i data-lucide="star" class="filled"></i>
                        <i data-lucide="star" class="filled"></i>
                        <i data-lucide="star" class="filled"></i>
                        <i data-lucide="star" class="filled"></i>
                    </div>
                    <p class="quote">"${t.text}"</p>
                    <div class="author">
                        <img src="${t.img}" alt="${t.author}">
                        <div>
                            <h4>${t.author}</h4>
                            <span>Verified Buyer</span>
                        </div>
                    </div>
                `;
                lucide.createIcons();
                // Fade back in
                tContent.classList.add('active');
            }, 300);
        });
    });

    // Auto slide testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        tBtns[currentTestimonial].click();
    }, 6000);

    // 9. Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    const successMsg = document.getElementById('successMsg');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerHTML = '<i data-lucide="loader" class="spin"></i> Subscribing...';
            lucide.createIcons();
            
            setTimeout(() => {
                newsletterForm.style.display = 'none';
                successMsg.style.display = 'block';
            }, 1500);
        });
    }

    // Add simple spin animation for the loader icon in newsletter
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
    `;
    document.head.appendChild(style);
});
