const productNames = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "shark",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];
/*
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(2)");
*/

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.start = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], `images/${productNames[i]}.jpeg`);
}

function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function renderImages() {
  let ind1 = randomIndex();
  let ind2 = randomIndex();
  let ind3 = randomIndex();

  while (ind1 === ind2 || ind1 === ind2 || ind1 == ind3) {
    let ind1 = randomIndex();
    let ind2 = randomIndex();
  };

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");

  img1.src = Product.allProducts[ind1].src;
  img2.src = Product.allProducts[ind2].src;
  img3.src = Product.allProducts[ind3].src;

  Product.allProductsArray[product1].views++;
  Product.allProductsArray[product2].views++;
  Product.allProductsArray[product3].views++;
}

renderImages();