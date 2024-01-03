/* Write your code below. Good luck! 🙂 */
function calcTip(bills) {

    const tips = [];
    const totals = [];

    let tipCalc = function (bill) {
        let tipPercent = bill >= 50 && bill <= 300 ? 15 : 20;
        let tip = (bill / 100) * tipPercent;
        return tip;
    }

    for (let bill of bills) {
        tips.push(tipCalc(bill));
        totals.push(bill + tipCalc(bill));
    }

    console.log(tips);
    console.log(totals);
}
calcTip([125, 555, 44]);

// let calcTip = function (bill) {
//     let tipPercent = bill >= 50 && bill <= 300 ? 15 : 20;
//     let tip = (bill / 100) * tipPercent;
//     return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];