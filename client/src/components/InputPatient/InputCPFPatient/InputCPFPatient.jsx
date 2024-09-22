import axios from "axios";
import { useState } from "react";
import { Button } from "../../Button/Button.jsx";

export default function CPFSearch() {
  const [searchCPF, setSearchCPF] = useState("");
  const [patients, setPatients] = useState([]);

  const searchPatientsByCPF = async (e) => {
    e.preventDefault();
    if (!searchCPF) {
      setPatients([]);
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:4000/patient/getPatientByCPF/${searchCPF}`
      );
      console.log(data);
      setPatients([].concat(data));
    } catch (error) {
      console.error("Error fetching patients:", error);
      setPatients([]);
    }
  };

  return (
    <div>
      <form onSubmit={searchPatientsByCPF}>
        <input
          type="text"
          onChange={(e) => setSearchCPF(e.target.value)}
          value={searchCPF}
          placeholder="Search by CPF"
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
