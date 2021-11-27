import { Login } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "./navBar.css";

export const Navbar = () => {
  const { shoppingCartItems } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <h1 className="title-navbar">SAL&SALSA</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/menu">
                Menú
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/servicios"
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/formReserva"
              >
                Reservas
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/carrito"
                className="nav-link active"
                aria-current="page"
                href="src/carrito_de_compras.html"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Carrito
                <span
                  style={{
                    display: "flex",
                    width: "25px",
                    height: "25px",
                    marginLeft: "8px",
                    borderRadius: "8px",
                    backgroundImage:
                      "linear-gradient( 135deg, #fff783 0, #ffdf67 25%, #f9c346 50%, #e8a722 75%, #db8f00 100% )",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000",
                  }}
                >
                  {shoppingCartItems.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/formContactanos"
              >
                Contáctanos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">
                <Login className="productListEdit" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
