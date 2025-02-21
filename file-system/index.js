const path = require("path");
const fs = require("fs")

const dataFolder = path.join(__dirname, "data"); 

// if(!fs.existsSync()){
//     fs.mkdirSync(dataFolder);
//     console.log('kk');   
// }

const filePath = path.join(dataFolder, "example.txt"); 

fs.writeFileSync(filePath, "Hello fromnode")


const readContentFromFile = fs.readFileSync(filePath, "utf8"); 
console.log('File ', readContentFromFile) 

fs.appendFileSync(filePath, "\nThis is new line") 

const asyncFilePath = path.join(dataFolder, 'async-example.txt'); 
fs.writeFile(asyncFilePath, 'Hello', (err)=> {
    if(err) throw err;
})
fs.readFile(asyncFilePath, 'utf8', (err)=> {
    if(err) throw err;
})