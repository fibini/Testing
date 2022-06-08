const Calculator = require ('./calculator.js');

describe('calculator', () => {
    const calculator = new Calculator();

    it("add()", () => {
        expect(calculator.add('a+b')).toBe(4)
    })

    it("subtract", () => {
        expect(calculator.subtract('a-b')).toBe(2)
    })

    it("divide", () => {
        expect(calculator.divide('a/b')).toBe(5)
    })

    it("multiply", () => {
        expect(calculator.multiply('a*b')).toBe(20)
    })
})