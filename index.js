const fs = require('fs');
// fs.appendFileSync('qaiser.txt','  jameel added some content');
// fs.writeFile('myfile.txt','hello',()=>
// console.log('its created'));

// delete the file

// fs.unlink('myfile.txt',()=>
// console.log("yes! its deleted"))

//create one folder and one file as well

// fs.writeFileSync("Async.js", "yes its created");
fs.renameSync("Async.js","async.js")
