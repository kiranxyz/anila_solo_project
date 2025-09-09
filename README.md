**Fun Command-Line Challenges with Node.js 🚀**

**Challenge 1 – Rock Paper Scissors**
Goal: Play rock-paper-scissors against the computer.

Run command:

node rockPaperScissors.js rock

Sample outputs:

You: rock | Computer: scissors → You win! 🎉
You: rock | Computer: paper → You lose 😢

**Challenge 2 – Pig Latin Translator**
Goal: Translate words/phrases into Pig Latin.

Run commands & outputs:

node pigLatinTranslator.js Happy
→ 📜 Translated Phrase: appyHay

node pigLatinTranslator.js Pig Latin is hard to speak
→ 📜 Translated Phrase: igPay atinLay isway ardhay otay eakspay

Error case:

node pigLatinTranslator.js
→ ❌ Please try entering the phrase again :(

**Challenge 3 – Caesar Cipher**
Goal: Encrypt or decrypt a phrase using Caesar Cipher shift.

Run commands & outputs:

node caesarCipher.js hello world 3
→ 🔐 Ciphered Text: khoorzruog

node caesarCipher.js hello world -3
→ 🔐 Ciphered Text: ebiiltloia

Logic: Each letter shifts by a number (+3 forward, -3 backward).
