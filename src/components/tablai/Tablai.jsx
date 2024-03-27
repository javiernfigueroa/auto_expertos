import React, { useState } from "react";
import { data } from "../../data/data";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./tabla.css";

function Tabla({ titulos }) {
  const [paginaActual, setPaginaActual] = useState(1);
  const [filasPorPagina, setFilasPorPagina] = useState(6);
  const [filtroOT, setFiltroOT] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("Seleccionar");
  const [filtroAsignado, setFiltroAsignado] = useState("");

  const indiceInicio = (paginaActual - 1) * filasPorPagina;
  const indiceFinal = paginaActual * filasPorPagina;

  let datosFiltrados = data.filter((fila) => {
    return (
      fila.OT.includes(filtroOT) &&
      (filtroEstado === "Seleccionar" || fila.Estado === filtroEstado) &&
      (filtroAsignado === "" || fila.Asignado === filtroAsignado)
    );
  });

  const datosPaginados = datosFiltrados.slice(indiceInicio, indiceFinal);

  const irAPaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const irAPaginaSiguiente = () => {
    const cantidadTotalPaginas = Math.ceil(
      datosFiltrados.length / filasPorPagina
    );
    if (paginaActual < cantidadTotalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const handleFilasPorPaginaChange = (event) => {
    setFilasPorPagina(Number(event.target.value));
    setPaginaActual(1);
  };

  const handleFiltroOTChange = (event) => {
    setFiltroOT(event.target.value);
  };

  const handleFiltroEstadoChange = (event) => {
    setFiltroEstado(event.target.value);
  };

  const handleFiltroAsignadoChange = (event) => {
    setFiltroAsignado(event.target.value);
  };

  return (
    <section>
      <div className="table-container">
        <h1>
          Lista de Traslados <span>({data.length})</span>
        </h1>
        <div className="filtros">
          <div style={{ flexBasis: "50%" }}>
            <input
              placeholder="Filtrar por OT"
              value={filtroOT}
              onChange={handleFiltroOTChange}
            />
          </div>
          <div style={{ flexBasis: "25%" }}>
            <select value={filtroEstado} onChange={handleFiltroEstadoChange}>
              <option value="Seleccionar">Filtrar por Estado</option>
              <option value="Agendado">Agendado</option>
              <option value="En camino a Domicilio">
                En camino a Domicilio
              </option>
              <option value="En camino a taller">En camino a taller</option>
            </select>
          </div>
          <div style={{ flexBasis: "25%" }}>
            <input
              value={filtroAsignado}
              onChange={handleFiltroAsignadoChange}
              placeholder="Filtrar por Trabajador"
            ></input>
          </div>
        </div>
        <table className="mi-tabla">
          <thead>
            <tr>
              {titulos.map((titulo, index) => (
                <th key={index}>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datosPaginados.map((fila, index) => (
              <tr key={index}>
                <td>{fila.OT}</td>
                <td>{fila.Fecha}</td>
                <td>{fila.Hora}</td>
                <td>{fila.Tipo}</td>
                <td>{fila.Estado}</td>
                <td>
                  <select name="|" id="|">
                    <option value="|">{fila.Asignado}</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginacion">
          <div className="filas-por-pagina">
            <div>Filas por página: {filasPorPagina}</div>
            <select
              onChange={handleFilasPorPaginaChange}
              value={filasPorPagina}
            >
              {[...Array(20).keys()].map((value) => (
                <option key={value + 1} value={value + 1}>
                  {value + 1}
                </option>
              ))}
            </select>
          </div>
          <span>
            {paginaActual} a{" "}
            {Math.min(data.length, paginaActual * filasPorPagina)} de{" "}
            {data.length}
          </span>
          <div className="page-button">
            <IoIosArrowBack
              name="Anterior"
              onClick={irAPaginaAnterior}
              className="icon"
            />
            <IoIosArrowForward
              name="Siguiente"
              onClick={irAPaginaSiguiente}
              className="icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabla;
