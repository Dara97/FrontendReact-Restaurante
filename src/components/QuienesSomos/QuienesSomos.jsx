import "./QuienesSomos.css";
import React, { Component } from "react";

class QuienesSomos extends Component {
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

  editarEmpleado(id) {
    fetch("http://localhost:41399/api/nosotros/" + id, {
      method: "UPDATE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato editado");
        this.fetchData();
      });
  }

  render() {
    return this.state.datos.map((data) => {
      return (
              <section id="historia">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 d-flex">
                <div className="container container_historia align-self-center ">
                  <h1 className="text-uppercase mb-4 text-light">
                    Nuestra Historia
                  </h1>
                  <p className="text-light mb-4">
                    <div key={data.id_nosotros}> </div>
                    {data.historia}
                  </p>
                  <a href="#equipo" className="btn boton-nosotros">
                    Mas
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                
                <div className="container contener_imagen" key={data.id_nosotros}> </div>
                <img
                  src={data.imagen}
                  className="img-fluid rounded restaurante"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      );
    });
  }
}

export default QuienesSomos;
