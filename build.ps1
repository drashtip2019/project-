$content = Get-Content index.html -Raw
$head = $content.Substring(0, $content.IndexOf("</head>") + 7)
$navStart = $content.IndexOf("<!-- Navigation -->")
$navEnd = $content.IndexOf("<main>")
$navbar = $content.Substring($navStart, $navEnd - $navStart)
$footerStart = $content.IndexOf("<!-- Footer -->")
$footer = $content.Substring($footerStart)

$pages = @(
    @{file='women.html'; title="Women's Collection"; desc="Discover the latest trends in women's fashion."; img="https://loremflickr.com/1920/600/fashion,woman"},
    @{file='men.html'; title="Men's Collection"; desc="Elevate your style with our premium menswear."; img="https://loremflickr.com/1920/600/fashion,man"},
    @{file='accessories.html'; title="Accessories & Bags"; desc="The perfect finishing touch to any outfit."; img="https://loremflickr.com/1920/600/fashion,accessories"},
    @{file='sale.html'; title="Flash Sale"; desc="Up to 70% off on selected premium items."; img="https://loremflickr.com/1920/600/sale,fashion"},
    @{file='contact.html'; title="Contact Us"; desc="We're here to help with any questions you may have."; img="https://loremflickr.com/1920/600/contact,support"}
)

foreach ($p in $pages) {
    $html = @"
$head
<body>
    <div class="mouse-glow"></div>
    <div class="scroll-progress-container"><div class="scroll-progress-bar" id="scrollBar"></div></div>
    $navbar
    <main>
        <section class="page-header" style="margin-top: 80px; position: relative; height: 300px; display: flex; align-items: center; justify-content: center; overflow: hidden; background-color: var(--primary);">
            <img src="$($p.img)" alt="$($p.title)" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: -1;">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 0;"></div>
            <div class="container text-center" style="position: relative; z-index: 1; color: white; animation: fadeIn 1s ease-out;">
                <h1 style="font-size: 3.5rem; color: white; margin-bottom: 1rem;">$($p.title)</h1>
                <p style="font-size: 1.2rem; color: rgba(255,255,255,0.9);">$($p.desc)</p>
            </div>
        </section>
        <section class="section-padding bg-soft">
            <div class="container">
                <div class="product-grid" id="productGrid"></div>
            </div>
        </section>
    </main>
    $footer
"@
    Set-Content -Path $p.file -Value $html -Encoding UTF8
}
