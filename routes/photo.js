const express = require('express')
const Photo = require('../models/photos')
const {create_photo, query_photo, queryall_photos, delete_photo, update_photo} = require('../servicios/photo.service.js')
const route_photo = express.Router()

//Ruta para Insertar Foto
route_photo.post('/createphoto', async (req, res) => {
    const photo_respuesta = await create_photo(req.body)
    res.json(photo_respuesta)
} )

//Ruta para consultar una foto por nombre de la foto
route_photo.get('/queryphoto', async (req, res) => {
    const photo_respuesta2 = await query_photo(req.query)
    res.json(photo_respuesta2)
} )

//Ruta para consultar todas las fotos del usuario (id unico)
route_photo.get('/queryallphotos', async (req, res) => {
    const photo_respuesta3 = await queryall_photos(req.query)
    res.json(photo_respuesta3)
} )

//Rutar para borrar una foto especifica
route_photo.delete('/deletephoto', async (req, res) => {
    const photo_respuesta4 = await delete_photo(req.body)
    res.json(photo_respuesta4)
    }

)
// Ruta para actualizar los datos de una foto especifica
route_photo.put('/updatephoto', async (req, res) => {
    const photo_respuesta5 = await update_photo(req.body)
    res.json(photo_respuesta5)
})


module.exports = route_photo //aqui exporto la vairable para quela puedan usar otros archivos

