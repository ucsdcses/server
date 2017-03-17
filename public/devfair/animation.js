window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


var canvas = document.getElementById('canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');
context.fillStyle = '#FF0000';
var time = false;

  // box position
var x = -100;

  // animation loop
var loop = function(){

    // get time since last frame
  var now = new Date().getTime();
  var d = now - (time || now);
  time = now;

  context.clearRect(0, 0, canvas.width, canvas.height);

    // draw new rectangle
  for ( var i = -10; i < 21; i++ ) {
    for ( var q = 0; q <= 5; q++ ) {

      context.fillRect(x - (canvas.width / 10) * i, (canvas.height / 5) * q, 100, 100);

    }
  }


    // advance horizontal position
  x += 2 * d;

    // reset horizontal position
  if (x > canvas.width * 2){
    x = -100;
  }

    // request next frame
  requestAnimationFrame(loop);

};

  // first frame
loop();

