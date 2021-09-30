// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
mouse = {
  x: 0,
  y: 0 };


// The Dot object used to scaffold the dots
var Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = function () {
    var n = document.createElement("img");
    n.src = "https://scontent.flyn1-1.fna.fbcdn.net/v/t1.15752-9/p100x100/242362151_394749022061770_1708197024486641754_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=58c789&_nc_ohc=5P1Qplu5NMMAX9gqV4a&_nc_ht=scontent.flyn1-1.fna&oh=e99d886b2b66b1209b334205f4dd220e&oe=617A963B";
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }();
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  var x = mouse.x,
  y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function (dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();