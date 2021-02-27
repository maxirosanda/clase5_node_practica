var http = require('http')
/*
var server = http.createServer((request,response)=>{
console.log(`tu servidor esta listo ${this.address().port}`)
})
*/
var server = http.createServer((request,response)=>{
    response.end("hola")
    })

   const PORT = process.env.PORT || 3000
   server.listen(PORT,function(){
        console.log(`tu servidor esta listo en`)
    })