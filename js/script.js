
function productQuantityUpdate(product, price, isIncrease) {
    const inputQuantity = document.getElementById(product + '-input');
    let productQuantityValue = parseInt(inputQuantity.value);
    if (isIncrease == true) {
        productQuantityValue = productQuantityValue + 1;
    } else if (productQuantityValue > 0) {
        productQuantityValue = productQuantityValue - 1;
    }
    inputQuantity.value = productQuantityValue;

    const productPrice = document.getElementById(product + '-price');
    const totalProductPrice = productQuantityValue * price;
    productPrice.innerText = totalProductPrice;
    updateTotalPrice();
}

document.getElementById('phone-plus').addEventListener('click', function (e) {
    productQuantityUpdate('phone', 1250, true);
});
document.getElementById('phone-minus').addEventListener('click', function (e) {
    productQuantityUpdate('phone', 1250, false);

});

document.getElementById('case-plus').addEventListener('click', function (e) {
    productQuantityUpdate('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function (e) {
    productQuantityUpdate('case', 59, false);

});
function getInputValue(product) {
    const inputQuantity = document.getElementById(product + '-input');
    const productQuantityValue = parseInt(inputQuantity.value);
    return productQuantityValue;
}
function updateTotalPrice() {
    let totalPhoneAmount = getInputValue('phone') * 1250;
    let totalCaseAmount = getInputValue('case') * 59;
    let subTotal = totalPhoneAmount + totalCaseAmount;
    let tex = subTotal / 10;
    let total = subTotal + tex;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tex').innerText = tex;
    document.getElementById('total').innerText = total;
}