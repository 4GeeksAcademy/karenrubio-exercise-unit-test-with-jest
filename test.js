const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js')
const { fromDollarToYen } = require('./app.js')
const { fromYenToPound } = require('./app.js')


test('adds 14 + 9 to equal 23',() => {
    let total = sum(14,9);

    expect(total).toBe(23);
});

test('convertir un euro a dollar igual a 1.07',() => {
    let total = fromEuroToDollar(1);

    expect(total).toBe(1.07);
})
test('convertir un euro a dollar igual a 1.07',() => {
    let total = fromEuroToDollar(5);

    expect(total).toBe(5.35);
})

test('convertir un dollar a yen igual a 146.26',() => {
    let total = fromDollarToYen(1);

    expect(total).toBe(146.2617);
})
test('convertir un dollar a yen igual a 146.26',() => {
    let total = fromDollarToYen(5);

    expect(total).toBe(731.3084);
})

test('convertir un yen a pound igual a 0.0055',() => {
    let total = fromYenToPound(1);

    expect(total).toBe(0.0056);
})

test('convertir un yen a pound igual a 0.0055',() => {
    let total = fromYenToPound(5);

    expect(total).toBe(0.0278);
})