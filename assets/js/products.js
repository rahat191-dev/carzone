let products = [
    {
        name: "Lamborghini Huracan",
        image: "assets/images/lamborghini_huracan.png",
        description: "A sleek and modern car with advanced features.",
        price: "$25,000"
    },
    {
        name: "Lamborghini Aventador",
        image: "assets/images/lamborghini_aventador.png",
        description: "A compact car perfect for city driving.",
        price: "$18,000"
    },
    {
        name: "Lamborghini Aventador",
        image: "assets/images/lamborghini_aventador.png",
        description: "A compact car perfect for city driving.",
        price: "$18,000"
    },
    {
        name: "Lamborghini Aventador",
        image: "assets/images/lamborghini_aventador.png",
        description: "A compact car perfect for city driving.",
        price: "$18,000"
    },
    {
        name: "bmw car",
        image: "assets/images/car3.jpg",
        description: "A luxury sedan with premium comfort.",
        price: "$45,000"
    },
    {
        name: "bmw car",
        image: "assets/images/car3.jpg",
        description: "A luxury sedan with premium comfort.",
        price: "$45,000"
    },
    {
        name: "bmw car",
        image: "assets/images/car3.jpg",
        description: "A luxury sedan with premium comfort.",
        price: "$45,000"
    },
    {
        name: "bmw car",
        image: "assets/images/car3.jpg",
        description: "A luxury sedan with premium comfort.",
        price: "$45,000"
    },
    {
        name: "bmw car",
        image: "assets/images/car3.jpg",
        description: "A luxury sedan with premium comfort.",
        price: "$45,000"
    }
];

const productsPraceholder = document.getElementById('products-placeholder');

for (let i=0; i<products.length; i++) {
const product = products[i];

const productDiv = document.createElement('div');
productDiv.className = 'product';

productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">$${product.price}</p>
`;
productsPraceholder.appendChild(productDiv);
}