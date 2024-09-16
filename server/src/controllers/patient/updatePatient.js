import { Patient } from '../../models/patient.model.js'


const updatePatient = async (req, res) => {
    try {
      const { codePatient } = req.params;
  
      const {
        name,
        age,
        gender,
        phoneNumber,
        cpf,
        address,
        emergencyContact,
        sickness
      } = req.body;
  
      const updatedPatient = await Patient.update(
        {
          name,
          age,
          gender,
          phoneNumber,
          cpf,
          address,
          emergencyContact,
          sickness
        },
        {
          where: { codePatient }
        }
      )

      return res.status(200).json(updatedPatient)
  
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
  
export { updatePatient }