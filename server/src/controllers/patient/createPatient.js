import { Patient } from "../../models/patient.model.js";
import { codePatient } from "../../utils/codePatient.js";

const createPatient = async (req, res) => {
  try {
    await Patient.sync();
    const {
      name,
      age,
      gender,
      phoneNumber,
      cpf,
      address,
      emergencyContact,
      sickness,
    } = req.body;

    let patientCode = await codePatient();

    const newPatient = await Patient.create({
      codePatient: patientCode,
      name: name,
      age: age,
      gender: gender,
      phoneNumber: phoneNumber,
      cpf: cpf,
      address: address,
      emergencyContact: emergencyContact,
      sickness: sickness,
    });
    return res.status(201).json(newPatient);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { createPatient };
