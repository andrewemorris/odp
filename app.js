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

  while (ind1 === ind2 || ind1 === ind3 || ind2 == ind3) {
    ind1 = randomIndex();
    ind2 = randomIndex();
  };

  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");

  img1.src = Product.allProducts[ind1].src;
  img2.src = Product.allProducts[ind2].src;
  img3.src = Product.allProducts[ind3].src;
  img1.alt = Product.allProducts[ind1].name;
  img2.alt = Product.allProducts[ind2].name;
  img3.alt = Product.allProducts[ind3].name;

  //Had to comment this out
  //only works for 10 runs
  Product.allProducts[ind1].views++;
  Product.allProducts[ind2].views++;
  Product.allProducts[ind3].views++;
}

renderImages();

// increase the clicks on the clicked Product object (for loop and clicks++)(check the event.target.alt)
// make sure the user is clicking on one of the images
function handleClick(event) {
  // check if the thing we clicked on is the container (as aposed to an image)
  if (event.target === imgContainer) {
    alert("Please click one of the images, not inbetween the images.");
    return; // this return stops the function
  }

  // check every single products "name" against the alt tag of the target, and increase the clicks
  for (let i = 0; i < Product.allProducts.length; i++) {
    if (event.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].clicks++;
      break; // stop the loop, because we found our product
    }
  }

  // get three new images
  renderImages();
}

const imgContainer = document.getElementById("img-container");
imgContainer.addEventListener("click", handleClick);