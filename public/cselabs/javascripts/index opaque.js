var socket;
var dataObj ={
  date: 'x',
  labs: []
};

$(document).ready(function(){

  socket.on('Event', function(data){

    //console.log('client side received');
    dataObj.date = data.date;
    dataObj.labs = data.labs;
  });
});

var comp1 = new Image();
comp1.src = 'images/comp1.png';
var comp2 = new Image();
comp2.src = 'images/comp2.png';

var drawRoom = function(labInfo, sS, lab) {

  //sS = 20;
  var width = sS*9;
  var height = sS*11;

  /*y values of each row*/
  var yArray = [0, 0, sS*2, sS*3, sS*5, sS*6, sS*8, sS*9];

  /*constant used for drawing*/
  var cArray = [0, 2, -6, 2-12, -18, 2-24, -30, 2-36];

  //get the canvas
  var c = document.getElementById(lab);
  var ctx = c.getContext('2d');
  ctx.font = '26px Arial';

  //load computers

  /*draw floor*/
  ctx.fillStyle = 'gray';
  ctx.fillRect(0,0,width-1,height-1);

  /*draw side tables*/
  ctx.fillStyle = 'lightgray';
  ctx.fillRect(0,sS*3,sS,sS*2);
  ctx.fillRect(0,sS*6,sS,sS*2);

  ctx.strokeStyle = 'black';
  ctx.fillRect(sS,0,sS,3);

  /*ctx.moveTo(15,0);
  ctx.lineTo(50,50);
  ctx.stroke();*/

  // lawngreen for available, lightgray for not
  // var pickColor = function(number, xpos, ypos) {
  var pickColor = function(number) {
    if (labInfo.charAt(number) == 0)
      ctx.fillStyle = 'lawngreen';

    else if (labInfo.charAt(number) == 1)
      ctx.fillStyle = 'lightgray';

    else
      ctx.fillStyle = 'lightgray';
  };

  /*draws a station*/
  var drawStation = function(number, xpos, ypos){

    //uncomment for outline
    //ctx.rect(x,y,40,40);

    pickColor(i, xpos, ypos);
    ctx.fillRect(x+1,y,sS-2,sS-2);

    //uncomment for number to show
    //ctx.fillStyle = 'black';
    //ctx.fillText(i, x+1, y + 40 - 2);

  };

  var getRow = function(number){
    if (number < 7){
      return 1;
    }
    if (number < 13){
      return 2;
    }
    if (number < 19){
      return 3;
    }
    if (number < 25){
      return 4;
    }
    if (number < 31){
      return 5;
    }
    if (number < 37){
      return 6;
    }
    if (number < 43){
      return 7;
    }
  };

  /*loop through each comp and draw it*/
  for (var i = 1; i <= 42; i++){
    var row = getRow(i);

    /*determine xpos based on snake path*/
    /*get constant from array aswell*/
    var x;
    if ((i%12) <= 6 && (i%12) > 0){
      x = (i + cArray[row])*sS;
    }
    else {
      x = (width) - (i + cArray[row])*sS;
    }

    /*fetch y value from array*/
    var y = yArray[row];

    drawStation(i,x,y);
  }

};

var updateAS = function(j){
  var labInfo = dataObj.labs[j];
  var AS = 0;
  for (var i = 1; i <= 42; i++){
    if (labInfo.charAt(i) == '0'){
      AS++;
    }
  }
  var ASid = (23 + j)*10 + 'seats';
  document.getElementById(ASid).innerHTML = 'Available Seats: ' + AS;

};

window.onload = function(){
  setTimeout(function(){
    for (var i = 0; i < 5; i++){
      var labInfo = dataObj.labs[i];
      var room = (23 + i)*10 + 'c';
      drawRoom(labInfo, 25, room);
      updateAS(i);
    }
    document.getElementById('lastUpdate').innerHTML = 'Last Update: ' + dataObj.date;

  }, 50);

  /*
  $('.cv').click(function(){
    console.log(this);
    this.height = 500;
    this.width = 500;
    this.style.zIndex='1000';
  })
  */
};

function update() {

  //console.log('here');
  /*add window timeout*/
  socket = io.connect('http://localhost:3000');
  socket.emit('askForData');

}
