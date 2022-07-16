const path= require('path')
const controlador= {}

controlador.nombre= 'lalin'

controlador.index=(req,res)=>{
    res.sendFile((path.join(__dirname,'./index.html')))
}

module.exports= controlador