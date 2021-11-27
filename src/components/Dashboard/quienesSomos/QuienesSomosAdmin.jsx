import "./QuienesSomosAdmin.css";
import React, { Component } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

class QuienesSomosAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      form: {
        id_nosotros: "",
        historia: "",
        imagen: "",
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/nosotros/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  editar(dato) {
    fetch("http://localhost:41399/api/nosotros/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, form: dato });
  }
  cerrarVentana(close) {
    this.setState({ modalCerrar: close, modalActualizar: false });
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
        {this.state.datos.map((data) => (
          <div className={data.historia} id={data.historia}>
            <div className="featured">
              <div className="featuredItem">
                <div className="featuredMoneyContainer">
                  <div key={data.id_nosotros}> </div>
                  {data.historia}
                  <img
                    src={data.imagen}
                    className="imagen_historia"
                    alt=""
                  />
                </div>
                <div>
                  <div key={data.id_nosotros}>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.abrirVentanaEditar(data)}
                    >
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Modal
          show={this.state.modalActualizar}
          onHide={this.state.modalCerrar}
        >
          <Modal.Header /* style={{ display: "block" }} */>
          <Modal.Title>Editar quienes somos</Modal.Title>
            <button
              style={{ float: "right" }}
              ClassName="btn btn-primary"
              variant="secondary"
              onClick={() => this.cerrarVentana(true)}
            >
              X
            </button>
          </Modal.Header>
         

          <Modal.Body>
            <label className="nombresFormTitulo">Nombre producto</label>

            <input

              className="form-control"
              name="id_nosostros"
              type="number"
              readOnly
              value={this.state.form.id_nosotros}
              onChange={this.handleChange}
            />
            <br />
            <label className="nombresFormTitulo">Precio</label>

            <input
              
              className="form-control"
              name="historia"
              type="text"
              value={this.state.form.historia}
              onChange={this.handleChange}
            />
            <br />
            <label className="nombresFormTitulo">Descripción</label>
            <input
              className="form-control"
              name="imagen"
              type="text"
              value={this.state.form.imagen}
              onChange={this.handleChange}
            />
            <br />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default QuienesSomosAdmin;
