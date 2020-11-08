let prod = {
  size: "",
  color: "Tan",
  quant: 1,
  total: 48
}

function numSet() {
  localStorage.clear();
  var cartCurrent = JSON.parse(localStorage.getItem('cart'));
  let cartFocus = cartCurrent.map(a => a.quant);
  cartCount.counter = cartFocus.reduce((a, b) => a + b, 0);
  document.getElementById('basketNum').value=cartCount.counter;
  console.log(cartCount.counter);
}

function incrementUp() {
  var value = parseInt(document.getElementById('quant').value, 10);
  value++;
  prod.total = prod.total + 48;
  document.getElementById('quant').value = value;
  prod.quant = value;
  //console.log(prod.total);//
}

function incrementDown() {
  var value = parseInt(document.getElementById('quant').value, 10);
  if (value > 1) {
    value--;
    prod.total = prod.total - 48;
  }
  document.getElementById('quant').value = value;
  prod.quant = value;
  //console.log(prod.total);//
}

//Code to ensure only one of my size buttons gets highlighted, and that the focus doesn't go away via adding a new class to the selected one.//
var sizeCont = document.getElementById("test1");
var buttons = sizeCont.getElementsByClassName("sizeBtn");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("selectedSize");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" selectedSize", "");
    }

    // Add the active class to the current/clicked button
    this.className += " selectedSize";
    //console.log(this.className);//
  });

}

function setSizeT() {
  prod.size = 'Tiny';
  //console.log(prod.size);//
}
function setSizeS() {
  prod.size = 'Small';
  //console.log(prod.size);//
}
function setSizeM() {
  prod.size = 'Medium';
  //console.log(prod.size);//
}
function setSizeL() {
  prod.size = 'Large';
  //console.log(prod.size);//
}

function setColorT() {
  prod.color = 'Tan';
  //console.log(prod.color);//
  radio = document.getElementById('tan');
  radio.checked = true;
  var currentImg = document.getElementsByClassName("active");
  var newImg = document.getElementById("tanImg");
  currentImg[0].className = currentImg[0].className.replace(" active", "");
  newImg.className += " active";
}
function setColorS() {
  prod.color = 'Strawberry';
  //console.log(prod.color);//
  radio = document.getElementById('strawberry');
  radio.checked = true;
  var currentImg = document.getElementsByClassName("active");
  var newImg = document.getElementById("strawImg");
  currentImg[0].className = currentImg[0].className.replace(" active", "");
  newImg.className += " active";

}
function setColorP() {
  prod.color = 'Plum';
  //console.log(prod.color);//
  radio = document.getElementById('plum');
  radio.checked = true;
  var currentImg = document.getElementsByClassName("active");
  var newImg = document.getElementById("plumImg");
  currentImg[0].className = currentImg[0].className.replace(" active", "");
  newImg.className += " active";
}
function setColorN() {
  prod.color = 'Navy';
  //console.log(prod.color);//
  radio = document.getElementById('navy');
  radio.checked = true;
  var currentImg = document.getElementsByClassName("active");
  var newImg = document.getElementById("navyImg");
  currentImg[0].className = currentImg[0].className.replace(" active", "");
  newImg.className += " active";
}

//Script to for onclick add to cart that pushes that specific object into an array with an ident//
function objPush() {
  let cart = [];
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  if (prod.size == "") {
    alert("Please select a size.")
  } else {
    cart.push(prod);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(JSON.parse(localStorage.getItem('cart')));
    cartCount.counter = cartCount.counter + prod.quant;
    document.getElementById('basketNum').value = cartCount.counter;
  }

}

//Script to remove specific items from 