import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component {
    constructor(props){
        super(props);
        let board = new Minesweeper.Board(9,6);
        this.state = {board}
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(tile, altPressed){
      if (altPressed) {
        tile.toggleFlag();
      } else {
        tile.explore();
      }
      this.setState({
        board: this.state.board
      })
    }

    render(){
      if (this.state.board.lost()) {
        return (
          <div><h1>Sad. Game Over.</h1></div>
        )
      } else if (this.state.board.won()) {
        return (
          <div><h1>Congrats. You won.</h1></div>
        )
      } else {
        return (
          <Board className='board' board={this.state.board} updateParentGame={this.updateGame} />
        )
      }
    }
}

export default Game;