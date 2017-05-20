function GameConnect4() {
    this.board = [
        [null, null, null, null,null, null, null],
        [null, null, null, null,null, null, null],
        [null, null, null, null,null, null, null],
        [null, null, null, null,null, null, null],
        [null, null, null, null,null, null, null],
        [null, null, null, null,null, null, null]
    ],
    this.turn = 1, /* 1 or 2 */
    this.player1 = {
      name: "player1",
      color: "red",
      won: false,
      lost: false
    },
    this.player2 = {
      name: "player2",
      color: "black",
      won: false,
      lost: false
    }
}


GameConnect4.prototype.whoHasTurn = function(){
  return this.turn;
}
GameConnect4.prototype.changeTurn = function(player){
  this.turn = player;
}

GameConnect4.prototype.insertTile = function(playerColumn) {
  var playerTurn = this.whoHasTurn();
  var freePosition = true;

var checkStatus = 0;
  for (var i = 5; i >= 0 && freePosition; i--) {
    if (!this.board[i][playerColumn]){
      freePosition = false;
      if (playerTurn===1){
        this.board[i][playerColumn] = this.player1.color;
        document.getElementById(i+"-"+playerColumn).classList.add("red");
        checkStatus = this._checkWin(this.board[i], this.player1.color);
        if (checkStatus === 4){ console.log ("Player 1 won!!!!")}
        checkStatus = this._checkWin(this._colToRow(this.board,playerColumn), this.player1.color);
        if (checkStatus === 4){ console.log ("Player 1 won!!!!")}
        this.changeTurn(2);
      }
      else{
        this.board[i][playerColumn] = this.player2.color;
        document.getElementById(i+"-"+playerColumn).classList.add("black");
        ccheckStatus = this._checkWin(this.board[i], this.player2.color);
        if (checkStatus === 4){ console.log ("Player 2 won!!!!")}
        checkStatus = this._checkWin(this._colToRow(this.board,playerColumn), this.player2.color);
        if (checkStatus === 4){ console.log ("Player 2 won!!!!")}
        this.changeTurn(1);
      }
    }
  }
  this._renderBoard();
}
GameConnect4.prototype._renderBoard = function () {
  // this.board.forEach(function(row){ console.log(row); });
};

GameConnect4.prototype._checkWin = function (row, color) {
  var totalColor = 1;
  for (var i=0; i<=row.length && totalColor < 4; i++){
    if (row[i]===row[i+1]){
      if (row[i] === color){
        totalColor +=1;
      }
      else if(totalColor < 4){
        totalColor = 1;
      }
    }
  }
  return totalColor;
  console.log(totalColor);
}
GameConnect4.prototype._colToRow = function(matrix, col){
  var column = [];
  for (var i=0; i<matrix.length; i++){
    column.push(matrix[i][col]);
  }
  return column;
}

GameConnect4.prototype._crossLeftToRightToRow = function(rowIndex, colIndex){
  var diagonal =[];
  var currentRowIndex = rowIndex;
  var currentColIndex = colIndex;

  if(rowIndex === 0 || colIndex === 0){
    for(var i=rowIndex, j=colIndex; i<this.board.length && j < this.board[0].length; i++, j++){
      diagonal.push(this.board[i][j]);
    }
  }
}

// GameConnect4.prototype._crossLeftToRightToRow = function(matrix, col){
//   var column = [];
//   for (var i=0; i<matrix.length; i++){
//     column.push(matrix[i][col]);
//   }
//   return column;
// }
//
// GameConnect4.prototype._crossRightToLeftToRow = function(matrix, col){
//   var column = [];
//   for (var i=0; i<matrix.length; i++){
//     column.push(matrix[i][col]);
//   }
//   return column;
// }
