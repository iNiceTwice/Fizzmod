const http = require("http")
const Url = require("url")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    //Morgan = Es un logger 
    let {httpVersion,method,url} = req
    console.log(`HTTP ${httpVersion} - ${method} - ${url}`)
    //Express = es un framework para crear servidores en node 
    //Body-Parser = parsea la data entrante desde el cliente
    //Multer
    let parsed_url = Url.parse(url,true)
    let {nombre} = parsed_url.query
    console.log(nombre)

    let buffer = []
    let buffer_end

    req.on("data",chunk=>{
        buffer.push(chunk)
        //buffer = [...buffer,chunk]
    })

    req.on("end",()=>{
        buffer_end = Buffer.concat(buffer)
        buffer = []
        console.log(buffer_end.toString())
    })

    let archivo = fs.createReadStream(__dirname+"/index.html")
    res.writeHead(200,{"content-type":"text/html"})
    archivo.pipe(res)

})

server.listen(8000,()=>{
    console.log("Servidor Encendido")
})

/**
 * 
 * fetch +  header + body+stringify : OK
 * fetch + body : [object Object]
 * fetch + body+stringify : pseudo OK - Necesitas siempre decirle al servidor que tipo de info le vas a mandar 
 * 
 * 
 * 
 * Tablas 
 *      
 *  usuarios
 *      id
 *      created_at
 *      updated_at
 *      nombre
 *      usuario
 *      
 *  mensajes
 *      id
 *      created_at
 *      updated_at
 *      status
 *      mensaje
 *      
 * 
 * Microservicios : 
 * 
 *  Websocket
 *  HTTP
 * 
 * 
 * Front :
 *  -registro.html
 *  -index.html
 *  
 * 
 * XAMPP : apachefriends.org
 * 
 * 
 * 
 * TIPOS DE DATOS DE MYSQL
 * 
 * CADENAS
 *      CHAR : No se usa porque no optimza el espacio en disco y reserva memoria innecesariamente
 *      VARCHAR : Es el que usamos para guardar strings
 *      TEXT : Strings mas largos
 *           
 * 
 * NUMEROS
 *      tinyint = 2^8 = 256 - 1 = 255 
 *      smallint = 2^16
 *      mediumint = 2^24
 *      int = 2^32  aprox 17 1/2M
 *      bigint = 2^64 
 *      float
 *      double
 *      decimal
 *      bool
 * 
 * ESPECIALES
 *      DATE : YYYY-MM-DD
 *      TIME : HH:MM:SS
 *      DATETIME : YYYY-MM-DD HH:MM:SS
 *      TIMESTAMP
 *      
 * 
 * 
 * NOT NULL - AUTO_INCREMENT - DEFAULT = <valor> - UNSIGNED - ZERO FILL 
 * 
 */