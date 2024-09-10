import { Router } from "express"
import { getPatient } from "../controllers/patient/getPatient.js"
import { createPatient } from "../controllers/patient/createPatient.js"
import { deletePatient } from "../controllers/patient/deletePatient.js"
import { updatePatient } from "../controllers/patient/updatePatient.js"
const patientRouter = Router()

patientRouter.get("/patient/all", getPatient)
patientRouter.post("/patient", createPatient)
patientRouter.delete("/patient/delete/:codePatient", deletePatient)
patientRouter.put("/patient/update/:codePatient", updatePatient)




export { patientRouter }