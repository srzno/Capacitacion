import  express  from "express";
import	{ getRestaurante, crearRestaurante, updateRestaurante } from "../controller/restauranteController.js"
const router = express.Router()

router.get("/restaurante", getRestaurante)
router.post("/restaurante", crearRestaurante)
router.put("/restaurante/:id", updateRestaurante)

export default router