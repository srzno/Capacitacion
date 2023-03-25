import  express  from "express";
import	{ getRestaurante, crearRestaurante } from "../controller/restauranteController.js"
const router = express.Router()

router.get("/restaurante", getRestaurante)
router.post("/restaurante", crearRestaurante)

export default router