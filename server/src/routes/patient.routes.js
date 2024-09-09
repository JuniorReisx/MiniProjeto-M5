import { Router } from "express"
import { getPatient } from "../controllers/patient/getPatient.js"
import { createPatient } from "../controllers/patient/createPatient.js"
const patientRouter = Router()

patientRouter.get("/patient/all", getPatient)
patientRouter.post("/patient", createPatient)



export { patientRouter }