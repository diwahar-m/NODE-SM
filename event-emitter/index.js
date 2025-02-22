const myFirstEmitter = new EventEmitter("events"); 

myFirstEmitter.on('greet', (name)=> {
    console.log(`Hello ${name}`);   
})

myFirstEmitter.emit('greet', 'Rahul')