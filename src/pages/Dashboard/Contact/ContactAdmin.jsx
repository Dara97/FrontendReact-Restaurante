import React, { Component } from "react";
import "./contactAdmin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Delete} from "@material-ui/icons";
import swal from "sweetalert";

class ContactAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      modalInsertar: false,
      contacto: {
        id_contacto: "",
        nombre: "",
        email: "",
        telefono: 0,
        asunto: "",
        mensaje: "",
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/contacto")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarContacto(id) {
    fetch("http://localhost:41399/api/contacto/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchData();
        swal({
          icon: "success",
          title: "¡Eliminación exitosa!",
          text: "Tu contacto ha sido eliminado de la base de datos.",
        });
      });
  }

  editarContacto(dato) {
    fetch("http://localhost:41399/api/contacto/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({ modalActualizar: false });
        this.fetchData();
        swal({
          icon: "success",
          title: "Edición exitosa!",
          text: "Tu contacto ha sido editado de la base de datos.",
        });
      });
  }

  crearContacto(dato) {
    console.log(dato);
    fetch("http://localhost:41399/api/contacto/", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Contacto creado");
        this.setState({ modalInsertar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, contacto: dato });
  }
  cerrarVentana(close) {
    this.setState({
      modalCerrar: close,
      modalActualizar: false,
      modalInsertar: false,
    });
  }
  abrirVentanaInsertar() {
    this.setState({ modalInsertar: true });
  }

  handleChange = (e) => {
    this.setState({
      contacto: {
        ...this.state.contacto,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
      <div className="contenedorContacto">
 {/*  <button
            class="btn btn-dark btn-outline-dark boton-agregar"
            onClick={() => this.abrirVentanaInsertar()}
          >
            Agregar contacto
          </button> */}
        {this.state.datos.map((data) => (
          <div className={data.nombre} id={data.nombre}>
            <div className="featured">
              <div className="featuredItem">
                <div key={data.id_contacto}> </div>
                
                <div>Nombre completo: {data.nombre} </div>
                <div>Correo electronico: {data.email}</div>
                <div> Numero de telefono: {data.telefono}</div>
                <div> Asunto: {data.asunto}</div>
                <div> Mensaje: {data.mensaje}</div>

                <div>
                  <div key={data.id_contacto}>
                    <button
                      className="btn btn-dark btn-outline-dark botonBorrarContacto"
                      onClick={() => this.borrarContacto(data.id_contacto)}
                    >
                      <Delete />
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-dark btn-outline-dark botonEditarContacto"
                      onClick={() => this.abrirVentanaEditar(data)}
                    >
                      <EditIcon/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} </div>

        <Modal
          show={this.state.modalActualizar}
          onHide={this.state.modalCerrar}
        >
          <Modal.Title>Editar contacto</Modal.Title>
          <Modal.Body>
            <label className="labelcontactoadmin">Nombre contacto</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={this.state.contacto.nombre}
              onChange={this.handleChange}
            />
            <label className="labelcontactoadmin">Email</label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={this.state.contacto.email}
              onChange={this.handleChange}
            />
            <label className="labelcontactoadmin">Telefono</label>
            <input
              className="form-control"
              name="telefono"
              type="text"
              value={this.state.contacto.telefono}
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.cerrarVentana(true)}
            >
              Cerrar
            </Button>
            <Button
              variant="primary"
              onClick={() => this.editarContacto(this.state.contacto)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalInsertar} onHide={this.state.modalCerrar}>
          <Modal.Title>Agregar contacto</Modal.Title>
          <Modal.Body>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.datos.length + 1}
            />
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />

            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={this.handleChange}
            />

            <label>Telefono:</label>
            <input
              className="form-control"
              name="telefono"
              type="text"
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.crearContacto(this.state.contacto)}
            >
              Crear nuevo contacto
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarVentana()}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ContactAdmin;
