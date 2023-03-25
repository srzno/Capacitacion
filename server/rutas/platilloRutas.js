import  express  from "express";
import	{ getPlatillo, crearPlatillo } from "../controller/platilloController.js"
const router = express.Router()

router.get("/platillo", getPlatillo)
router.post("/platillo", crearPlatillo)

export default router