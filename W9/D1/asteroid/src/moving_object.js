function MovingObject(options) {
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
}

module.exports = MovingObject;

// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });

// console.log(mo);