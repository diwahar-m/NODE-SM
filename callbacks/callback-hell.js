const fs = require('fs'); 

fs.readFile('input.txt', 'utf8', (err, data)=> {
    if(err){
        console.log('err', err)
        return;
    }

    const modifiedData = data.toUpperCase(); 
    fs.writeFile('output.txt', modifiedData, (err)=>{
        if(err){
            console.log('Error writing file', err);
            return;
        }
        console.log('data written'); 
        fs.readFile('output.txt', 'utf8', (err, data)=> {
            if(err){
                console.log('err', err)
                 return;
            }
            console.log(data)
        })

    })
})