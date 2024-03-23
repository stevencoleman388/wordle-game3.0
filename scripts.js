const board = document.getElementById("board");
const answer = document.getElementById("answer");
let columnOne = document.querySelectorAll(".column-one");
let columnTwo = document.querySelectorAll(".column-two");
let columnThree = document.querySelectorAll(".column-three");
let columnFour = document.querySelectorAll(".column-four");
let columnFive = document.querySelectorAll(".column-five");
let columnSix = document.querySelectorAll(".column-six");
columnOne.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnTwo.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnThree.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnFour.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnFive.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});
columnSix.forEach((element) => {
  element.setAttribute("contenteditable", "true");
});

let first = "";
let second = "";
let third = "";
let fourth = "";
let fifth = "";
let sixth = "";
let wordOfDay;
wordOfDay = "racecar";
const button = document.querySelector(".button");
const URL = "https://words.dev-apis.com/word-of-the-day?random=1";
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  // wordOfDay = data.word;

  console.log(wordOfDay);
}
// console.log(wordOfDay);
fetchData();

function firstGuess() {
  let list = [];
  for (let i = 0; i <= columnOne.length - 1; i++) {
    list.push(columnOne[i].innerHTML);
  }
  // console.log(list.length);
  first = list.join("");
}
function secondGuess() {
  let list = [];
  for (let i = 0; i <= columnTwo.length - 1; i++) {
    list.push(columnTwo[i].innerHTML);
  }
  second = list.join("");
  columnTwo.forEach((tile) => {
    tile.style.display = "inline-block";
    console.log("Try Again");
  });
}
function thirdGuess() {
  let list = [];
  for (let i = 0; i <= columnThree.length - 1; i++) {
    list.push(columnThree[i].innerHTML);
  }
  third = list.join("");
  columnThree.forEach((tile) => {
    tile.style.display = "inline-block";
    console.log("Try Again");
  });
}
function fourthGuess() {
  let list = [];
  for (let i = 0; i <= columnFour.length - 1; i++) {
    list.push(columnFour[i].innerHTML);
  }
  fourth = list.join("");
  columnFour.forEach((tile) => {
    tile.style.display = "inline-block";
    console.log("Try Again");
  });
}
function fifthGuess() {
  let list = [];
  for (let i = 0; i <= columnFive.length - 1; i++) {
    list.push(columnFive[i].innerHTML);
  }
  fifth = list.join("");
  columnFive.forEach((tile) => {
    tile.style.display = "inline-block";
    console.log("Try Again");
  });
}
function sixthGuess() {
  let list = [];
  for (let i = 0; i <= columnSix.length - 1; i++) {
    list.push(columnSix[i].innerHTML);
  }
  sixth = list.join("");
  columnSix.forEach((tile) => {
    tile.style.display = "inline-block";
    console.log("Try Again");
  });
}
function highlightGreen() {
  for (let i = 0; i <= columnOne.length - 1; i++) {
    columnOne[i].classList.add("green");
  }
  for (let i = 0; i <= columnTwo.length - 1; i++) {
    columnTwo[i].classList.add("green");
  }
  for (let i = 0; i <= columnThree.length - 1; i++) {
    columnThree[i].classList.add("green");
  }
  for (let i = 0; i <= columnFour.length - 1; i++) {
    columnFour[i].classList.add("green");
  }
  for (let i = 0; i <= columnFive.length - 1; i++) {
    columnFive[i].classList.add("green");
  }
  for (let i = 0; i <= columnSix.length - 1; i++) {
    columnSix[i].classList.add("green");
  }
}
function highlightYellow() {
  for (let i = 0; i <= columnOne.length - 1; i++) {
    columnOne[i].classList.add("yellow");
  }
}
function isHighlightGreen() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (first[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-one")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightGreen2() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (second[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-two")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightGreen3() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (third[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-three")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightGreen4() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (fourth[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-four")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightGreen5() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (fifth[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-five")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightGreen6() {
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (sixth[i] === wordOfDay[i]) {
      document.querySelectorAll(".column-six")[i].classList.add("green");
      hasMatch = true;
    }
  }
  return hasMatch;
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
  console.log(wordOfDayCounter);
  console.log(firstCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (first.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-one")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightYellow2() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const secondCounter = getLetterCounter(second);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(wordOfDayCounter);
  console.log(secondCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (second.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-two")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightYellow3() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const thirdCounter = getLetterCounter(third);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(wordOfDayCounter);
  console.log(thirdCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (third.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-three")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightYellow4() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const fourthCounter = getLetterCounter(fourth);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(wordOfDayCounter);
  console.log(fourthCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (fourth.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-four")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightYellow5() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const fifthCounter = getLetterCounter(fifth);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(wordOfDayCounter);
  console.log(fifthCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (fifth.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-five")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
function isHighlightYellow6() {
  function getLetterCounter(word) {
    let letterCounter = {};
    for (let i = 0; i <= word.length - 1; i++) {
      let char = word[i];
      let prevCount = letterCounter[char] ?? 0;
      letterCounter[char] = prevCount + 1;
    }
    return letterCounter;
  }
  const sixCounter = getLetterCounter(sixth);
  const wordOfDayCounter = getLetterCounter(wordOfDay);
  console.log(wordOfDayCounter);
  console.log(sixCounter);
  let hasMatch = false;
  for (let i = 0; i < wordOfDay.length; i++) {
    if (sixth.includes(wordOfDay[i])) {
      document.querySelectorAll(".column-six")[i].classList.add("yellow");
      hasMatch = true;
    }
  }
  return hasMatch;
}
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
let fakeInput = "racacta";
let colors = getColors();
function getColors() {
  let correctWordLettersCount = getCharacterCounts(wordOfDay);
  console.log(correctWordLettersCount);

  let userWordLettersCount = getCharacterCounts(fakeInput);
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
    const userWordCharacter = fakeInput[i];

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

console.log(colors);

button.addEventListener("click", () => {
  // if (second == wordOfDay) {
  //   highlightGreen();
  //   document.querySelector("h1").innerHTML = "You Win";
  //   document.querySelector("h1").style.fontSize = "55px";
  //   return;
  // } else if (wordOfDay !== second) {
  //   if (isHighlightGreen2()) {
  //     isHighlightGreen2();
  //     thirdGuess();
  //   } else if (isHighlightYellow2()) {
  //     isHighlightYellow2();
  //     thirdGuess();
  //   }
  // }
  // if (third == wordOfDay) {
  //   highlightGreen();
  //   document.querySelector("h1").innerHTML = "You Win";
  //   document.querySelector("h1").style.fontSize = "55px";
  //   return;
  // } else if (wordOfDay !== third) {
  //   if (isHighlightGreen3()) {
  //     isHighlightGreen3();
  //     fourthGuess();
  //   } else if (isHighlightYellow3()) {
  //     isHighlightYellow3();
  //     fourthGuess();
  //   }
  // }
  // if (fourth == wordOfDay) {
  //   highlightGreen();
  //   document.querySelector("h1").innerHTML = "You Win";
  //   document.querySelector("h1").style.fontSize = "55px";
  //   return;
  // } else if (wordOfDay !== fourth) {
  //   if (isHighlightGreen4()) {
  //     isHighlightGreen4();
  //     fifthGuess();
  //   } else if (isHighlightYellow4()) {
  //     isHighlightYellow4();
  //     fifthGuess();
  //   }
  // }
  // if (fifth == wordOfDay) {
  //   highlightGreen();
  //   document.querySelector("h1").innerHTML = "You Win";
  //   document.querySelector("h1").style.fontSize = "55px";
  //   return;
  // } else if (wordOfDay !== fifth) {
  //   if (isHighlightGreen5()) {
  //     isHighlightGreen5();
  //     sixthGuess();
  //   } else if (isHighlightYellow5()) {
  //     isHighlightYellow5();
  //     sixthGuess();
  //   }
  // }
  // if (sixth == wordOfDay) {
  //   highlightGreen();
  //   document.querySelector("h1").innerHTML = "You Win";
  //   document.querySelector("h1").style.fontSize = "55px";
  //   return;
  // } else if (wordOfDay !== sixth) {
  //   if (isHighlightGreen6()) {
  //     isHighlightGreen6();
  //     document.querySelector("h1").innerHTML = "You Lose";
  //     document.querySelector("h1").style.fontSize = "55px";
  //     return;
  //   } else if (isHighlightYellow6()) {
  //     isHighlightYellow6();
  //     document.querySelector("h1").innerHTML = "You Lose";
  //     document.querySelector("h1").style.fontSize = "55px";
  //     return;
  //   }
  // }
});
