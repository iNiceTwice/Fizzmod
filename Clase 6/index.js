const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Bienvenido!")
})
app.get("/contacto", (req,res)=>{
    res.send("Contacto : 555-111")
})
app.listen(3000)