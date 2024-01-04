
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
    let currentBill = bills[i];
    tips.push(calcTip(currentBill));
    totals.push(currentBill + calcTip(currentBill))
}

function calcAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        sum += currentValue;
    }

    let average = sum / arr.length;
    return average;
}
calcAverage(totals);
console.log(calcAverage(totals));
