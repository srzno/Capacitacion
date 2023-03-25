import  express  from "express";
import	{ getPlatillo } from "../controller/platilloController.js"
const router = express.Router()

router.get("/platillo", getPlatillo)

export default router