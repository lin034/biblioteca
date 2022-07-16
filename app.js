const express= require('express')
const app= express()


const puerto= 3000

app.get('/',(req,res)=>{
    res.send('ola lin')
})




app.listen(puerto,()=>{
    console.log('servidor a la escucha de peticiones')
})