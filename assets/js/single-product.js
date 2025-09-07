let products = [
        {
            name: "Lamborghini Huracan",
            image: "assets/images/lamborghini/1.png",
            description: "A sleek and modern car with advanced features.",
            price: "$25,000"
        },
        {
            name: "Lamborghini Aventador",
            image: "assets/images/lamborghini/2.png",
            description: "A compact car perfect for city driving.",
            price: "$18,000"
        },
        {
            name: "Lamborghini jet",
            image: "assets/images/lamborghini/3.png",
            description: "A compact car perfect for city driving.",
            price: "$50,000"
        },
        {
            name: "Lamborghini diablo",
            image: "assets/images/lamborghini/4.png",
            description: "A compact car perfect for city driving.",
            price: "$18,000"
        },
        {
            name: "bmw four series",
            image: "assets/images/bmw/1.png",
            description: "A luxury sedan with premium comfort.",
            price: "$45,000"
        },
        {
            name: "bmw luxury series",
            image: "assets/images/bmw/2.png",
            description: "A luxury sedan with premium comfort.",
            price: "$45,000"
        },
        {
            name: "bmw m series",
            image: "assets/images/bmw/3.png",
            description: "A luxury sedan with premium comfort.",
            price: "$45,000"
        },
        {
            name: "bmw king series",
            image: "assets/images/bmw/4.png",
            description: "A luxury sedan with premium comfort.",
            price: "$45,000"
        },
        {
            name: "bmw ultimate series",
            image: "assets/images/bmw/5.png",
            description: "A luxury sedan with premium comfort.",
            price: "$45,000"
        }
    ];

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');

    // Fetch navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            const hamburger = document.getElementById("hamburger");
            const menu = document.getElementById("hamburger-menu");

            hamburger.addEventListener("click", () => {
              menu.classList.toggle("active");
            });
        });

    // Function to update the main product view
    function updateMainProduct(product) {
        document.querySelector('.single-product-image img').src = product.image;
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-description').textContent = product.description;
        document.querySelector('.product-price').textContent = product.price;
    }

    // Find the product from the URL or use the first product
    let initialProduct = products.find(p => p.name === productName) || products[0];
    updateMainProduct(initialProduct);

    // Slider
    const slider = document.getElementById("slider");
    products.forEach((p, index) => {
        const div = document.createElement("div");
        div.classList.add("slide");
        div.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
        div.addEventListener('click', () => {
            updateMainProduct(p);
        });
        slider.appendChild(div);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 20}%)`;
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add("selected");
            } else {
                slide.classList.remove("selected");
            }
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            currentIndex = index;
            updateMainProduct(products[index]);
            updateSlider();
        });
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 5) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    updateSlider();
});