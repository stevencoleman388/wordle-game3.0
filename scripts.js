const board = document.getElementById("board");
const answer = document.getElementById("answer");
let columnOne = document.querySelectorAll(".column-one");
let columnTwo = document.querySelectorAll(".column-two");
columnTwo.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnOne.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
let first = "";
let rows = 6;
let columns = 5;
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
function firstGuess() {
  let list = [];
  for (let i = 0; i <= columnOne.length - 1; i++) {
    list.push(columnOne[i].innerHTML);
  }
  console.log(list.length);
  first = list.join("");
}
function highlightGreen() {
  for (let i = 0; i <= columnOne.length - 1; i++) {
    columnOne[i].classList.add("green");
  }
}
function highlightYellow() {
  for (let i = 0; i <= columnOne.length - 1; i++) {
    columnOne[i].classList.add("yellow");
  }
}

function isHighlightYellow() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const firstCounter = getLetterCounter(first);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(firstCounter);
  console.log(wordOfDayCounter);

  // let firstCounterValue;
  // let wordOfDayCounterValue;
  // wordOfDayCounterValue = Object.keys(wordOfDayCounter).join("");
  // firstCounterValue = Object.keys(firstCounter).join("");

  const firstValue = Object.keys(firstCounter);
  const wordOfDayValue = Object.keys(wordOfDayCounter);

  let foundMatch = false;
  wordOfDayValue.some((value) => {
    if (firstValue.includes(value)) {
      foundMatch = true;
      return true;
    }
  });
  if (foundMatch) {
    document.querySelectorAll(".column-one").forEach((element) => {
      element.style.backgroundColor = "yellow";
    });
  }
  return foundMatch;
}
button.addEventListener("click", () => {
  firstGuess();
  if (first == wordOfDay) {
    highlightGreen();
    console.log("TRUE");
    return;
  } else if (wordOfDay !== first) {
    if (isHighlightYellow()) {
      highlightYellow();
    }

    console.log("Not Quite");
  }
});
