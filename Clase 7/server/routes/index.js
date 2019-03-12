const express = require("express")
const path = require("path")
const router = express.Router()

module.exports = function(){
    router.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname+"/index.html"))
    })
    router.get("/Nosotros",(req,res)=>{
        res.send("Nosotros")
    })
    router.get("/Contacto",(req,res)=>{
        res.send("Contacto: 555-293")
    })

    return router
}