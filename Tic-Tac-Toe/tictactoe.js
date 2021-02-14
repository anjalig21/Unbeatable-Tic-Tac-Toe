// Initialize Board to Empty
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Initialize Players and Available Spots
let players = ['X', 'O'];
let currentPlayer;
let available = [];

// Initialize Canvas
function setup() {
  createCanvas(400, 400);
  currentPlayer = floor(random(players.length));
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        available.push([i,j]);
     }
  }
}

function equal_check(a, b, c) {
  return (a == b && b == c && a != ' ');
}

function checkWinner() {
  let winner = null;
  
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
  
  // Tie
  if (winner == null && available.length == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

// Plays the next move
function nextMove() {
  let index = floor(random(available.length));
  let pos = available.splice(index,1)[0];
  let i = pos[0];
  let j = pos[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

// Draws X's and O's relative to the center of a spot on the board
function draw() {
  background(255);

  let w = (width / 3);
  let h = (height / 3);

  line(w, 0, w, height);
  line((2 * w), 0, (2 * w), height);
  line(0, h, width, h);
  line(0, (h * 2), width, (h * 2));

  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        
          let y = (h * i) + (h / 2);
          let x = (w * j) + (w / 2);
        
          let pos = board[i][j];
          textSize(32);
          strokeWeight(3);
          
          if (pos == players[0]) {
            let size = (w / 4);
            line(x - size, y - size, x + size, y + size);
            line(x + size, y - size, x - size, y + size);
          }
          else if (pos == players[1]) {
            noFill();
            ellipse(x,y,(w / 2));
          }
      }
  }
  
  // Prints out the result
  let finalResult = checkWinner();
  if (finalResult != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    
    if (result == 'tie') {
      resultP.html('Tie!');
    } else {
      resultP.html(`${result} wins!`);
    }
  } else {
    nextMove();
  }
}
