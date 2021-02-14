// Initialize Board
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Initialize Players and Available Spots
const AI = 'X';
const HUMAN = 'O'
let currentPlayer = HUMAN;

// Initialize Width and Height
let w = 0;
let h = 0;

// Starts the Game
function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  nextMove();
}

// Checks if a = b = c != ' '
function equal_check(a, b, c) {
  return (a == b && b == c && a != ' ');
}

// Checks Winning Scenarios
function checkWinner() {
  let winner = null;
  let availableSpots = 0;

  // Vertical Win
  for (let i = 0; i < 3; i++) {
    if (equal_check(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Horizontal Win
  for (let i = 0; i < 3; i++) {
    if (equal_check(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal Wins
  if (equal_check(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }

  if (equal_check(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == ' ') {
        availableSpots++;
      }
    }
  }

  if (winner == null && availableSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

// Allows HUMAN to click on Available Spot
function mousePressed() {
  if (currentPlayer == HUMAN) {
    let j = floor(mouseX / w);
    let i = floor(mouseY / h);
    if (board[i][j] == ' ') {
      board[i][j] = HUMAN;
      currentPlayer = AI;
      nextMove();
    }
  }
}

// Draws X's and O's relative to the center of a spot on the board
function draw() {
  background(255);
  strokeWeight(4);

  // Creates Grid 
  line(w, 0, w, height);
  line((2 * w), 0, (2 * w), height);
  line(0, h, width, h);
  line(0, (h * 2), width, (h * 2));

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      let y = (h * i) + (h / 2);
      let x = (w * j) + (w / 2);

      let pos = board[i][j];

      if (pos == AI) {
        // Draws X
        let size = (w / 4);
        line(x - size, y - size, x + size, y + size);
        line(x + size, y - size, x - size, y + size);
      }
      else if (pos == HUMAN) {
        // Draws O
        noFill();
        ellipse(x, y, (w / 2));
      }
    }
  }

  // Prints out the result
  let finalResult = checkWinner();
  if (finalResult != null) {
    noLoop();
    let result = createP('');
    result.style('font-size', '32pt');

    if (finalResult == 'tie') {
      result.html('Tie!');
    } else {
      result.html(`${finalResult} wins!`);
    }
  }
}