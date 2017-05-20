var game;

window.onload = function () {
  // loadSounds();
  game = new GameConnect4();
  game._renderBoard();
};

function columnListeners (event) {
  var keys = [49, 50, 51, 52, 53, 54, 55];

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {
    case 49: game.insertTile(0);  break;
    case 50: game.insertTile(1);  break;
    case 51: game.insertTile(2);  break;
    case 52: game.insertTile(3);  break;
    case 53: game.insertTile(4);  break;
    case 54: game.insertTile(5);  break;
    case 55: game.insertTile(6);  break;
  }

}

document.addEventListener("keydown", columnListeners);
