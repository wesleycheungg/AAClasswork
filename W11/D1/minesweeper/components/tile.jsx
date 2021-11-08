import React from "react";
import * as Minesweeper from "../minesweeper";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.displayVal = "🏝"
    this.handleClick = this.handleClick.bind(this)
  }

  getDisplay(){
    let tile = this.props.cell
    if(tile.explored){
      this.displayVal = (tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : "🧭")
    } else if (tile.flagged) {
      this.displayVal = "⛳️"
    } else if (this.props.didLoseGame() && tile.bombed) {
      this.displayVal = "💣"
      console.log("last logic ran")
    }
    return this.displayVal
  }

  handleClick(e) {
    let altHeld = e.altKey
    let tile = this.props.cell
    this.props.updateParentGame(tile, altHeld)
  }

  render() {
    return (
      <div className='tile' onClick={this.handleClick}>{this.getDisplay()}</div>
    )
  }
}

export default Tile;