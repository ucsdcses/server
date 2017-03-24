var fs = require('fs');

var data = fs.readFileSync("./lognew.txt", "utf8");
exports.date = data.substring(0,28);

var labsArray = [];

labsArray.push("L" + data.substring(29,71));
labsArray.push("L" + data.substring(72,114));
labsArray.push("L" + data.substring(115,157));
labsArray.push("L" + data.substring(158,200));
labsArray.push("L" + data.substring(201,249));

exports.labs = labsArray;

var day = data.substring(0,3);

if(day == 'Mon'){
    day = 0;
} else if(day == 'Tue'){
    day = 1;
} else if(day == 'Wed'){
    day = 2;
} else if(day == 'Thu'){
    day = 3;
} else if(day == 'Fri'){
    day = 4;
} else if(day == 'Sat'){
    day = 5;
} else if(day == 'Sun'){
    day = 6;
}

var rawString = day + " " + data.substring(11,13)+" "+
data.substring(14,16)+"|"+
data.substring(72,114)+data.substring(115,157);

console.log(rawString);

/*read in raw data file*/
var rawData = fs.readFileSync("./rawData.txt", "utf8");
var dataArray = rawData.split('\n');

/*write raw data file (only last two weeks)*/
dataArray.push(rawString);
/*remove first line*/
dataArray = dataArray.slice(1,dataArray.length);

var newDataArray = dataArray.join('\n');
fs.writeFile("./rawData.txt", newDataArray);

