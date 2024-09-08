import express from "express"
import { patientRouter } from "./src/routes/patient.routes.js"
import { tryConnectSequelize } from "./src/database/db.js"
// import { doctorRouter } from "./routes/doctor.routes.js"
const server = express()
const port = process.env.PORT || 4000



server.use(express.json())
server.use(patientRouter)
// server.use(doctorRouter)

server.listen(port, () => {
	tryConnectSequelize()
	console.log(`Servidor rodando na porta http://localhost:${port}`)
  })