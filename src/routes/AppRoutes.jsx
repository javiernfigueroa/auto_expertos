import { Routes, Route } from "react-router";
import Traslados from "../components/traslados/Traslados";
import Choferes from "../components/choferes/Choferes";
import Calendario from "../components/calendario/Calendario";
import CerrarSesion from "../components/cerrar_sesion/CerrarSesion";
import Tabla from "../components/tablai/Tablai";
import Tablaii from "../components/tablaii/Tablaii";
import "./appRoutes.css";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/traslados" element={<Traslados />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/choferes" element={<Choferes />} />
      <Route path="/cerrarsesion" element={<CerrarSesion />} />
      <Route
        path="/tablasConCss"
        element={
          <div className="container-tables">
            <Tablaii
              titulos={["OT", "Fecha", "Hora", "Tipo", "Estado", "Asignado"]}
            />
            <Tabla
              titulos={["OT", "Fecha", "Hora", "Tipo", "Estado", "Asignado"]}
            />
            <br />
          </div>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
