const { EventEmitter } = require("events");
let mi_variable = new EventEmitter()
/*
mi_variable.on("click",(a)=>{
    setImmediate(()=> console.log("Me hicieron click"))//setInmmediate hace que se ejecute siempre al final 
    //process.nextTick(()=> console.log("Me hicieron click 2"))// lo mismo pero al principio
})

mi_variable.emit("click",1)
*/

let buffer = new Buffer("hola")
console.log(buffer)
