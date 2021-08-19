//case plus button
document.getElementById('case-plus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateCaseNumber('case', 59, true);
})

//case minus button
document.getElementById('case-minus').addEventListener('click', function () {
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateCaseNumber('case', 59, false);

})

//phone plus button
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);

})

// shared function
function updateCaseNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    totalCalculation();
}

//total and sub total calculation

function totalCalculation() {
    const phoneNumberTxt = document.getElementById('phone-input');
    const phoneNumberValue = parseInt(phoneNumberTxt.value)
    const phoneTotal = phoneNumberValue * 1279;

    const caseNumberTxt = document.getElementById('case-input');
    const caseNumberValue = parseInt(caseNumberTxt.value)
    const caseTotal = caseNumberValue * 59;

    const subtotal = phoneTotal + caseTotal;
    const taxAmmount = subtotal / 10;
    const total = subtotal + taxAmmount;

    const subTotalInput = document.getElementById('sub-total');
    subTotalInput.innerText = subtotal;
    document.getElementById('tax-ammount').innerText = taxAmmount;
    document.getElementById('total').innerText = total;


}