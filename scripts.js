const board = document.getElementById("board");
const answer = document.getElementById("answer");
let currentTurn = 0;
let columnOne = document.querySelectorAll(".column-one");
let columnTwo = document.querySelectorAll(".column-two");
let columnThree = document.querySelectorAll(".column-three");
let columnFour = document.querySelectorAll(".column-four");
let columnFive = document.querySelectorAll(".column-five");
let columnSix = document.querySelectorAll(".column-six");
let maxTurns = 5;

// columnOne.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });
// columnTwo.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });
// columnThree.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });
// columnFour.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });
// columnFive.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });
// columnSix.forEach((element) => {
//   element.setAttribute("contenteditable", "true");
// });

let wordOfDay;

const button = document.querySelector(".button");
const URL = "https://words.dev-apis.com/word-of-the-day?random=1";
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  wordOfDay = data.word;

  console.log(wordOfDay);
}

fetchData();
showNextColumn();
function getCharacterCounts(word) {
  let wordCounter = {};
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    let prevLetterCount = wordCounter[currentLetter] ?? 0;
    let newLetterCount = prevLetterCount + 1;

    wordCounter[currentLetter] = newLetterCount;
  }
  return wordCounter;
}
// function getCharacterUserCounts(word) {
//   let wordCounter = {};
//   for (let i = 0; i < word.length; i++) {
//     let currentLetter = word[i];
//     let prevLetterCount = wordCounter[currentLetter] ?? 0;
//     let newLetterCount = prevLetterCount + 1;

//     wordCounter[currentLetter] = newLetterCount;
//   }
//   return wordCounter;
// }

// let fakeInput = [];
// function firstGuess() {
//   for (let i = 0; i < columnOne.length - 1; i++) {
//     fakeInput.push(columnOne[i].innerHTML);
//   }

//   return fakeInput;
// }
let inputValues = [];

function getInput() {
  let inputValues = [];

  getCurrentColumn().forEach((element) => {
    inputValues.push(element.innerHTML);
  });
  console.log(inputValues);
  // fakeInput = inputValues.join("");
  return inputValues.join("");
}
function getColors() {
  let correctWordLettersCount = getCharacterCounts(wordOfDay);
  console.log(correctWordLettersCount);

  let input = getInput();

  let userWordLettersCount = getCharacterCounts(input);

  console.log(userWordLettersCount);
  let colors = [];
  /*
    Loop over the correct word 
    Each cycle in the loop we will compare the letters.
    If the letters are the same add green to color array and subtract 1 from both both letter counts.
    If they are not the same and the user character count is less then or equal to eachother then add yellow to the array and subtract 1 from letter counts.
   If neither of these are true then add blue to the array.
    */

  for (let i = 0; i <= wordOfDay.length - 1; i++) {
    const correctWordCharacter = wordOfDay[i];
    const userWordCharacter = input[i];

    const correctWordCharacterCount =
      correctWordLettersCount[userWordCharacter] ?? 0;

    const isGreen = correctWordCharacter === userWordCharacter;
    const isYellow =
      correctWordCharacter !== userWordCharacter &&
      correctWordCharacterCount > 0;

    const isBlue = !isGreen && !isYellow;

    if (isGreen) {
      colors.push("green");

      correctWordLettersCount[userWordCharacter] -= 1;
      userWordLettersCount[userWordCharacter] -= 1;
    } else if (isYellow) {
      colors.push("yellow");
      correctWordLettersCount[userWordCharacter] -= 1;
      userWordLettersCount[userWordCharacter] -= 1;
    } else if (isBlue) {
      colors.push("blue");
    } else {
      console.error("Error");
    }
  }

  console.log(colors);
  return colors;
}
function getCurrentColumn() {
  let columns = ["one", "two", "three", "four", "five"];
  let columnNumber = columns[currentTurn];

  return document.querySelectorAll(`.column-${columnNumber}`);
  // return columns[currentTurn];
}
// console.log(colors);
function updateWithColors(colors) {
  let currentColumn = getCurrentColumn();
  currentColumn.forEach((element, index) => {
    element.style.backgroundColor = colors[index];
    element.setAttribute("contenteditable", "false");
  });
}
function showNextColumn() {
  const currentColumn = getCurrentColumn();
  currentColumn.forEach((element) => {
    element.style.display = "inline-block";
    element.setAttribute("contenteditable", "true");
  });
}
button.addEventListener("click", () => {
  if (currentTurn === maxTurns) {
    alert("You Lose");
    return;
  }
  let colors = getColors();
  let isWinner = colors.every((item) => item === "green");
  updateWithColors(colors);
  currentTurn = Math.min(maxTurns, currentTurn + 1);
  if (isWinner) {
    setTimeout(() => alert("YOU WON"), 500);
  } else {
    showNextColumn();
  }
});
