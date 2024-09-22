import axios from "axios";
import { useState } from "react";
import { Button } from "../../Button/Button.jsx";

export default function GenderSearch() {
  const [searchGender, setSearchGender] = useState("");
  const [patients, setPatients] = useState([]);

  const searchPatientsByGender = async (e) => {
    e.preventDefault();
    if (!searchGender) {
      setPatients([]);
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:4000/patient/all/gender/${searchGender}`
      );
      console.log(data);
      setPatients(data);
    } catch (error) {
      console.error("Error patients:", error);
      setPatients();
    }
  };

  return (
    <div>
      <form onSubmit={searchPatientsByGender}>
        <input
          type="text"
          onChange={(e) => setSearchGender(e.target.value)}
          value={searchGender}
          placeholder="Search by Gender"
        />
        <Button title={"Search"} />
      </form>
      <div className="cards-container">
        {patients.map((patient) => (
          <div key={patient.codePatient} className="card">
            <div className="card__title">{patient.name}</div>
            <div className="card__subtitle">Patient</div>
            <div className="card__info">
              <strong>Age: </strong> {patient.age}
            </div>
            <div className="card__info">
              <strong>Gender: </strong> {patient.gender}
            </div>
            <div className="card__info">
              <strong>Phone Number:</strong> {patient.phoneNumber}
            </div>
            <div className="card__info">
              <strong>CPF: </strong> {patient.cpf}
            </div>
            <div className="card__info">
              <strong>Address: </strong>
              {patient.address}
            </div>
            <div className="card__info">
              <strong>Emergency Contact:</strong> {patient.emergencyContact}
            </div>
            <div className="card__info">
              <strong>Sickness: </strong> {patient.sickness}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
