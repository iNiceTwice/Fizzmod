//modulo NET
//sirve para hacer servidores de conexion TCP (bajo nivel)

const net = require("net")
//en un servidor de TCP recibimios un instania de net.Socket
//el cual implementa la interfaz de Stream Duplex, osea que podemos consumirlo y escribirlo

const servidor = net.createServer(socket=>{
    //en un TCP o HTTP SIEMPRE hay que cerrar la
    //la respuesta del cliente, de lo contrario el mismo
    //queda en TimeOut
    socket.end("Hola Mundo")
})

servidor.listen(8000)