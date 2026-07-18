import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract parts
head_end = content.find('</head>') + 7
head = content[:head_end]

nav_start = content.find('<!-- Navigation -->')
nav_end = content.find('<main>')
navbar = content[nav_start:nav_end]

footer_start = content.find('<!-- Footer -->')
footer = content[footer_start:]

pages = [
    {'file': 'women.html', 'title': "Women's Collection", 'desc': "Discover the latest trends in women's fashion.", 'image': 'https://loremflickr.com/1920/600/fashion,woman'},
    {'file': 'men.html', 'title': "Men's Collection", 'desc': "Elevate your style with our premium menswear.", 'image': 'https://loremflickr.com/1920/600/fashion,man'},
    {'file': 'accessories.html', 'title': "Accessories & Bags", 'desc': "The perfect finishing touch to any outfit.", 'image': 'https://loremflickr.com/1920/600/fashion,accessories'},
    {'file': 'sale.html', 'title': "Flash Sale", 'desc': "Up to 70% off on selected premium items.", 'image': 'https://loremflickr.com/1920/600/sale,fashion'},
    {'file': 'contact.html', 'title': "Contact Us", 'desc': "We're here to help with any questions you may have.", 'image': 'https://loremflickr.com/1920/600/contact,support'}
]

for page in pages:
    html = f"""{head}
<body>
    <!-- Mouse Glow -->
    <div class="mouse-glow"></div>
    
    <!-- Scroll Progress -->
    <div class="scroll-progress-container">
        <div class="scroll-progress-bar" id="scrollBar"></div>
    </div>

    {navbar}
    <main>
        <section class="page-header" style="margin-top: 80px; position: relative; height: 300px; display: flex; align-items: center; justify-content: center; overflow: hidden;">
            <img src="{page['image']}" alt="{page['title']}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 0;"></div>
            <div class="container text-center reveal-up" style="position: relative; z-index: 1; color: white;">
                <h1 style="font-size: 3.5rem; color: white; margin-bottom: 1rem;">{page['title']}</h1>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.9);">{page['desc']}</p>
            </div>
        </section>
        
        <section class="section-padding bg-soft">
            <div class="container">
                <div class="product-grid" id="productGrid">
                    <!-- Products injected via JS for demonstration -->
                </div>
            </div>
        </section>
    </main>

    {footer}
"""
    with open(page['file'], 'w', encoding='utf-8') as f:
        f.write(html)

print("Pages generated successfully.")
