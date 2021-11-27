import React from "react";
import "./formStyle.css";
import emailjs from "emailjs-com";

import { Row, Col } from "react-bootstrap";
import swal from "sweetalert";

class formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datos: [], nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
    this.sendEmail = this.sendEmail.bind(this);
  }

  /* componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://localhost:41399/api/contacto/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  } */


  /*   handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
        
      });
      console.log(this.state.form)
    }; */

  /* agregarDatos(dato) {
    console.log(dato)
    fetch("http://localhost:41399/api/contacto/", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchData();
        alert("Dato creado")
      })
      ;
  } */

  fetchCrearServicios() {
    fetch('http://localhost:41399/api/contacto/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "nombre": this.state.nombre,
        "email": this.state.email,
        "telefono": this.state.telefono,
        "asunto": this.state.asunto,
        "mensaje": this.state.mensaje,

      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dato creado")
      });
  }

  sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        event.target,
        "user_8tIHsvsPGfZsdWCoNWkXl"
      )
      .then(
        (result) => {
          swal({
            icon: "success",
            title: "¡Envio exitoso!",
            text: "Tu solicitud o comentario ha sido enviado, pronto nos comunicaremos contigo.",
          });
          event.target.reset();
        },
        (error) => {
          swal({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal!",
          });
        }
      );
  }
  render() {
    return (
      <div className="container-formulario">
        <div className="content">
          <h1 className="logo">
            <span>Sal&Salsa</span>
          </h1>

          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <form onSubmit={this.sendEmail} id="contact_form">
                <Row>
                  <Col>
                    <p>
                      <label>Nombre completo</label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        pattern="[a-zA-Z- ]{10,30}"
                        onChange={(e) => this.setState({ nombre: e.target.value })}
                      />
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <label>Correo electronico</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        minlength="8"
                        maxlength="60"
                        onChange={(e) => this.setState({ email: e.target.value })}
                      />
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>
                      <label>Telefono</label>
                      <input
                        id="telefono"
                        type="number"
                        name="telefono"
                        onChange={(e) => this.setState({ telefono: e.target.value })} />
                    </p>
                  </Col>

                  <Col>
                    <p>
                      <label>Asunto del contacto</label>
                      <input
                        id="asunto"
                        type="text"
                        name="asunto"
                        onChange={(e) => this.setState({ asunto: e.target.value })} />
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>
                      <label>Comentarios o solicitudes especiales</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="3"
                        cols="40"
                        placeholder="Deja tu comentario o solicitud aquí"
                        onChange={(e) => this.setState({ mensaje: e.target.value })}
                      ></textarea>
                    </p>
                  </Col>
                </Row>

                <p className="block">
                  <label className="box">Acepta el trato de datos</label>
                  <input type="checkbox" name="affair" />
                </p>

                <p className="block">
                  <button type="submit" id="button" onClick={() => this.fetchCrearServicios()}>
                    Enviar
                  </button>
                  
                </p>
              </form>
            </div>
            <div className="contact-info">
              <h4>Mas informacion</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>Sal&Salsa
                </li>
                <li>
                  <i className="fas fa-phone"></i>3103551873
                </li>
                <li>
                  <i className="fas fa-envelope-open-text"></i>{" "}
                  contacto@sal&salsa.com
                </li>
              </ul>
              <p>
                .......................................................................................
              </p>
              <p>........................................</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default formulario;
