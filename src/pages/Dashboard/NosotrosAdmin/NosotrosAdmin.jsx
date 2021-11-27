import "./NosotrosAdmin.css";

import React, { Component } from "react";

class Datos extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [] };
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

  borrarEmpleado(id) {
    fetch("http://localhost:41399/api/nosotros/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado");
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
        <li key={data.id_nosotros}>
          Nombre: <i>{data.historia}</i> Apellido <i>{data.imagen}</i>{" "}
          <button onClick={() => this.borrarEmpleado(data.id)}>Eliminar</button>
        </li>
      );
    });
  }
}

export default Datos;
