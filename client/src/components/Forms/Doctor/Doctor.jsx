import './Doctor.module.css';

export default function DoctorForm(){
  return (
    <>
       <div>
       <form id="form">
            <input type="text" id="name" placeholder="Name" />
            <input type="number" id="age" placeholder="Age" />
            <input type="text" id="gender" placeholder="Gender" />
            <input type="text" id="phoneNumber" placeholder="Phone Number" />
            <input type="text" id="cpf" placeholder="CPF" />
            <input type="text" id="specialty" placeholder="Specialty" />
            <button type="submit">Submit</button>
          </form>
        </div>
    </>
  );
};


