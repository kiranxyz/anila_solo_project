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
let translatedPhrase = "";
let finalWord = "";
phrase.forEach((word) => {
  try {
    const firstConsonantFound = consonant.find(
      (element) => element === word[0]
    );
    const secondConsonantFound = consonant.find(
      (element) => element === word[1]
    );
    const firstVowelFound = vowel.find((element) => element === word[0]);
    const secondVowelFound = vowel.find((element) => element === word[1]);

    if (
      firstConsonantFound != "" &&
      firstConsonantFound != undefined &&
      secondVowelFound != undefined &&
      secondVowelFound != ""
    ) {
      let secondLetter = word.slice(1);
      finalWord = secondLetter + firstConsonantFound + "ay";
    } else if (
      firstConsonantFound != "" &&
      firstConsonantFound != undefined &&
      secondConsonantFound != "" &&
      secondConsonantFound != undefined
    ) {
      let thirdLetter = word.slice(2);
      finalWord =
        thirdLetter + firstConsonantFound + secondConsonantFound + "ay";
    } else if (firstVowelFound != "") {
      finalWord = word + "way";
    } else {
      console.log("Please try entering the phrase again :(");
    }
  } catch {
    console.log("Please try entering the phrase again :(");
  }

  translatedPhrase += " " + finalWord;
});
console.log("Translated Phrase:" + translatedPhrase);
