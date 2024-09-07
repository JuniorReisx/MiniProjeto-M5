import './Page.module.css'
import Header from '../components/Header/Header.jsx'
import PatientForm from '../components/Forms/Patient/Patient.jsx'
import DoctorForm from '../components/Forms/Doctor/Doctor.jsx'

function Page() {


  return (
    <>
    <Header/>
    <main>
      <section>
        <section className='section_patient'>
        <PatientForm/>

        </section>
        
        <section className='section_doctor'>
        <DoctorForm/>
        </section>

      </section>
 
    </main>

    </>
  )
}

export default Page
