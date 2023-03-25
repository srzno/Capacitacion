import Restaurante from "../model/Restaurante.js"

export const getRestaurante = (req, res) => {
    res.send("<h1>restaurantes</h1>")
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