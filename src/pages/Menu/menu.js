import { useState } from "react";
import { MenuItem } from "../../components/MenuItem/menu";

import "./menu.css";

export const Menu = () => {
  const [datos, setDatos] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const onShowAlert = () => {
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  fetch("http://localhost:41399/api/producto")
    .then((response) => response.json())
    .then((data) => {
      setDatos(data);
    });

  return (
    <>
      <div
        className="fondo-oscuro"
        style={{
          width: "100%",
          minHeight: "calc(100vh - 72px)",
          marginTop: "72px",
          paddingTop: "36px",
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            height: "50px",
            borderRadius: "8px",
            display: showAlert ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            fontSize: "1.1rem",
            backgroundImage:
              "linear-gradient( 135deg, #fff783 0, #ffdf67 25%, #f9c346 50%, #e8a722 75%, #db8f00 100% )",
          }}
        >
          Se ha agregado un producto a su carrito
        </div>

        <section class="container" style={{ padding: "24px 0 64px" }}>
          <div class="row" id="burguer">
            {datos.map((item) => (
              <MenuItem
                key={item.id_producto}
                data={item}
                showAlert={onShowAlert}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};