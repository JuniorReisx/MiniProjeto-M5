import axios from "axios";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import background from "../../assets/background.jpg";
import "../../index.css";
import "./CardPersonagens.css";

export function CardPersonagens() {
  const [listPatient, setListPatient] = useState([]);

  const fetchPatients = () => {
    axios
      .get("http://localhost:4000/patient/all")
      .then((response) => {
        setListPatient(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <>
      <main>
        <button className="updateButton" onClick={fetchPatients}>
          Update Patients
        </button>
        <div className="cards-container">
          {listPatient.map((patient) => (
            <div key={patient.codePatient} className="card">
              <div className="card__img">
                <img src={background} alt="" className="card_imgProfile" />
              </div>
              <div className="card__avatar">
                <FaUser size={80} />
              </div>
              <div className="card__title">{patient.name}</div>
              <div className="card__subtitle">{patient.cpf}</div>
              <div className="card__subtitle">{patient.gender}</div>
              <div className="card__subtitle">
                <strong>Patient</strong>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
