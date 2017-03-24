let socket;
const dataObj = {
  date: 'x',
  labs: []
};

let loadID;

$(document).ready(() => {

  socket.on('Event', data => {

    //console.log('client side received');
    dataObj.date = data.date;
    dataObj.labs = data.labs;
  });
});

const seatmapStandard = [
  [0, 0, 0, 1, 2, 3, 4, 5, 6],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,12,11,10, 9, 8, 7],
  [0, 0, 0,13,14,15,16,17,18],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,24,23,22,21,20,19],
  [0, 0, 0,25,26,27,28,29,30],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,36,35,34,33,32,31],
  [0, 0, 0,37,38,39,40,41,42],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const seatmap270 = [
  [0, 0, 0, 6, 5, 4, 3, 2, 1],
  [0, 0, 0, 7, 8, 9,10,11,12],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,18,17,16,15,14,13],
  [0, 0, 0,19,20,21,22,23,24],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,30,29,28,27,26,25],
  [0, 0, 0,31,32,33,34,35,36],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0,42,41,40,39,38,37],
  [0, 0, 0,43,44,45,46,47,48],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const drawLoading = function() {
  for (let i = 0; i < 5; i++) {
    const room = (23 + i) * 10 + 'c';
    const c = document.getElementById(room);
    const ctx = c.getContext('2d');
    const tGray = 'rgba(128,128,128,.4)';
    ctx.strokeStyle = tGray;
    ctx.fillStyle = tGray;
    ctx.strokeWidth = '3px';
    ctx.rect(225/2 - 77, 275/2 - 8, 154, 16);
    ctx.stroke();
  }

  let drawWidth = 10;
  const drawBar = function() {
    for (let j = 0; j < 5; j++) {
      const room = (23 + j) * 10 + 'c';
      const c = document.getElementById(room);
      const ctx = c.getContext('2d');
      ctx.fillRect(225 / 2 - 75, 275 / 2 - 6, drawWidth, 12);
      drawWidth += 2;
      if (drawWidth > 150)
        drawWidth = 150;
    }
  };
  loadID = setInterval(drawBar, 26);
};

const drawRoom = function(labInfo, sS, ctx, seatmap) {

  /*clear away whatever was there before*/
  ctx.clearRect(0,0,223-1,298-1);

  /*draw tables and door*/
  ctx.fillStyle = 'rgba(211,211,211,.4)';
  ctx.fillRect(0,sS*3,sS,sS*2);
  ctx.fillRect(0,sS*6,sS,sS*2);
  ctx.fillRect(sS,0,sS,3);

  /*end tables and door*/

  const rows = seatmap.length;
  const cols = seatmap[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = sS*j;
      const y = sS*i;
      const num = seatmap[i][j];
      if (num == 0)
        continue;

      else if (labInfo.charAt(num) == 0)
        ctx.fillStyle = 'lawngreen';

      else
        ctx.fillStyle = 'rgba(211,211,211,.4)';

      ctx.fillRect(x+1,y,sS-2,sS-2);
    }
  }
};


const updateAS = function(j) {
  const labInfo = dataObj.labs[j];
  let AS = 0;
  for (let i = 1; i <= labInfo.length; i++) {
    if (labInfo.charAt(i) == '0')
      AS++;
  }
  const ASid = (23 + j)*10 + 'seats';

  document.getElementById(ASid).innerHTML = 'Available Seats: ' + AS;
};

const seatmaps = [seatmapStandard, seatmapStandard,
  seatmapStandard, seatmapStandard, seatmap270];

window.onload = function() {

  /*add loading bar while waiting for data from socket*/
  drawLoading();

  setTimeout(() => {
    clearInterval(loadID);

    for (let i = 0; i < 5; i++) {
      const labInfo = dataObj.labs[i];
      const room = (23 + i)*10 + 'c';
      const c = document.getElementById(room);
      const ctx = c.getContext('2d');
      drawRoom(labInfo, 25, ctx, seatmaps[i]);
      updateAS(i);
    }

    /*time conversion stuff*/
    let amOrPm = 'PM';
    let hours = dataObj.date.substring(11,13);
    if (hours < '12'){
      amOrPm = 'AM';
    }
    else {
      hours = hours - 12;
    }
    if (hours == '00'){
      hours = 12;
    }
    if (hours < '10' && amOrPm == 'AM'){
      hours = hours.substring(1,2);
    }
    const layDate = hours + dataObj.date.substring(13,16) + ' ' + amOrPm;

    /*end time conversion stuff*/

    document.getElementById('lastUpdate').innerHTML = 'Accurate as of: '
        + layDate;

    const labDay = Date().substring(0,3);
    const labTime = Date().substring(16,18) + Date().substring(19,21);

    //console.log(labDay+labTime);

    /*15L lab*/
    if (labDay == 'Wed'){
      if (labTime > 1600 && labTime < 2150){
        document.getElementById('250lab').innerHTML = 'Lab IP, ends 9:50 PM';
      }
    }
    if (labDay == 'Thu'){
      if (labTime > 830 && labTime < 2220){
        document.getElementById('250lab').innerHTML = 'Lab IP, ends 10:20 PM';
      }
    }



  }, 1000);

};

/* eslint-disable */
function update(){

  //console.log('here');

    /*add window timeout*/
  socket = io.connect('http://cses.ucsd.edu');
  socket.emit('askForData');
}
/* eslint-enable */