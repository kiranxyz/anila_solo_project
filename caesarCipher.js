/*Caesar Cipher
Description: Implement a basic Caesar Cipher encryption.
Requirements:
The program should take a phrase and a shift number as inputs from process.argv.
Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
Case insensitive
A negative shift means shift to the left
A positive shift means shift to the right
Output the encrypted phrase to the console.
Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog*/

const playerMove = process.argv.slice(2);
let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let indexArray = [];
let i = playerMove.length - 2;
for (let index = 0; index < i; index++) {
  for (let index = 0; index < playerMove[index].length; index++) {
    for (let index1 = 0; index1 < playerMove[index].length; index1++) {
      let char = playerMove[index].charAt(index1).toUpperCase();
      indexArray.push(letters.indexOf(char));
    }
  }
}
const length = playerMove.length;
if (playerMove[length - 1] > 0) {
  for (let index = 0; index < playerMove[length - 1]; index++) {
    letters.push(letters[index]);
  }
  letters = letters.slice(playerMove[length - 1]);
} else {
  for (let index = 0; index > playerMove[length - 1]; index--) {
    let removedElement = letters.pop();
    letters.unshift(removedElement);
  }
}

let cipheredText = "";

for (let index = 0; index < indexArray.length; index++) {
  cipheredText = cipheredText + letters[indexArray[index]];
}
console.log(cipheredText.toLowerCase());
