/*





+ Identificar el evento de desconexion del socket y enviar
un mensaje a todos los sockets notificando desconexion
+ Eliminar el socket del array de sockets a notificar de lo
contrario nos dara error en los proximos mensajes
+ Crear una funcion broadcast que envie el mensaje recibido
por el evento data a todos los sockets menos al que lo envia
*/

const net = require("net")
//+ Volver a iniciar un servidor TCP
let sockets = []
const servidor = net.createServer(socket=>{
//+ Identificar propiedades para capturar la direccion ip y el
//puerto del socket
let {localAdress,localPort,remoteAddress,remotePort}=socket
//+ Establecer un nombre aleatorio para cada socket conectado
//al servidor
socket.id = `Socket-${Math.floor(Math.random()*1000)}` 
//+ Guardar cada socket en un array de sockets
sockets.push(socket)
//+ Mostrar un mensaje para todos los sockets cada vez que
//alguien se conecte
if(sockets.length)
    sockets.forEach(s=>{
        s.write("Se ha conectado alguien")
    })
    let bufferArray = []
    socket.on("data",data =>{
        buffer.push(data)
        if(data == "data"){
            bufferArray = Buffer.concat(bufferArray)
            //Acuerdense de usar la linea 35 en otra variable o restaurar el valor original de la variable buffer en array vacio, de lo contrario, el proximo ingreso de la data falla ya que la variable no es mas un array sino buffer
            
        }
    })
})
servidor.listen(8000)