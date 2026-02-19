let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winpatterns = [
  // row patterns
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // column patterns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal patterns
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congralution, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let box1 = boxes[pattern[0]].innerText;
    let box2 = boxes[pattern[1]].innerText;
    let box3 = boxes[pattern[2]].innerText;

    if (box1 !== "" && box1 === box2 && box2 === box3) {
      if (box1 === box2 && box2 === box3) {
        showWinner(box1);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
