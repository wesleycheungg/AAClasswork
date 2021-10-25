console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  window.banana = ctx
  window.yes = true
})
window.MovingObject = MovingObject;
