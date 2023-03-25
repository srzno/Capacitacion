import Restaurante from "../model/Restaurante.js"
import mongoose from "mongoose"

export const getRestaurante = async (req, res) => {
    try {
        const restaurantes = await Restaurante.find() 
    
        res.status(201).send({
            restaurantes
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 
}


export const crearRestaurante = async (req, res) => {
    try {
        const { nombre } = req.body
        const restaurante = new Restaurante({
            nombre
        })
    
        await restaurante.save()

        res.status(201).send({
            message: "Se creo exitosamente"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 

}

export const updateRestaurante = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre } = req.body

        const restaurante = await Restaurante.findOne({ _id: new mongoose.Types.ObjectId(id) }) 
        
        restaurante.nombre = nombre

        await restaurante.save()

        res.status(200).send({
            message: "Nombre del restaurante actualizado"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 
}

export const deleteRestaurante = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre } = req.body

        await Restaurante.deleteOne({ _id: new mongoose.Types.ObjectId(id) }) 

        res.status(200).send({
            message: "Se borro el restaurante exitosamente"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } 
}