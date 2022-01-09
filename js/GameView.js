export default class GameView{
    constructor(){
        console.log("Init Game View");
    }
    updateBoard(game){
        this.updateTurn(game);  
        const winningCombination=game.findWinningCombinations();

        console.log("This is board within gameView")
        console.log(game.board);
        for(let i=0; i<game.board.length;i++){
            // console.log(game.board[i]);
            const tile=document.querySelector(`.board-tile[data-index='${i}']`)
            // console.log(tile)
            // tile.textContent=game.board[i];
            tile.classList.remove("tile-winner")
            let tileType=game.board[i]=="X"?"tile-x":"tile-o";
            tile.innerHTML=`<span class="${tileType}">${game.board[i]?game.board[i]:''}</span>`
            if(winningCombination&&winningCombination.includes(i)){
                tile.classList.add("tile-winner")
            }
        }
    }
    updateTurn(game){
        let playerX=document.querySelector(".player-X");
        let playerO=document.querySelector(".player-O");
        playerX.classList.remove("active");
        playerO.classList.remove("active");
        if(game.turn=="X"){
        playerX.classList.add("active");
        }
        if(game.turn=="O"){
        playerO.classList.add("active");
        }
    }
}