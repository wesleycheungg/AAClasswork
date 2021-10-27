const View = require("./ttt-view.js");

const Game = require("../ttt_node/game.js");

let newGame = new Game();

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const tView = document.querySelector(".ttt");
  let view = new View(newGame, tView) 
});



