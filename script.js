//inisiasi variabel
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const resetButton = document.querySelector("#reset");
const scoreWinSelect = document.querySelector("#score-win");

//point
let scoreWin = 3;
let isGameOver = false;

//inisiasi score p1
let p1Score = 0;

//event listener p1
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === scoreWin) {
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

//inisiasi score p2
let p2Score = 0;

//event listener p2
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === scoreWin) {
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
  p2Display.textContent = p2Score;
});

//reset
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Button.disabled = false;
  p2Button.disabled = false;
}

//event listener reset
resetButton.addEventListener("click", reset);

//event listener scoreWin
scoreWinSelect.addEventListener("change", function () {
  scoreWin = parseInt(this.value);
  reset();
});

/* path */
