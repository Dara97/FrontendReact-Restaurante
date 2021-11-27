import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">
              <img
                src="https://res.cloudinary.com/ddqxtzvyw/image/upload/v1636248777/restaurant-images/logo%402x.png"
                alt=""
                width="180"
                height="200"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="mapa_sitioweb">
              <h1>MAPA DEL SITIO WEB</h1>

              <div className="row" id="map">
                <div className="col-md-3">
                  <section id="sec1">
                    <h2>Nosotros</h2>
                    <ul>
                      <li>
                        <a href="historia.html#historia">Historia</a>
                      </li>
                      <li>
                        <a href="historia.html#equipo">Equipo</a>
                      </li>
                      <li>
                        <a href="historia.html#comentarios">Comentarios</a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="col-md-3">
                  <section id="sec2">
                    <h2>Menú</h2>
                    <ul>
                      <li>
                        <a href="menu.html#burger">Hamburguesas</a>
                      </li>
                      <li>
                        <a href="menu.html#pizza">Pizzas</a>
                      </li>
                      <li>
                        <a href="menu.html#protein">Proteinas</a>
                      </li>
                      <li>
                        <a href="menu.html#salad">Ensaladas</a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="col-md-3">
                  <section id="sec3">
                    <h2>Servicios</h2>
                    <ul>
                      <li>
                        <a href="servicios.html#servicios_fd">
                          Fiestas infantiles
                        </a>
                      </li>
                      <li>
                        <a href="servicios.html#servicios_fd">
                          Declaraciones o propuestas
                        </a>
                      </li>
                      <li>
                        <a href="servicios.html#servicios_ca">
                          Cena con amigos
                        </a>
                      </li>
                      <li>
                        <a href="servicios.html#servicios_ca">Aniversarios</a>
                      </li>
                      <li>
                        <a href="servicios.html#servicios_cd">
                          Celebración de cumpleaños
                        </a>
                      </li>
                      <li>
                        <a href="servicios.html#servicios_cd">Despedidas</a>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="col-md-3">
                  <section id="sec4">
                    <h2>Contáctanos</h2>
                    <ul>
                      <li>
                        <a href="contactanos.html">Formulario - contacto</a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3" id>
            <div className="col-md-3" id="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127261.64912536141!2d-74.28955800419969!3d4.60717394484627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c75c6cb4b5b%3A0x63e23d4a3f3ea7a3!2sGastrobar%20Gran%20Inka!5e0!3m2!1ses!2sco!4v1631826996019!5m2!1ses!2sco"
                width="230"
                height="150"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <br />
              <p style={{ width: "200px" }}>
                Restaurante Sal y Salsa Ltda.
                <br />
                Calle 19 No. 7-30, Bogotá
                <br />
                reservas@salysalsa.comentarios
                <br />
                312 325 32
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
