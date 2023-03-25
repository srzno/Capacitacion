import  express  from "express";
import	{ getRestaurante, crearRestaurante, updateRestaurante, deleteRestaurante } from "../controller/restauranteController.js"
const router = express.Router()

router.get("/restaurante", getRestaurante)
router.post("/restaurante", crearRestaurante)
router.put("/restaurante/:id", updateRestaurante)
router.delete("/restaurante/:id", deleteRestaurante)

export default router