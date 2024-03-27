import "./modal.css";
import { data_trabajadores } from "../../data/data_trabajadores";

const Modal = ({ selectedWorker, onSelectWorker, onClose, onAccept }) => {
  const handleWorkerChange = (event) => {
    onSelectWorker(event.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          <label htmlFor="workerSelect">Seleccionar Trabajador:</label>
          <select
            id="workerSelect"
            value={selectedWorker}
            onChange={handleWorkerChange}
          >
            <option value="">Seleccionar trabajador...</option>
            {data_trabajadores.map((worker, index) => (
              <option key={index} value={worker.Nombre}>
                {worker.Nombre}
              </option>
            ))}
          </select>
          <div className="modal-buttons">
            <button className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button className="accept-button" onClick={onAccept}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
