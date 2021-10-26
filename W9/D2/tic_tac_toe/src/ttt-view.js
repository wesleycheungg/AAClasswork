class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    
    this.setupBoard()

  }

  setupBoard() {
    // const grid = document.querySelector(".make-grid");
    // debugger
    const grid_ul = document.createElement("ul");
    this.el.append(grid_ul);
    // const liElement = document.createElement("li").append(grid_ul);
    for (let i = 0; i < 3; i++) {
      grid_ul.append(document.createElement("li"));
      grid_ul.append(document.createElement("li")); //.className = `${i}2`
      grid_ul.append(document.createElement("li")); //.className = `${i}3`
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
