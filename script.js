let board = [
    [ "_" , "_" , "_" ],
    [ "_" , "_" , "_" ],
    [ "_" , "_" , "_" ]
];

let player = "X";

while(true) {
    let boardStr = board[0].join("   ") + "\n" + board[1].join("   ") + "\n" + board[2].join("   ");
    let row = +prompt("Dear user, please provider the value (1,2,3) for the row \n"+ "You are " + player + "\n" + boardStr) - 1;
    if(row != 0 && row != 1 && row != 2) {
        alert("Not a legal mover, you lose!");
        break;
    }
    let column = +prompt("Dear user, please provider the value (1,2,3) for the column \n" + "You are " + player + "\n" + boardStr) - 1;
    if(column != 0 && column != 1 && column != 2) {
        alert("Not a legal mover, you lose!");
        break;
    }
    else if(board[row][column] != "_") {
        alert("Not a legal mover, you lose!");
        break;
    }
    board[row][column] = player;



    if(board[0][0] === player && board[0][1] === player && board[0][2] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[2][0] === player && board[2][1] === player && board[2][2] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[0][0] === player && board[1][0] === player && board[2][0] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[0][1] === player && board[1][1] === player && board[2][1] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[0][2] === player && board[1][2] === player && board[2][2] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        alert("Winer - " + player);
        break;
    }
    else if(board[0][2] === player && board[1][1] === player && board[2][0] === player) {
        alert("Winer - " + player);
        break;
    }
    


    if(player === "X") {
        player = "O";
    }else {
        player = "X"
    };
};
