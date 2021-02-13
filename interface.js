let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
];

let player1 = 'X';
let player2 = 'O';

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(250);
    let w = width / 3;
    let h = height / 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          
            let x = w * i + w/2;
            let y = h * j + h/2;
          
            let pos = board[i][j];
            textSize(32);
            
            if (pos == player1) {
              let size = w/4;
              line(x-size, y-size, x+size, y+size);
              line(x+size, y-size, x-size, y+size);
            }
            else if (pos == player2) {
              noFill();
              ellipse(x,y,w/2);
            }
        }
    }
}