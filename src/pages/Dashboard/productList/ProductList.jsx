import React, { Component } from "react";
import "./tableProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

class DatosProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      modalActualizar: false,
      modalCerrar: false,
      modalInsertar: false,
      producto: {
        id_producto: "",
        nombre: "",
        descripcion: "",
        precio: 0,
        imagen_producto: "",
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/producto")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  borrarProducto(id) {
    fetch("http://localhost:41399/api/producto/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchData();
        alert("Producto eliminado");
      });
  }

  editarProducto(dato) {
    fetch("http://localhost:41399/api/producto/", {
      method: "PUT",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Producto editado");
        this.setState({ modalActualizar: false });
        this.fetchData();
      });
  }

  crearProducto(dato) {
    console.log(dato);
    fetch("http://localhost:41399/api/producto/", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Producto creado");
        this.setState({ modalInsertar: false });
        this.fetchData();
      });
  }

  abrirVentanaEditar(dato) {
    this.setState({ modalActualizar: true, producto: dato });
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
      producto: {
        ...this.state.producto,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <button
            class="btn btn-dark btn-outline-dark boton-agregar"
            onClick={() => this.abrirVentanaInsertar()}
          >
            Agregar producto
          </button>
          {this.state.datos.map((data) => (
            <div className={data.nombre} id={data.nombre}>
              <div className="featured">
                <div className="featuredItem">
                  <div key={data.id_producto}> </div>
                  <div>
                    <h1>{data.nombre}</h1>
                  </div>
                  <br />
                  <div>{data.descripcion}</div>
                  <br />
                  <div>
                    <AttachMoneyIcon />
                    {data.precio}
                  </div>
                  <br />

                  <img 
                    className="productListImg"
                    src={data.imagen_producto}
                    alt=""
                  />
                  <div>
                  <div key={data.id_producto}>
                      <button
                        type="button"
                        className="btn btn-dark btn-outline-dark"
                        onClick={() => this.borrarProducto(data.id_producto)}
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
          <Modal.Title>Editar producto</Modal.Title>
          <Modal.Body>
            <label className="labelProductList">Nombre producto</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={this.state.producto.nombre}
              onChange={this.handleChange}
            />
            <label>Precio</label>
            <input
              className="form-control"
              name="precio"
              type="number"
              value={this.state.producto.precio}
              onChange={this.handleChange}
            />
            <label>Descripción</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              value={this.state.producto.descripcion}
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
              onClick={() => this.editarProducto(this.state.producto)}
            >
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.modalInsertar} onHide={this.state.modalCerrar}>
          <Modal.Title>Agregar producto</Modal.Title>
          <Modal.Body>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.datos.length + 1}
            />
            <label>Producto:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.handleChange}
            />

            <label>Precio:</label>
            <input
              className="form-control"
              name="precio"
              type="number"
              onChange={this.handleChange}
            />

            <label>Descripción:</label>
            <input
              className="form-control"
              name="descripcion"
              type="text"
              onChange={this.handleChange}
            />

            <label>Ruta de imagen</label>
            <input
              className="form-control"
              name="imagen_producto"
              type="text"
              onChange={this.handleChange}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              color="primary"
              onClick={() => this.crearProducto(this.state.producto)}
            >
              Crear nuevo producto
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

export default DatosProductos;