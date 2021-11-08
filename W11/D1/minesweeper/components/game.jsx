import React from "react";
import * as Minesweeper from "minesweeper";

class Game extends React.Component {
    constructor(props){
        super(props);
        let board = Minesweeper.Board(9,3);

        this.state = {board}
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(){
        console.log("Update Game");
    }

    render(){
        return(
            <Board board={this.state.board} updateParentGame={this.updateGame} />
        )
    }
}

export default Game;