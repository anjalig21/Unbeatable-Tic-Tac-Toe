// Initialize Canvas
function setup() {
    createCanvas(400, 400);
    currentPlayer = random(players);
}

// Initialize Board
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
];

// Initialize Players
let players = ['X', 'O'];

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
          
            let pos = board[j][i];
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
}