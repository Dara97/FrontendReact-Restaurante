import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

export const MyModal = ({ nombre, imagen_producto, descripcion }) => {
  const { showModal, onCloseModal, modalInfo } = useContext(AppContext);

  let history = useHistory();

  const onGetContact = () => {
    onCloseModal();
    return history.push("/");
  };

  return (
    <Modal show={showModal} onHide={onCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalInfo.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={modalInfo.imagen_producto}
          alt={modalInfo.nombre}
          id="image"
        />
        <p>
            {modalInfo.descripcion}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onGetContact}
        >
          Contáctanos
        </button>
      </Modal.Footer>
    </Modal>
  );
};