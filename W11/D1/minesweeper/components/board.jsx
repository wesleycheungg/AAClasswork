import React from "react";
import * as Minesweeper from "../minesweeper";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props){
        super(props);

        this.didLose = this.didLose.bind(this)
    }

    getBoardRows() {
      let board = this.props.board;
      let gridArr = board.grid.map((row, idx) => {
        return (
          <div key={idx} className='row'>
            {row.map((cell, idx) => {
              return (
                <Tile key={idx} cell={cell} updateParentGame={this.props.updateParentGame} didLoseGame={this.didLose} />
              )
            })}
          </div>
        )
      })
      return gridArr;
    }

    didLose(){
        return(
            this.props.board.lost()

        )
    }


    render(){
        return(
          <div>
            {this.getBoardRows()}
          </div>
        )
    }
}

export default Board;