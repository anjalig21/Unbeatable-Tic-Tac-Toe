function setup() {
    createCanvas(400, 400);
}

let board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
];

let P1 = 'X';
let P2 = 'O';

function draw() {
    background(255);

    let w = (width / 3);
    let h = (height / 3);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          
            let y = (h * i) + (h / 2);
            let x = (w * j) + (w / 2);
          
            let pos = board[j][i];
            textSize(32);
            
            if (pos == P1) {
              let size = (w / 4);
              line(x - size, y - size, x + size, y + size);
              line(x + size, y - size, x - size, y + size);
            }
            else if (pos == P2) {
              noFill();
              ellipse(x,y,(w / 2));
            }
        }
    }
}