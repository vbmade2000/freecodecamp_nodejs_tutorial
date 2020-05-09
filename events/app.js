const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1)=>{
    console.log("Tutorial event has occured and " + num1 + " is received with it");
})

// eventEmitter.emit("tutorial", 1)

class Person extends EventEmitter {

    constructor(name){
        super();
        console.log("Person class instantiated");
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let p = new Person("Malhar");
console.log(p.name);
p.emit("tutorial", 1);