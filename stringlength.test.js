const stringLength = require ('./stringlength.js');

test('string length 1-10',() => {
    expect(stringLength('asdsad')).toBeLessThanOrEqual(10);
    expect(stringLength("s")).toBeGreaterThan(0)

});