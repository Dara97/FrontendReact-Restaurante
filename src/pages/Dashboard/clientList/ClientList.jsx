import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./clientList.css";
import swal from "sweetalert";

class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      modalInsertar: false,
      form: {
        id: "",
        nombre: "",
        apellido: "",
        cargo: "",
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/empleados")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarEmpleado(id) {
    fetch("http://localhost:41399/api/empleados/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          icon: "success",
          title: "¡Eliminación exitosa!",
          text: "Tu empleado ha sido eliminado de la base de datos.",
        });
        this.fetchData();
      });
  }

  editarEmpleado(dato) {
    fetch("http://localhost:41399/api/empleados/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          icon: "success",
          title: "¡Actualización exitosa!",
          text: "Los datos de tu empleado han sido editados en la base de datos.",
        });
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  crearEmpleado(dato) {
    console.log(dato);
    fetch("http://localhost:41399/api/empleados/", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        swal({
          icon: "success",
          title: "¡Creación exitosa!",
          text: "Un nuevo empleado ha sido agregado a tu base de datos.",
        });
        this.setState({ modalInsertar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, form: dato });
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
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div className="row">
          w
          {this.state.datos.map((data) => (
            <div className={data.nombre} id={data.nombre}>
              <div className="featured">
                <div className="featuredItem">
                  <div key={data.id}> </div>
                  <div>
                    <h1>
                      {data.nombre} {data.apellido}
                    </h1>
                  </div>
                  <br />

                  <div>{data.cargo}</div>

                  <div>
                    <div key={data.id}>
                      <button
                        type="button"
                        className="btn btn-dark btn-outline-dark"
                        onClick={() => this.borrarEmpleado(data.id)}
                      >
                        Eliminar
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-dark btn-outline-dark"
                        onClick={() => this.abrirVentanaEditar(data)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal
          show={this.state.modalActualizar}
          onHide={this.state.modalCerrar}
        >
          <Modal.Title>Editar datos empleado</Modal.Title>
          <Modal.Body>
            <label className="labelClientList">Nombre</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={this.state.form.nombre}
              onChange={this.handleChange}
            />
            <label className="labelClientList">Apellido</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              value={this.state.form.apellido}
              onChange={this.handleChange}
            />
            <label className="labelClientList">Cargo</label>
            <input
              className="form-control"
              name="cargo"
              type="text"
              value={this.state.form.cargo}
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
              onClick={() => this.editarEmpleado(this.state.form)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalInsertar} onHide={this.state.modalCerrar}>
          <Modal.Title>Agregar empleado</Modal.Title>
          <Modal.Body>
            <label className="labelClientList">Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.datos.length + 1}
            />
            <label className="labelClientList">Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />

            <label className="labelClientList">Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              onChange={this.handleChange}
            />

            <label className="labelClientList">Cargo:</label>
            <input
              className="form-control"
              name="cargo"
              type="text"
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.crearEmpleado(this.state.form)}
            >
              Agregar nuevo empleado
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

export default ClientList;