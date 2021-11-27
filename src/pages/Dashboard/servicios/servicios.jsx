import React, { Component } from "react";

const urlImagenDefecto =
  "https://res.cloudinary.com/ddqxtzvyw/image/upload/v1636248765/restaurant-images/even4.jpg";
class Servicios extends Component {
  constructor(props) {
    super(props);
    this.state = { datos: [], titulo: "", descripcion: "", link: "" };
  }

  componentDidMount() {
    this.fetchObtenerServicios();
  }

  fetchObtenerServicios() {
    fetch("http://localhost:41399/api/servicios")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datos: data });
      });
  }

  fetchEliminarServicios(id) {
    fetch("http://localhost:41399/api/servicios/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("dato eliminado" + data);
        this.fetchObtenerServicios();
      });
  }

  fetchEditarServicios(id) {
    fetch("http://localhost:41399/api/servicios/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_servicios: id,
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        imagen_servicios:
          this.state.link === "" ? urlImagenDefecto : this.state.link,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchObtenerServicios();
      });
  }
  fetchCrearServicios() {
    fetch("http://localhost:41399/api/servicios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        imagen_servicios:
          this.state.link === "" ? urlImagenDefecto : this.state.link,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.fetchObtenerServicios();
      });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row d-flex" style={{ justifyContent: "center" }}>
            <button
              class="btn btn-primary boton-servicios mb-3"
              data-bs-toggle="modal"
              data-bs-target="#modalCrear"
            >
              Crear
            </button>
            <div
              class="modal fade"
              id="modalCrear"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Crear servicio
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input
                      type="text"
                      class="form-control"
                      id="titulo"
                      placeholder="Titulo"
                      onChange={(e) =>
                        this.setState({ titulo: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      class="form-control"
                      id="descripcion"
                      placeholder="Descripcion"
                      onChange={(e) =>
                        this.setState({ descripcion: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      class="form-control"
                      id="imagen"
                      placeholder="Link Imagen"
                      onChange={(e) => this.setState({ link: e.target.value })}
                    />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      // aria-label="Close"
                      onClick={() => this.fetchCrearServicios()}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.datos.length && (
            <div className="row">
              {this.state.datos.map((data) => {
                return (
                  <>
                    <div class="col-4" id="servicios_fd">
                      <div class="card card-border" style={{ width: "18rem" }}>
                        <img
                          src={data.imagen_servicios}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{data.titulo}</h5>
                          <p class="card-text">{data.descripcion}</p>
                          <div class="d-flex">
                            <button
                              class="btn btn-primary boton-servicios mx-2"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              Editar
                            </button>
                            <button
                              class="btn btn-primary boton-servicios mx-2"
                              onClick={() =>
                                this.fetchEliminarServicios(data.id_servicios)
                              }
                            >
                              Borrar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Editar
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <input
                              type="text"
                              class="form-control"
                              id="titulo"
                              placeholder="Titulo"
                              onChange={(e) =>
                                this.setState({ titulo: e.target.value })
                              }
                            />
                            <input
                              type="text"
                              class="form-control"
                              id="descripcion"
                              placeholder="Descripcion"
                              onChange={(e) =>
                                this.setState({ descripcion: e.target.value })
                              }
                            />
                            <input
                              type="text"
                              class="form-control"
                              id="imagen"
                              placeholder="Link Imagen"
                              onChange={(e) =>
                                this.setState({ link: e.target.value })
                              }
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                              // aria-label="Close"
                              onClick={() =>
                                this.fetchEditarServicios(data.id_servicios)
                              }
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Servicios;
