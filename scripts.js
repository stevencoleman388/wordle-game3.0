const board = document.getElementById("board");
const answer = document.getElementById("answer");
let rows = 6;
let columns = 5;
let wordOfDay;
const button = document.querySelector(".button");
let tile = document.querySelector(".tile input");
const URL = "https://words.dev-apis.com/word-of-the-day?random=1";
async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  wordOfDay = data.word;
  wordOfDay = wordOfDay.toUpperCase();
}
fetchData();
// setTimeout(() => {
//   document.querySelector("h1").innerHTML = wordOfDay;

// }, 5000);

let num = [];
// function getAnswer() {
//   for (let i = 1; i <= columns; i++) {
//     num.push(i);
//   }
//   num.forEach((val) => {
//     val = document.querySelector("h1").innerHTML = "column ";
//     document.body.append(val);
//   });
//   console.log(num);
// }
//

function getColumn() {
  for (let i = 0; i <= columns - 1; i++) {
    let tile = document.createElement("span");
    tile.classList.add("tile");
    tile.setAttribute("contenteditable", "true");
    tile.addEventListener("keydown", function (event) {
      if (tile.innerHTML.length >= 1 && event.key !== "Backspace") {
        event.preventDefault();
      }
      console.log(tile.innerHTML);
      console.log(tile.innerHTML.length);
    });
    board.append(tile);
  }
}

getColumn();
