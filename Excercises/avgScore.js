let calcAverage = (result1, result2, result3) => (result1 + result2 + result3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    let winner;

    if (avgDolphins >= avgKoalas * 2) {
        winner = 'Dolphins';
        console.log(`${winner} win (${avgDolphins} vs. ${avgKoalas}`)
    } else if (avgKoalas >= avgDolphins * 2) {
        winner = 'Koalas';
        console.log(`${winner} win (${avgKoalas} vs. ${avgDolphins}`)
    } else {
        console.log('No team wins...')
    }
}
checkWinner(scoreDolphins, scoreKoalas);