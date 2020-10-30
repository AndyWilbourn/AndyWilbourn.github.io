var cartCount = {
    counter: 4
}

function numSet() {
    document.getElementsById('basketNum') = cartCount.counter;
    var cartCurrent = JSON.parse(localStorage.getItem('cart'));
    cartCount.counter = cartCurrent('quant');
    document.getElementById('basketNum').value = cartCount.counter;
    console.log(cartCount.counter);
}