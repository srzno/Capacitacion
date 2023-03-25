import mongoose, { Schema } from "mongoose";


const PlatilloSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        descripcion: {
            type: String,
        },
        imagenUrl: {
            type: String,
        },
        restaurante: {
            type: Schema.Types.ObjectId, ref: "Restaurantes"
        }
    }
)

const Platillo = mongoose.model("Platillos", PlatilloSchema)
export default Platillo