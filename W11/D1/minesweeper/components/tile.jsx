import React from "react";
import * as Minesweeper from "../minesweeper";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.displayVal = "T"
    this.handleClick = this.handleClick.bind(this)
  }

  getDisplay(){
    let tile = this.props.cell
    if(tile.explored){
      this.displayVal = (tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : "E")
    } else if (tile.flagged) {
      this.displayVal = "F"
    } else if (tile.bombed) {
      this.displayVal = "B"
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