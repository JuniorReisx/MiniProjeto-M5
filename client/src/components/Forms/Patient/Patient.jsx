import './Patient.module.css';

export default function PatientForm(){
  return (
    <>
       <div>
       <form id="form">
            <input type="text" id="name" placeholder="Name" />
            <input type="number" id="age" placeholder="Age" />
            <input type="text" id="gender" placeholder="Gender" />
            <input type="text" id="phoneNumber" placeholder="Phone Number" />
            <input type="text" id="sickness" placeholder="Sickness" />
            <button type="submit">Submit</button>
          </form>
       </div>
    </>
  );
};


