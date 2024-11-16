const fs = require('fs');
//create new file
/**fs.writeFile('message.txt', 'Hello from NODE JS', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });**/

//read/cosole log file. Use 'utf8' to decode. 
fs.readFile("./message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  })
