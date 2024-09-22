import "./Page.module.css";
import Header from "../components/Header/Header.jsx";
import PatientForm from "../components/Forms/Patient/Patient.jsx";
import { CardPersonagens } from "../components/CardPersonagens/CardPersonagens.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GenderSearch from "../components/InputPatient/InputGenderPatient/InputGenderPatient.jsx";
import CPFSearch from "../components/InputPatient/InputCPFPatient/InputCPFPatient.jsx";

function Page() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <PatientForm />
        </section>
        <section>
          <CardPersonagens />
        </section>
      </main>
      <section>
        <CPFSearch />
      </section>
      <section>
        <GenderSearch />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Page;
