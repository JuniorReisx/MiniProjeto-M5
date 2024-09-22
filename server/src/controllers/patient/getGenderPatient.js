import { Patient } from "../../models/patient.model.js";

const getGenderPatient = async (req, res) => {
  const { gender } = req.params;

  try {
    const patients = await Patient.findAll({
      where: {
        gender: gender,
      },
    });

    return res.status(200).json(patients);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getGenderPatient };
