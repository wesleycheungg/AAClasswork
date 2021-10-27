class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    
    this.setupBoard();
    const pieceIds = document.querySelectorAll('li');
    for (let i = 0; i < pieceIds.length; i++) {
      pieceIds[i].dataset.indexNumber = i;
    }
  }

 

  setupBoard() {
    // const grid = document.querySelector(".make-grid");
    // debugger
    const grid_ul = document.createElement("ul");
    this.el.append(grid_ul);
    // const liElement = document.createElement("li").append(grid_ul);
    for (let i = 0; i < 3; i++) {
      grid_ul.append(document.createElement("li"));
      grid_ul.append(document.createElement("li")); 
      grid_ul.append(document.createElement("li"));
    }
  }
  


  bindEvents() {
    handleClick(e) {
    // its the callback for the addeventlistener. When the user clicks on a cell,
    // it needs to call the game.prototype.playMove(which requires pos), which we 
    // should get from the LI element 
    // 0 => 0,0
      const pos = positions[e.dataset.indexNumber]
      const positions = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
      this.game.playMove(pos)
  }
}
  pieceIds.addEventListener("click", handleClick()) 

  makeMove(square) {}

}

module.exports = View;
