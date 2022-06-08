function reverseString(string) {
    let reverse = [...string].reverse().join('')
    return reverse
}
module.exports = reverseString