//cursosmegaup.bid
//FileSystem
const fs = require("fs");
/*fs.readFileSync(__filename)

fs.readFile(__filename,(err,data)=>{
    console.log(data.toString())
})*/
//inicia un stream en modo pausado(paused)
//los stream pueden estar en dos modos: paused(por defecto) o flowing 
let archivo = fs.createReadStream(__dirname+"/index.html") //va iniciar todo un stream en el archivo que yo le diga
let nuevo = fs.createWriteStream(+"/texto.txt")
//el evento data es un readable se dispara cuando
//nos llega un chunk a traves del stream en forma de buffer
//Todos los streams de tipo readeable tienen el evento "data"
archivo.on("data",chunk=>{
    console.log(`Nuevo Chunk:${chunk}`)
    //TODOS los streams de tipo writable implementn el metodo
    //write para escribir por stream
})
//TODOS los streams de tipo redeable implementan el evento de
//tipo "end" y se dispara cuando ya no hay mas info para leer
archivo.on("end",()=>{
    
})

//Pipes

archivo.pipe(nuevo)