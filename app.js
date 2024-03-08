let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

function fromDollarToYen(dollarAmount) {
    // Convert dollar to euro
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    // Convert euro to yen
    return parseFloat((euroAmount * oneEuroIs["JPY"]).toFixed(4));
}

function fromEuroToDollar(euroAmount) {
    // Convert euro to dollar
    return parseFloat((euroAmount * oneEuroIs["USD"]).toFixed(2));
}

function fromYenToPound(yenAmount) {
    // Convert yen to euro
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    // Convert euro to pound
    return parseFloat((euroAmount * oneEuroIs["GBP"]).toFixed(4));
}

console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1))
console.log(fromDollarToYen(55))
console.log(fromEuroToDollar(55));
console.log(fromYenToPound(55))
console.log(fromDollarToYen(5.5))
console.log(fromEuroToDollar(5.5));
console.log(fromYenToPound(5.5))




const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


