const http = require("http")
const fs = require("fs")
const servidor = http.createServer((req,res)=>{
    //Es indispensable que una conexion http termine la  escritura del socket con Socket.end
    //res.write("Hola")
    //res.write(" Mundo")
    
    //Content-Type: determina que tipo de recurso esta impactando
    //en el cliente
    /* 
        Cliente>Servidor
            multipart/formdata
            aplication/x-www-url-encoded

        Servidor>Cliente
            text/html
            text/plain
            text/css
            aplication/json
            aplication/javascript
            image/jpeg
            image/gif
            image/png
            video/mp4
            video/webm
            audio/mp3
            audio/ogg
    
    etc 
    */
    //Por defecto el codigo de status http en Node siempre es 200
    //hassta que le digamos lo contrario
    //res.statusCode = 200 
    //res.setHeader("content-type","text/html")
    //res.writeHead(404,"Mal ahi capo",{"content-type":"text/html"})
    //res.end("<h1>Hola Mundo! ;)</h1>")
   /* fs.readFile(`${__dirname}/index.html`,(err,data)=>{
        if(err){
            console.error(err)
            res.writeHead(500,"Internal Server Error")
            res.end(err.message)
        }else{
            res.writeHead(200,{"content-type":"text/html"})
            res.end(data)//index.html            
        }
    })*/
    fs.readFile(`${__dirname}/video.mp4`,(err,data)=>{
        if(err){
            console.error(err)
            res.writeHead(500,"Internal Server Error")
            res.end(err.message)
        }else{
            res.writeHead(200,{"content-type":"video/mp4"})
            res.end(data)//index.html            
        }
    })
})

servidor.listen(8000)
/*

*/