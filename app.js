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

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.start = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

for (let i = 0; i < productNames.length; i++) {
  new Product(productNames[i], "images/" + productNames[i]);
}