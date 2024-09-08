const express = require("express")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))

//server.use(express.static("assets"))



// Config Caminhos da pg inicial ROTA
//req requisição
//res resposta

server.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point",(req,res)=>{
    res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/search-results",(req,res)=>{
    res.sendFile(__dirname + "/views/search-results.html")
})


//ligar o servidor  Cannot GET /
server.listen(3000)


