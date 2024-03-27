import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <img
        src="https://assets-global.website-files.com/618c320466a1e45517562327/61eb0ee239f6962d439c4c2c_Recurso%207.webp"
        alt="logo"
      />
      <ul>
        <Link className="Translados" to="/traslados">
          {" "}
          <AiOutlineStock />
          <li>Traslados</li>
        </Link>
        <Link className="Calendar" to="/calendario">
          {" "}
          <CiCalendar />
          <li>Calendario</li>
        </Link>
        <Link className="Choferes" to="/choferes">
          {" "}
          <IoPersonSharp />
          <li>Choferes</li>
        </Link>
        <Link className="CerrarSesion" to="/cerrarsesion">
          {" "}
          <IoIosLogIn />
          <li>Cerrar Sesion</li>
        </Link>
        <Link className="Diseño" to="/tablasConCss">
          {" "}
          <IoIosLogIn />
          <li>Tablas</li>
        </Link>
      </ul>
    </>
  );
};

export default Sidebar;
