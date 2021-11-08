import React from "react";
import * as Minesweeper from "../minesweeper";
import Board from "./board";

class Game extends React.Component {
    constructor(props){
        super(props);
        let board = new Minesweeper.Board(9,6);
        this.state = {board}
        this.updateGame = this.updateGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
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

    restartGame(){
        this.setState({
            board: new Minesweeper.Board(9,6)
        })
    }

    render(){
      if (this.state.board.lost()) {
        return (
            <div>
                <div class="modal-fade">
                    <div class="pop-up-modal">
                        <h1>Sad. You Lost :(.</h1>
                        <button onClick={this.restartGame}>RESTART GAME</button>
                    </div>
                </div>
                <Board className='board' board={this.state.board} updateParentGame={this.updateGame} />

            </div>
        )
      } else if (this.state.board.won()) {
        return (
            <div>
                <div class="modal-fade">
                    <div class="pop-up-modal">
                        <h1>GG! YOU WON!</h1>
                        <button onClick={this.restartGame}> RESTART GAME</button>
                    </div>
                </div>
                <Board className='board' board={this.state.board} updateParentGame={this.updateGame} />
            </div>
        )
      } else {
        return (
          <Board className='board' board={this.state.board} updateParentGame={this.updateGame} />
        )
      }
    }
}

export default Game;