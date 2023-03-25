import Platillo from "../model/Platillo.js"
import mongoose from "mongoose"

export const getPlatillo = async (req, res) => {
    try {
        const platillos = await Platillo.find().populate("restaurante") 
    
        res.status(201).send({
            platillos
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

export const crearPlatillo = async (req, res) => {
    try {
        const { nombre, descripcion, imagenUrl, restaurante } = req.body // info de form
        console.log(restaurante)

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

export const updatePlatillo = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre } = req.body

        const platillo = await Platillo.findOne({ _id: new mongoose.Types.ObjectId(id) }) 
        
        platillo.nombre = nombre

        await platillo.save()

        res.status(200).send({
            message: "Platillo actualizado"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 
}