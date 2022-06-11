const capitalString = require ('./capitalstring.js')

test("first capital letter", () => {
    expect(capitalString('hello')).toBe('H')
})