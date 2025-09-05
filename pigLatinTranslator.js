/*English to Pig Latin Translator
Description: Create a program that translates English text to Pig Latin.
Requirements:
The program should take an English phrase as an input from process.argv.
Convert each word to Pig Latin:
If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
Example: Happy = appyh + ay = appyhay
If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
Example: Child = Ildch + ay = Ildchay
If a word starts with a vowel add the word “way” at the end of the word.
Example: Awesome = Awesome +way = Awesomeway
Output the translated phrase to the console.
Example: node pigLatin.js "Pig Latin is hard to speak" # Output: Igpay Atinlay isway ardhay otay eakspay*/

const phrase = process.argv.slice(2);
const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

let char = phrase[0];

try {
  const firstConsonantFound = consonant.find((element) => element === char[0]);
  const secondConsonantFound = consonant.find((element) => element === char[1]);
  const vowelFound = vowel.find((element) => element === char[0]);
  if (firstConsonantFound != "" && firstConsonantFound != undefined) {
    let secondLetter = phrase[0].slice(1);
    let finalWord = secondLetter + firstConsonantFound + "ay";
    console.log(finalWord);
  } else if (
    firstConsonantFound != "" &&
    firstConsonantFound != undefined &&
    secondConsonantFound != "" &&
    secondConsonantFound != undefined
  ) {
    let thirdLetter = phrase[0].slice(3);
    console.log(thirdLetter);
    let finalWord =
      thirdLetter + firstConsonantFound + secondConsonantFound + "ay";
    console.log(finalWord);
  } else if (vowelFound != "") {
    let finalWord = phrase[0] + "way";
    console.log(finalWord);
  } else {
    console.log("Please try entering the phrase again :(");
  }
} catch {
  console.log("Please try entering the phrase again :(");
}
