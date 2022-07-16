const express= require('express')
const app= express()
const path= require('path')


const puerto= 3000

app.use(require(path.join(__dirname,'./index.ruta')))


app.listen(puerto,()=>{
    console.log('servidor a la escucha de peticiones')
})