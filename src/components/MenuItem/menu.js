import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import "./menu.css";

export const MenuItem = ({
  data: { id_producto, nombre, descripcion, precio, imagen_producto },
  showAlert,
}) => {
  const { onShowModal, addToShoppingCart } = useContext(AppContext);

  const onAddToCart = () => {
    showAlert();
    return addToShoppingCart({
      id_producto,
      nombre,
      descripcion,
      precio,
      imagen_producto,
      add: true,
    });
  };

  return (
    <div class="col" style={{ marginTop: "32px" }}>
      <div id="nameProduct">
        <h3>{nombre}</h3>
      </div>

      <div>
        <img src={imagen_producto} alt="Hamburguesa especial" id="image" />
      </div>

      <div id="priceProduct">
        <h2>
          <i class="fas fa-dollar-sign"></i>
          <span class="precio"> {precio} </span>
        </h2>
      </div>

      <div class="description">
        <h6>{descripcion}</h6>
        <br />
        <button
          type="button"
          class="btn btn-warning btn-block"
          onClick={() => {
            onShowModal(nombre, imagen_producto, descripcion);
          }}
        >
          <i class="fas fa-plus-circle"></i> Más información
        </button>
      </div>

      <div class="addProduct" style={{ marginTop: "12px" }}>
        <button class="agregarCarrito" onClick={onAddToCart}>
          <i class="fas fa-shopping-cart"></i> Agregar carrito
        </button>
      </div>
    </div>
  );
};