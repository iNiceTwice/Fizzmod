const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res=>{
    let archivo = fs.createReadStream(`${__dirname}/video.mp4`)
    res.writeHead(200,{"content-type":"video/mp4"})//obligatorio
}))

server.listen(9000)