const View = require("./ttt-view.js");

const Game = require("./ttt_node/game.js");

new Game();

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const tView = document.querySelector(".ttt");
  this.setupBoard();

});

View.prototype.setupBoard = function(){
  const grid = document.querySelector(".make-grid");
  grid.innerHTML = (new Array(9)).map( (item) => {
    return `  <ul class="grid">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                // <li></li>    const li = document.createElement("li")
                                *dont forget to append UL to something (gameview?)
              </ul>`
  })
}