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

    const productsPlaceholder = document.getElementById('products-placeholder');

    for (let i=0; i<products.length; i++) {
        const product = products[i];

        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.image}">
            <h3><p>${product.name}</p>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="buy-now">Buy Now</button></h3>
        `;
        productsPlaceholder.appendChild(productDiv);
    };

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
  slider.style.transform = `translateX(-${currentIndex * 25}%)`; 
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 4) {
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