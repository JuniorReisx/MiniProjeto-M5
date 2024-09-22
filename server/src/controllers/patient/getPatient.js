import { Patient } from "../../models/patient.model.js";

const getPatient = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getPatient };
