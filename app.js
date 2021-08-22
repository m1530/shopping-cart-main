/* const task = "Practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");
console.log(index); */
// const str1 = 'Bangladesh is a beautiful country.'; console.log(str1.endsWith("country"));
/* const str = 'I love coding more than eating.';
console.log(str.split('love'));
for (let i== 0; i < 10; i++) { } */
function updateQuantity(product, price, isIncrease) {
    const phoneInput = document.getElementById(product + '-number');
    let phoneInputValue = parseInt(phoneInput.value);
    if (isIncrease == true) {
        phoneInputValue = phoneInputValue + 1;
    } else if (phoneInputValue > 0) {
        phoneInputValue = phoneInputValue - 1;
    }
    phoneInput.value = phoneInputValue;
    const phonePrice = phoneInputValue * price;
    document.getElementById(product + '-total').innerText = phonePrice;
    totalCalculation();
}

function getInput(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneInputValue = parseInt(phoneInput.value);
    return phoneInputValue;
}

function totalCalculation() {
    const phoneAmount = getInput('phone') * 1219;
    const caseAmount = getInput('case') * 59;
    const subtotal = phoneAmount + caseAmount;
    const tax = subtotal / 10;
    const total = subtotal + tax;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantity('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {

    updateQuantity('phone', 1219, false)
});
document.getElementById('case-plus').addEventListener('click', function () {
    updateQuantity('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {

    updateQuantity('case', 59, false)
});