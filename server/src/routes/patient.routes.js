import { Router } from "express"
import { getPatient } from "../controllers/patient/getPatient.js"
const patientRouter = Router()

patientRouter.get("/patient/all", getPatient)


export { patientRouter }