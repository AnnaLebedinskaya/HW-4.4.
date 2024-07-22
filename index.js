'use strict';
let number = prompt("Please enter a three-digit number:");
if (number.length === 3 && !isNaN(number)) {
    const digits = number.split('').map(Number);
    const [digit1, digit2, digit3] = digits;
    const allSame = digit1 === digit2 && digit2 === digit3;
    const anySame = digit1 === digit2 || digit1 === digit3 || digit2 === digit3;
    if (allSame) {
        alert("All digits are the same");
    } else if (anySame) {
        alert("There are some identical digits");
    } else {
        alert("All digits are different");
    }
} else {
    alert("Please enter a valid three-digit number.");
}
    












