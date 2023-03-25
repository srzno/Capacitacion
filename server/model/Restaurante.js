import mongoose from "mongoose";

const RestauranteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
        }
    }
)

const Restaurante = mongoose.model("Restaurantes", RestauranteSchema)
export default Restaurante