const express = require("express")
const path = require("path")
const socket = require("socket.io")
//const http = require("http")
const mysql = require("mysql")
const connection = mysql.createConnection({
    host : "localhost:3306",
    user: "root",//root por default si se usa esta sacar el pass
    //password: "",
    database:"test",
})
// Server config
const app = express()
app.set("port", process.env.PORT || 3000)
const server = app.listen(app.get("port"))
//Views
app.use(express.static(path.join(__dirname,"../public")))
//WebSockets
const io = socket(server)
io.on("connection",(socket)=>{
    console.log("nueva conexion")
})
