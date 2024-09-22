import { Patient } from "../../models/patient.model.js";

const getPatientByCPF = async (req, res) => {
  const { cpf } = req.params;

  try {
    const patient = await Patient.findOne({
      where: {
        cpf: cpf,
      },
    });

    return res.status(200).json(patient);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getPatientByCPF };
