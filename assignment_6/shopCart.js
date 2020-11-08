function cartLoad() {
    // localStorage.clear()
    let cart = [];

    cart = JSON.parse(localStorage.getItem('cart'));
    fullCart = JSON.parse(localStorage.getItem('cart'));
    var listOfProducts = document.getElementById('prodList');
    let subtotal = 0;
    if (localStorage.getItem('cart')) {
        for (var i = 0; i < fullCart.length; i++) {
            var singleProd = cart[i];
            var size = singleProd.size;
            var color = singleProd.color;
            var quant = singleProd.quant;
            var total = singleProd.total;
            subtotal = subtotal + total;

            if (color == 'Strawberry') {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="stwImg" src="./Images/cartStw.png" alt="Strawberry Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div><div class="colorName">Color: ' + color + '</div><div class = "colorName">Quantity:' + quant + '</div> </div><div class = "itemPrice"><h4>$' + total + '</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else if (color == 'Navy') {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="nvyImg" src="./Images/cartNvy.png" alt="Navy Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> <div class = "colorName">Quantity:' + quant + '</div> </div><div class = "itemPrice"><h4>$' + total + '</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else if (color == 'Plum') {
            listOfProducts.innerHTML += '<div class="itemCont"> <img id="plmImg" src="./Images/cartPlm.png" alt="Plum Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> <div class = "colorName">Quantity:' + quant + '</div> </div><div class = "itemPrice"><h4>$' + total + '</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="tanImg" src="./Images/cartTan.png" alt="Tan Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> <div class = "colorName">Quantity:' + quant + '</div> </div><div class = "itemPrice"><h4>$' + total + '</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            }
        }
        // alert(subtotal)
    } else {
        alert('Your cart is empty!');
        listOfProducts.innerHTML += '<div class="itemCont"> <img id="stwImg" src="./Images/cartStw.png" alt="Strawberry Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> </div><div class="itemPrice"><h4>' + quant + 'x $48:    $' + total + '.00</h4> <span onclick="deleteProduct(' + i + ')">[click to delete]</span> </div> </div>';
    }
    // Update total and subtotal with the total cost of the items in the basket
    document.getElementById('subtotal').innerHTML = '$' + subtotal.toFixed(2);
    var taxCost = subtotal * .06;
    document.getElementById('deathAnd').innerHTML = '$' + taxCost.toFixed(2);
    document.getElementById('total').innerHTML = '$' + (subtotal+taxCost).toFixed(2);
}


function removeItem(i) {
    if (confirm('Are you sure you want to delete this item?')) {
        // Save it!
        fullCart.splice(i, 1)
    var subtotal = 0;
    console.log('after we delete')
    console.log(fullCart)
    localStorage.setItem('cart', JSON.stringify(fullCart));
    var listOfProducts = document.getElementById('prodList');
    listOfProducts.innerHTML = ''
    if (localStorage.getItem('cart')) {
        for (var i = 0; i < fullCart.length; i++) {
            var singleProd = fullCart[i];
            var size = singleProd.size;
            var color = singleProd.color;
            var quant = singleProd.quant;
            var total = singleProd.total;
            subtotal = subtotal + total;
            if (color == 'Strawberry') {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="stwImg" src="./Images/cartStw.png" alt="Strawberry Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> </div><div class = "itemPrice"><h4>' + quant + 'x $48:    $' + total + '.00</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else if (color == 'Navy') {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="nvyImg" src="./Images/cartNvy.png" alt="Navy Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> </div><div class = "itemPrice"><h4>' + quant + 'x $48:    $' + total + '.00</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else if (color == 'Plum') {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="plmImg" src="./Images/cartPlm.png" alt="Plum Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> </div><div class = "itemPrice"><h4>' + quant + 'x $48:    $' + total + '.00</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            } else {
                listOfProducts.innerHTML += '<div class="itemCont"> <img id="tanImg" src="./Images/cartTan.png" alt="Tan Harness"><div class="itemDetails"><h2>Dog Harness</h2> <div class="sizeName">Size: ' + size + '</div> <div class="colorName">Color: ' + color + '</div> </div><div class = "itemPrice"><h4>' + quant + 'x $48:    $' + total + '.00</h4> <span class="removal" onclick="removeItem(' + i + ')">Remove Item</span> </div> </div>';
                listOfProducts.innerHTML += '<br /><hr class="timelineLine" /><br />';
            }
        } 
        } else {
            alert('Your cart is empty!');
            listOfProducts.innerHTML += '<div class="itemCont"><h1 class = "emptyHero">Your basket is empty.</h1><h3 class="linkBack" href = "index.html">Click here to continue browsing.</h3>';
        // Update total and subtotal with the total cost of the items in the basket
        document.getElementById('subtotal').innerHTML = '$' + subtotal + '.00';
        var taxCost = subtotal * .06;
        document.getElementById('deathAnd').innerHTML = '$' + taxCost + '.00';
        document.getElementById('total').innerHTML = '$' + subtotal + '.00';
    }
    window.location.reload(true);
      }
    
}