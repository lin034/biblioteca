const express= require('express')
const controlador = require('./index.controlador')
const rutas= express.Router()

rutas.get('/',controlador.index)



module.exports= rutas