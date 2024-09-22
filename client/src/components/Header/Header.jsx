import "./Header.css";
import "../../index.css";
import { FaUserDoctor } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <header>
        <h1>Hospital System</h1>
        <nav>
          <FaUserDoctor size={25} style={{ cursor: "pointer" }} />
        </nav>
      </header>
    </>
  );
}
