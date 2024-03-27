import React, { useState } from "react";
import "./tabla.css";
import Modal from "../modal/Modal";
import Button from "../ui/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { data } from "../../data/data";

function Tablaii({ titulos }) {
  const [paginaActual, setPaginaActual] = useState(1);
  const [filasPorPagina, setFilasPorPagina] = useState(6);
  const [selectedOT, setSelectedOT] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState("");

  const indiceInicio = (paginaActual - 1) * filasPorPagina;
  const indiceFinal = paginaActual * filasPorPagina;

  const datosFiltrados = data.filter((fila) => fila.Asignado === "Sin Asignar");

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

  const handleAsignarClick = (ot) => {
    setSelectedOT(ot);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleWorkerSelect = (worker) => {
    setSelectedWorker(worker);
  };

  const handleAccept = () => {
    const newData = data.map((item) =>
      item.OT === selectedOT ? { ...item, Asignado: selectedWorker } : item
    );
    // Aquí puedes realizar la lógica para guardar newData en tu base de datos o estado global
    console.log(newData);
    setShowModal(false);
  };

  return (
    <section>
      <div className="table-container">
        <h1>
          Traslados sin asignar <span>({datosFiltrados.length})</span>
        </h1>
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
                  <Button
                    name="Asignar"
                    onClick={() => handleAsignarClick(fila.OT)}
                  />
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
            {Math.min(datosFiltrados.length, paginaActual * filasPorPagina)} de{" "}
            {datosFiltrados.length}
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
      {showModal && (
        <Modal
          selectedWorker={selectedWorker}
          onSelectWorker={handleWorkerSelect}
          onClose={handleModalClose}
          onAccept={handleAccept}
        />
      )}
    </section>
  );
}

export default Tablaii;
