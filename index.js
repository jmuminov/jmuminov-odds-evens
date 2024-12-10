// TODO: this file! :)
const app = document.querySelector('#app');

const addNumber = (event) => {
    event.preventDefault();
    let number = document.getElementById("number").value;
    let currentValue = document.getElementById("numberBankOutput").value;
    if(!currentValue) {
        document.getElementById("numberBankOutput").value = number;
    } else {
        document.getElementById("numberBankOutput").value = currentValue + ', ' + number;
    }
}
const addRandomNumer = (event) => {
    event.preventDefault();
    let number = Math.trunc(Math.random() * 100);
    let currentValue = document.getElementById("numberBankOutput").value;
    if(!currentValue) {
        document.getElementById("numberBankOutput").value = number;
    } else {
        document.getElementById("numberBankOutput").value = currentValue + ', ' + number;
    }
}
let numberBankNumbers = document.getElementById("numberBankOutput").value.split(", ").map((number) => number * 1);
const sortOne = (event) => {
    event.preventDefault();
    let numberBankNumbers = document.getElementById("numberBankOutput").value.split(", ").map((number) => number * 1);
    let currentOdds = document.getElementById("oddsOutput").value;
    let currentEvens = document.getElementById("evensOutput").value;
    if (numberBankNumbers[0] % 2 ===0) {
        if(!currentEvens) {
            document.getElementById("evensOutput").value = numberBankNumbers[0];
            numberBankNumbers.shift();
        } else {
            document.getElementById("evensOutput").value = currentEvens + ', ' + numberBankNumbers[0];
            numberBankNumbers.shift();
        }
    } else {
        if(!currentOdds) {
            document.getElementById("oddsOutput").value = numberBankNumbers[0];
            numberBankNumbers.shift();
        } else {
            document.getElementById("oddsOutput").value = currentOdds + ', ' + numberBankNumbers[0];
            numberBankNumbers.shift();
        }
    }
    document.getElementById("numberBankOutput").value = numberBankNumbers.join(", ");
}
const sortAll = (event) => {
    event.preventDefault();
    let numberBankNumbers = document.getElementById("numberBankOutput").value.split(", ").map((number) => number * 1);
    let currentOdds = document.getElementById("oddsOutput").value;
    let currentEvens = document.getElementById("evensOutput").value;
    numberBankNumbers.forEach(element => {
        if (element % 2 ===0) {
            if(!currentEvens) {
                document.getElementById("evensOutput").value = element;
            } else {
                document.getElementById("evensOutput").value = currentEvens + ', ' + element;
            }
            currentEvens = document.getElementById("evensOutput").value;
        } else {
            if(!currentOdds) {
                document.getElementById("oddsOutput").value = element;
            } else {
                document.getElementById("oddsOutput").value = currentOdds + ', ' + element;
            }
            currentOdds = document.getElementById("oddsOutput").value;
        }
    });
    document.getElementById("numberBankOutput").value = '';
}
document.getElementById("addNumberBtn").onclick = addNumber;
document.getElementById("addRandomNumberBtn").onclick = addRandomNumer;
document.getElementById("sortOne").onclick = sortOne;
document.getElementById("sortAll").onclick = sortAll;