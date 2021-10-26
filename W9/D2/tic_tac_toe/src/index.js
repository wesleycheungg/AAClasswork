const View = require("./ttt-view.js");

const Game = require("./ttt_node/game.js");

new Game();

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const tView = document.querySelector(".ttt");


});

View.prototype.setupBoard = function(){
  const grid = document.querySelector(".grid");
  grid.innerHTML = (new Array(9)).map( (item) => {
    return `<li>${item}</li>`
  })
}