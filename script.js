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
            id: 1,
            category: "women",
            brand: "Biba",
            name: "Banarasi Silk Saree",
            price: 1299.00,
            oldPrice: 1699.00,
            img1: "https://loremflickr.com/600/800/saree,silk",
            img2: "https://loremflickr.com/600/800/banarasi,traditional",
            badge: "Sale"
        },
        {
            id: 2,
            category: "women",
            brand: "Fabindia",
            name: "Cotton Printed Kurta",
            price: 599.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/kurta,cotton",
            img2: "https://loremflickr.com/600/800/kurta,printed",
            badge: "New"
        },
        {
            id: 3,
            category: "women",
            brand: "W",
            name: "Embroidered Lehenga Choli",
            price: 1499.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/lehenga,embroidered",
            img2: "https://loremflickr.com/600/800/lehenga,choli",
            badge: null
        },
        {
            id: 4,
            category: "women",
            brand: "Indiahaat",
            name: "Salwar Kameez Set",
            price: 799.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/salwar,kameez",
            img2: "https://loremflickr.com/600/800/salwar,traditional",
            badge: null
        },
        {
            id: 5,
            category: "women",
            brand: "Jharal",
            name: "Chaniya Choli - Gujarati",
            price: 1899.00,
            oldPrice: 2499.00,
            img1: "https://loremflickr.com/600/800/chaniya,choli",
            img2: "https://loremflickr.com/600/800/ghagra,chaniya",
            badge: "Sale"
        },
        {
            id: 6,
            category: "women",
            brand: "Biba",
            name: "Anarkali Suit",
            price: 1199.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/anarkali,suit",
            img2: "https://loremflickr.com/600/800/anarkali,dress",
            badge: "New"
        },
        {
            id: 7,
            category: "women",
            brand: "Fabindia",
            name: "Kanjivaram Silk Saree",
            price: 1599.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/kanjivaram,saree",
            img2: "https://loremflickr.com/600/800/kanjivaram,silk",
            badge: "New"
        },
        {
            id: 8,
            category: "women",
            brand: "W",
            name: "Designer Dupatta Set",
            price: 399.00,
            oldPrice: 599.00,
            img1: "https://loremflickr.com/600/800/dupatta,designer",
            img2: "https://loremflickr.com/600/800/dupatta,silk",
            badge: "Sale"
        },
        {
            id: 9,
            category: "women",
            brand: "Indiahaat",
            name: "Chanderi Cotton Saree",
            price: 899.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/chanderi,saree",
            img2: "https://loremflickr.com/600/800/chanderi,cotton",
            badge: null
        },
        {
            id: 10,
            category: "women",
            brand: "Jharal",
            name: "Embroidered Sharara Set",
            price: 1399.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/sharara,embroidered",
            img2: "https://loremflickr.com/600/800/sharara,traditional",
            badge: null
        },
        {
            id: 11,
            category: "women",
            brand: "Biba",
            name: "Paithani Saree - Maharashtrian",
            price: 1799.00,
            oldPrice: 2299.00,
            img1: "https://loremflickr.com/600/800/paithani,saree",
            img2: "https://loremflickr.com/600/800/paithani,gold",
            badge: "Sale"
        },
        {
            id: 12,
            category: "women",
            brand: "Fabindia",
            name: "Phulkari Embroidered Suit",
            price: 1099.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/phulkari,suit",
            img2: "https://loremflickr.com/600/800/phulkari,embroidered",
            badge: "New"
        },
        {
            id: 9,
            category: "men",
            brand: "Baba Jeans",
            name: "Tailored Suit",
            price: 3499.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/suit,fashion",
            img2: "https://loremflickr.com/600/800/suit,man",
            badge: "New"
        },
        {
            id: 10,
            category: "men",
            brand: "Raymond",
            name: "Classic Oxford Shirt",
            price: 899.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/shirt,oxford",
            img2: "https://loremflickr.com/600/800/shirt,man",
            badge: null
        },
        {
            id: 11,
            category: "accessories",
            subcategory: "women",
            brand: "Kundan Palace",
            name: "Traditional Gold-Plated Bangles Set",
            price: 499.00,
            oldPrice: 699.00,
            img1: "https://loremflickr.com/600/800/bangles,gold",
            img2: "https://loremflickr.com/600/800/bangles,traditional",
            badge: "Sale"
        },
        {
            id: 12,
            category: "accessories",
            subcategory: "women",
            brand: "Matha Patti",
            name: "Emerald Jumke (Earrings)",
            price: 599.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/earrings,jumke",
            img2: "https://loremflickr.com/600/800/earrings,emerald",
            badge: "New"
        },
        {
            id: 13,
            category: "accessories",
            subcategory: "women",
            brand: "Saree Gallery",
            name: "Pearl Saree Plu Set",
            price: 349.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/saree,plu",
            img2: "https://loremflickr.com/600/800/saree,accessories",
            badge: null
        },
        {
            id: 14,
            category: "accessories",
            subcategory: "women",
            brand: "Kundan Palace",
            name: "Glass Bangles - Multicolor",
            price: 299.00,
            oldPrice: 399.00,
            img1: "https://loremflickr.com/600/800/bangles,glass",
            img2: "https://loremflickr.com/600/800/bangles,multicolor",
            badge: "Sale"
        },
        {
            id: 15,
            category: "accessories",
            subcategory: "women",
            brand: "Matha Patti",
            name: "Ruby Red Chandbali Jumke",
            price: 799.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/chandbali,jumke",
            img2: "https://loremflickr.com/600/800/jumke,red",
            badge: "New"
        },
        {
            id: 16,
            category: "accessories",
            subcategory: "women",
            brand: "Saree Gallery",
            name: "Saree Brooch Collection",
            price: 249.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/brooch,saree",
            img2: "https://loremflickr.com/600/800/brooch,pin",
            badge: null
        },
        {
            id: 17,
            category: "accessories",
            subcategory: "men",
            brand: "Titan",
            name: "Classic Analog Watch",
            price: 4499.00,
            oldPrice: 5999.00,
            img1: "https://loremflickr.com/600/800/watch,analog",
            img2: "https://loremflickr.com/600/800/watch,leather",
            badge: "Sale"
        },
        {
            id: 18,
            category: "accessories",
            subcategory: "men",
            brand: "Tanishq",
            name: "Gold-Plated Kada (Bangle)",
            price: 1299.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/kada,gold",
            img2: "https://loremflickr.com/600/800/kada,bangle",
            badge: "New"
        },
        {
            id: 19,
            category: "accessories",
            subcategory: "men",
            brand: "Leather Gallery",
            name: "Premium Leather Wallet",
            price: 1599.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/wallet,leather",
            img2: "https://loremflickr.com/600/800/wallet,premium",
            badge: null
        },
        {
            id: 20,
            category: "accessories",
            subcategory: "men",
            brand: "Arrow",
            name: "Formal Leather Belt",
            price: 899.00,
            oldPrice: 1199.00,
            img1: "https://loremflickr.com/600/800/belt,leather",
            img2: "https://loremflickr.com/600/800/belt,formal",
            badge: "Sale"
        },
        {
            id: 21,
            category: "accessories",
            subcategory: "men",
            brand: "Tanishq",
            name: "Silver Statement Ring",
            price: 2499.00,
            oldPrice: null,
            img1: "https://loremflickr.com/600/800/ring,silver",
            img2: "https://loremflickr.com/600/800/ring,statement",
            badge: "New"
        },
        {
            id: 22,
            category: "accessories",
            subcategory: "men",
            brand: "Fastrack",
            name: "Sports Digital Watch",
            price: 2999.00,
            oldPrice: 3999.00,
            img1: "https://loremflickr.com/600/800/watch,digital",
            img2: "https://loremflickr.com/600/800/watch,sports",
            badge: "Sale"
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
