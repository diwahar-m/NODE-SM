const EventEmit = require('events'); 

class MyEventEmitter extends EventEmit{
    constructor(){
        super(); 
        this.greeting = "Hllo"
    }
    greet(name){
        this.emit('greeting', `${this.greeting} ${name}`)
    }
}

const myCustomEmitter = new MyEventEmitter(); 
myCustomEmitter.on('greeting', (input)=> {
    console.log("ll",input)
})
myCustomEmitter.greet("BAlu")

