var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


//cirlce object
function Circle(x, y, dx, dy, r) {

  this.x = x;
  this.y = y;

  this.dx = dx;
  this.dy = dy

  this.r = r;

  var randomAlpha = Math.random();

  this.draw = function() {
    var circleColor = 'rgba(' + getComputedStyle(document.documentElement)
    .getPropertyValue('--main-colour') + ',' + randomAlpha+ ')'; // #999999

    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    c.fillStyle = circleColor;
    c.fill();
  }

  this.update = function() {
    if(this.x + this.r > innerWidth || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if(this.y + this.r > innerHeight || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}


var circleArray = [];

for(var j = 0; j < 10; j++) {
  //radius
  var r = Math.random() * 200;


  var x = Math.random() * (innerWidth - r * 2) + r;
  var y = Math.random() * (innerHeight - r * 2) + r;

  //velocity
  var dx = (Math.random() - 0.5) * 2;
  var dy = (Math.random() - 0.5) * 2;

  circleArray.push( new Circle(x, y, dx, dy, r) );
}




function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for(var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
