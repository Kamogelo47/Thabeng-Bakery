
// ==========================================
// THABENG BAKERY - PART 3 JAVASCRIPT
// Dynamic Products, Search, Filtering & Gallery
// Image SEO and Performance Improvements
// ==========================================

// PRODUCT INFORMATION

const bakeryProducts = [
    {
        name: "Fresh Bread",
        category: "bread",
        description: "Freshly baked bread prepared daily using quality ingredients.",
        price: 25,
        displayPrice: "From R25",
        image: "images/bread.webp",
        alt: "Freshly baked bread from Thabeng Bakery."
    },
    {
        name: "Birthday Cakes",
        category: "cakes",
        description: "Delicious cakes made to help make your birthday celebration special.",
        price: 250,
        displayPrice: "From R250",
        image: "images/birthday-cake-11.webp",
        alt: "Birthday cake made by Thabeng Bakery."
    },
    {
        name: "Specialty Cupcakes",
        category: "cupcakes",
        description: "Fun and delicious cupcakes available for celebrations and special occasions.",
        price: 15,
        displayPrice: "From R15",
        image: "images/cookie-monster-cupcakes.webp",
        alt: "Specialty Cookie Monster cupcakes from Thabeng Bakery."
    },
    {
        name: "Pastries",
        category: "pastries",
        description: "Freshly baked pastries that are perfect for breakfast, snacks or gatherings.",
        price: 20,
        displayPrice: "From R20",
        image: "images/pastries.webp",
        alt: "Freshly baked pastries from Thabeng Bakery."
    },
    {
        name: "Custom Cakes",
        category: "cakes",
        description: "Personalised cakes designed according to your celebration and preferences.",
        price: null,
        displayPrice: "Enquire for pricing",
        image: "images/custom-cake.webp",
        alt: "Custom celebration cake made by Thabeng Bakery."
    },
    {
        name: "Assorted Baked Cakes",
        category: "cakes",
        description: "A selection of delicious freshly baked cakes suitable for different occasions.",
        price: 150,
        displayPrice: "From R150",
        image: "images/ass-baked-cakes.webp",
        alt: "Assorted freshly baked cakes from Thabeng Bakery."
    }
];

// ==========================================
// PRODUCTS PAGE FUNCTIONALITY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const productGrid = document.getElementById("productGrid");

    // Only run product functionality on products.html
    if (!productGrid) {
        return;
    }

    const productSearch = document.getElementById("productSearch");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortProducts = document.getElementById("sortProducts");
    const productCount = document.getElementById("productCount");

    const lightbox = document.getElementById("productLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeLightbox = document.getElementById("closeLightbox");

    // ======================================
    // DISPLAY PRODUCTS
    // ======================================

    function displayProducts(products) {

        productGrid.innerHTML = "";

        if (products.length === 0) {

            productGrid.innerHTML =
                "<p>No products found. Please try another search.</p>";

            if (productCount) {
                productCount.textContent = "0 products found";
            }

            return;
        }

        products.forEach(function (product, index) {

            const productCard = document.createElement("article");
            productCard.className = "product-card";

            // CREATE IMAGE CONTAINER
            const imageContainer = document.createElement("div");
            imageContainer.className = "product-image";

            const image = document.createElement("img");

            image.src = product.image;

            // Descriptive alternative text for SEO and accessibility
            image.alt = product.alt;

            image.className = "gallery-image";

            // Reserve image space to reduce layout shifts
            image.width = 400;
            image.height = 300;

            // Load the first visible image immediately
            // Load the remaining images only when needed
            image.loading = index === 0 ? "eager" : "lazy";

            // Prioritise the first visible product image
            image.fetchPriority = index === 0 ? "high" : "auto";

            // Decode images asynchronously
            image.decoding = "async";

            image.tabIndex = 0;

            // DISPLAY A MESSAGE IF AN IMAGE CANNOT LOAD
            image.onerror = function () {

                image.alt = product.name + " image unavailable";
                image.style.display = "none";

                const errorMessage = document.createElement("p");

                errorMessage.textContent =
                    "Image could not be loaded: " + product.name;

                imageContainer.appendChild(errorMessage);
            };

            imageContainer.appendChild(image);

            // CREATE PRODUCT INFORMATION
            const productContent = document.createElement("div");
            productContent.className = "product-content";

            const heading = document.createElement("h3");
            heading.textContent = product.name;

            const description = document.createElement("p");
            description.textContent = product.description;

            const price = document.createElement("p");
            price.className = "product-price";
            price.textContent = product.displayPrice;

            productContent.appendChild(heading);
            productContent.appendChild(description);
            productContent.appendChild(price);

            productCard.appendChild(imageContainer);
            productCard.appendChild(productContent);

            // ==================================
            // OPEN IMAGE LIGHTBOX
            // ==================================

            function openImage() {

                if (!lightbox || !lightboxImage || !lightboxCaption) {
                    return;
                }

                lightboxImage.src = product.image;
                lightboxImage.alt = product.alt;

                lightboxCaption.textContent = product.name;

                lightbox.hidden = false;

                if (closeLightbox) {
                    closeLightbox.focus();
                }
            }

            image.addEventListener("click", openImage);

            image.addEventListener("keydown", function (event) {

                if (event.key === "Enter" || event.key === " ") {

                    event.preventDefault();
                    openImage();

                }

            });

            productGrid.appendChild(productCard);

        });

        if (productCount) {

            productCount.textContent =
                products.length + " product(s) found";

        }

    }

    // ======================================
    // SEARCH, FILTER AND SORT
    // ======================================

    function filterAndSortProducts() {

        const searchTerm = productSearch
            ? productSearch.value.toLowerCase().trim()
            : "";

        const selectedCategory = categoryFilter
            ? categoryFilter.value
            : "all";

        const selectedSort = sortProducts
            ? sortProducts.value
            : "default";

        let filteredProducts = bakeryProducts.filter(function (product) {

            const matchesSearch =
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm);

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            return matchesSearch && matchesCategory;

        });

        // SORT FROM LOWEST TO HIGHEST
        if (selectedSort === "low-high") {

            filteredProducts.sort(function (a, b) {

                if (a.price === null) return 1;
                if (b.price === null) return -1;

                return a.price - b.price;

            });

        }

        // SORT FROM HIGHEST TO LOWEST
        else if (selectedSort === "high-low") {

            filteredProducts.sort(function (a, b) {

                if (a.price === null) return 1;
                if (b.price === null) return -1;

                return b.price - a.price;

            });

        }

        // SORT ALPHABETICALLY
        else if (selectedSort === "name") {

            filteredProducts.sort(function (a, b) {

                return a.name.localeCompare(b.name);

            });

        }

        displayProducts(filteredProducts);

    }

    // CONNECT SEARCH CONTROL
    if (productSearch) {

        productSearch.addEventListener(
            "input",
            filterAndSortProducts
        );

    }

    // CONNECT CATEGORY FILTER
    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            filterAndSortProducts
        );

    }

    // CONNECT SORT CONTROL
    if (sortProducts) {

        sortProducts.addEventListener(
            "change",
            filterAndSortProducts
        );

    }

    // ======================================
    // CLOSE LIGHTBOX
    // ======================================

    function hideLightbox() {

        if (lightbox && lightboxImage) {

            lightbox.hidden = true;
            lightboxImage.src = "";

        }

    }

    if (closeLightbox) {

        closeLightbox.addEventListener(
            "click",
            hideLightbox
        );

    }

    // CLOSE LIGHTBOX WHEN CLICKING OUTSIDE
    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                hideLightbox();
            }

        });

    }

    // CLOSE LIGHTBOX USING ESCAPE
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            hideLightbox();
        }

    });

    // ======================================
    // LOAD PRODUCTS
    // ======================================

    displayProducts(bakeryProducts);

});

// ==========================================
// END OF THABENG BAKERY PART 3 JAVASCRIPT
// ==========================================
