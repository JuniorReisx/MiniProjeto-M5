import { Patient } from '../../models/patient.model.js'


const deletePatient = async (req, res) => {

  try {
    const { codePatient } = req.params;

    const response = await Patient.destroy({
      where: {
        codePatient: codePatient
      }
    });

    return res.status(200).send("Successfully deleted", response);

  } catch (error) {
    return res.status(404).send(error);
  }

};

export { deletePatient }