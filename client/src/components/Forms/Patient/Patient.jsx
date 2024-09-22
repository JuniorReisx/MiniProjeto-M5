import axios from "axios";
import "../../../index.css";
import { useState } from "react";
import { Button } from "../../Button/Button.jsx";
import "./Patient.css";

export default function PatientForm() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sickness, setSickness] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  async function registerUser(e) {
    setUsername("");
    setAge("");
    setGender("");
    setPhoneNumber("");
    setCpf("");
    setAddress("");
    setEmergencyContact("");
    setSickness("");
    
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/patient", {
        name: username,
        age: age,
        gender: gender,
        phoneNumber: phoneNumber,
        sickness: sickness,
        cpf: cpf,
        address: address,
        emergencyContact: emergencyContact,
      });
      console.log(data);

    
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <div>
      <form id="form" onSubmit={registerUser}>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          id="name"
          placeholder="Name"
        />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          id="age"
          placeholder="Age"
        />
        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          id="gender"
          placeholder="Gender"
        />
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
          id="phoneNumber"
          placeholder="Phone Number"
        />
        <input
          type="text"
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
          id="cpf"
          placeholder="CPF"
        />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          id="address"
          placeholder="Address"
        />
        <input
          type="text"
          onChange={(e) => setEmergencyContact(e.target.value)}
          value={emergencyContact}
          id="emergencyContact"
          placeholder="Emergency Contact"
        />
        <input
          type="text"
          onChange={(e) => setSickness(e.target.value)}
          value={sickness}
          id="sickness"
          placeholder="Sickness"
        />
        <Button title={"Submit"} />
      </form>
    </div>
  );
}
