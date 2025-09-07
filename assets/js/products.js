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

    const slider = document.getElementById("slider");
    products.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("slide");
      div.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
      slider.appendChild(div);
    });

    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function updateSlider() {
      slider.style.transform = `translateX(calc(40% - ${currentIndex * 20}%))`;
      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add("selected");
        } else {
          slide.classList.remove("selected");
        }
      });
    }

    function updateMainProduct(product) {
        document.querySelector('.single-product-image img').src = product.image;
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.product-description').textContent = product.description;
        document.querySelector('.product-price').textContent = product.price;
    }

    slides.forEach((slide, index) => {
      slide.addEventListener("click", () => {
        currentIndex = index;
        updateMainProduct(products[index]);
        updateSlider();
      });
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
        updateMainProduct(products[currentIndex]);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
        updateMainProduct(products[currentIndex]);
      }
    });

    // Initial setup
    updateMainProduct(products[0]);
    updateSlider();