import Game from "./Game.js";
import GameView from "./GameView.js";
let game=new Game();
let gameView=new GameView();
// gameView.updateBoard(game);
// // console.log("checkin g if the console works")    ;
// console.log("The turn is;",game.turn);
// game.nextTurn();
// console.log("The turn is;",game.turn);
// game.markMove(3);
// console.log(game.board);
// game.nextTurn();
// game.markMove(8);
// console.log(game.board);
document.querySelector(".restart").addEventListener("click",()=>{
    console.log("new game");
    onRestart();
});
// gameView.updateBoard(game);
let tiles=document.querySelectorAll(".board-tile");
// console.log(tiles)
tiles.forEach(tile => {
    tile.addEventListener("click",()=>{
        // console.log("Tile clicked")
        // console.log(tile.dataset.index);
        onTileClick(tile.dataset.index)
    })
    
});
function onTileClick(i){
    //make move
    game.makeMove(i);
    //update board
    gameView.updateBoard(game);
    //change turn
    // game.nextTurn();

}
function onRestart(){
    game=new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game);