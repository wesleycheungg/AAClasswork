import React from "react";
import * as Minesweeper from "../minesweeper";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.displayVal = "T"
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

  render() {
    return (
      <div>{this.getDisplay()}</div>
    )
  }
}

export default Tile;