var http = require('http')
/*
var server = http.createServer((request,response)=>{
console.log(`tu servidor esta listo ${this.address().port}`)
})
*/
var server = http.createServer((request,response)=>{
    respuesta.end("hola")
    })

    server.listen(3000,()=>{
        console.log(`tu servidor esta listo en ${this.address().port}`)
    })