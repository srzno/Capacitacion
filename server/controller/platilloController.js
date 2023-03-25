import Platillo from "../model/Platillo.js"
import mongoose from "mongoose"

export const getPlatillo = (req, res) => {
    res.send("<h1>platillos</h1>")
}

export const crearPlatillo = async (req, res) => {
    try {
        const { nombre, descripcion, imagenUrl, restaurante } = req.body // info de form
        const platillo = new Platillo({
            nombre, 
            descripcion, 
            imagenUrl, 
            restaurante: new mongoose.Types.ObjectId(restaurante)
        })
    
        await platillo.save()

        res.status(201).send({
            message: "Se creo exitosamente"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 

}