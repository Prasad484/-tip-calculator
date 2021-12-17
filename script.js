const BillAmount = document.getElementById("BillAmount");
const numberOfpeople = document.getElementById("TotalPeople");
const percentage = document.querySelectorAll(".percentage");
const custombtn = document.getElementById("tipPercentageCustom");
const billTipAmount = document.getElementById("billTipAmount");
const billTotalPerPerson = document.getElementById("billTotalPerPerson");
const resetButton = document.getElementById("resetButton");

function Five() {
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * 5 / 100) / People;
    console.log(ans);
    billTipAmount.innerText = `$${BillAmount.value * 5 / 100}`;
    billTotalPerPerson.innerText = `$${ans}`
    console.log(People);
}

function Ten() {
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * 10 / 100) / People;
    console.log(ans);
    billTipAmount.innerText = `$${BillAmount.value * 10 / 100}`;
    billTotalPerPerson.innerText = `$${ans}`
}

function Fifteen() {
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * 15 / 100)/People;
    console.log(ans);
    billTipAmount.innerText = `$${BillAmount.value * 15 / 100}`;
    billTotalPerPerson.innerText = `$${ans}`
}


function TwentyFive() {
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * 25 / 100)/People;
    console.log(ans);
    billTipAmount.innerText = `$${BillAmount.value * 25 / 100}`;
    billTotalPerPerson.innerText = `$${ans}`
}


function Fifty() {
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * 50 / 100)/People;
    console.log(ans);
    billTipAmount.innerText = `$${BillAmount.value * 50 / 100}`;
    billTotalPerPerson.innerText = `$${ans}`
}


function Custom(){
    var custombtnVal = custombtn.value;  
    var People = numberOfpeople.value;
    var ans = (BillAmount.value * custombtnVal / 100)/People;
    billTipAmount.innerText = `$${BillAmount.value * custombtnVal / 100}`;
    billTotalPerPerson.innerText = `$${ans}`

}

function Reset(){
    billTipAmount.innerText = `$${0}`;
    billTotalPerPerson.innerText = `$${0}`
    numberOfpeople.value = 0;
    BillAmount.value = 0;
}