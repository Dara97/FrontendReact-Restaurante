import React from "react";
import "./formStyle.css";
import emailjs from "emailjs-com";
import { Row, Col } from "react-bootstrap";

class FormularioReservas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      service: "",
        amountPeople: "",
        date ="",
        time ="",
        comment ="",
        reply_to = "ltramirezr@correo.udistrital.edu.co"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ fullName: e.target.value,
     });
  }

  handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_8tIHsvsPGfZsdWCoNWkXl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  render() {
    return (
      <div className="container-formulario">
        <div className="content">
          <h1 className="logo">
            Reservas <span>Sal&Salsa</span>
          </h1>

          <div className="contact-wrapper animated bounceInUp">
            <div className="contact-form">
              <form onSubmit={handleSubmit} id="contact_form">
                <Row>
                  <Col>
                    <p>
                      <label>Nombre completo</label>
                      <input
                        id="nombre"
                        type="text"
                        name="fullname"
                        value={this.state.fullName}
                        onChange={this.handleChange}
                        pattern="[a-zA-Z- ]{10,30}"
                      />
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <label>Correo electronico</label>
                      <input
                        id="correo"
                        type="email"
                        name="email"
                        minlength="8"
                        maxlength="30"
                      />
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>
                      <label>Telefono</label>
                      <input id="telefono" type="text" name="phone" />
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <label>Servicios</label>
                      <select id="servicios" className="form-select mb-3">
                        <option className="mb-3 bg-dark"></option>
                        <option className="mb-3 bg-dark" value="1">
                          {" "}
                          Celebración de cumpleaños
                        </option>
                        <option className="mb-3 bg-dark" value="2">
                          Aniversarios
                        </option>
                        <option className="mb-3 bg-dark" value="3">
                          Fiestas infantiles
                        </option>
                        <option className="mb-3 bg-dark" value="4">
                          Declaraciones o propuestas
                        </option>
                        <option className="mb-3 bg-dark" value="5">
                          Despedidas
                        </option>
                        <option className="mb-3 bg-dark" value="6">
                          Cena con amigos
                        </option>
                      </select>
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <label>N° Personas</label>
                      <input
                        id="cantPersonas"
                        type="number"
                        name="cantPersonas"
                      />
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>
                      <label>Fecha</label>
                      <input id="fecha" type="date" name="fecha" />
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <label>Hora</label>
                      <input id="hora" type="time" name="affair" />
                    </p>
                  </Col>
                </Row>

                <p className="block">
                  <label>Indicaciones especiales</label>
                  <input
                    id="indicaciones"
                    type="text"
                    name="affair"
                    minlength="8"
                    maxlength="200"
                  />
                </p>
                <p className="block">
                  <label className="box">Acepta el trato de datos</label>
                  <input type="checkbox" name="affair" />
                </p>

                <p className="block">
                  <button type="submit" id="button">
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

export default FormularioReservas;
