import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./orderinfo.css";
import swal from "sweetalert";

export const OrderInfo = () => {
  const { shoppingCartItems, calculateTotal } = useContext(AppContext);
  var total = 0;
  let order = [];

  for (let i = 0; i < shoppingCartItems.length; i++) {
    var nameProduct = shoppingCartItems[i].nombre;
    var priceProduct = shoppingCartItems[i].precio;
    var count = shoppingCartItems[i].count;
    total = total + priceProduct * count;

    order.push(i + 1 + "." + nameProduct);
    order.push("Precio:" + priceProduct);
    order.push("Cantidad pedida:" + count);
    order.push("   ");
  }

  const [toSend, setToSend] = useState({
    fullname: "",
    email: "",
    addres: "",
    phone: "",
    comment: "",
    products: order,
    totalOrder: total,
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const clearState = () => {
    toSend.fullname = "";
    toSend.email = "";
    toSend.addres = " ";
    toSend.phone = " ";
    toSend.comment = " ";
    toSend.products = " ";
    toSend.totalOrder = " ";
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("order_service", "order_form", toSend, "user_RKAC5J0fHBnQaQlPCA7ST")
      .then(
        (result) => {
          clearState();
          swal({
            icon: "success",
            title: "¡Envio exitoso!",
            text: "Pedido confirmado",
          });

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="order-info__main fondo-oscuro">
        <div className="order-info__container">
          <form className="order-info__form" onSubmit={sendEmail}>
            <div className="order-info__form-group">
              <div className="order-info__form-pair">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  name="fullname"
                  id=""
                  value={toSend.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="order-info__form-pair">
                <label htmlFor="">Correo</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  value={toSend.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="order-info__form-group">
              <div className="order-info__form-pair">
                <label htmlFor="">Direccion</label>
                <input
                  type="text"
                  name="addres"
                  id=""
                  value={toSend.addres}
                  onChange={handleChange}
                />
              </div>
              <div className="order-info__form-pair">
                <label htmlFor="">Telefono</label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  value={toSend.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="order-info__form-group">
              <div className="order-info_form-pair form_only">
                <label htmlFor="">Comentarios o solicitudes especiales</label>
                <input
                  type="text"
                  name="comment"
                  id=""
                  value={toSend.comment}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="order-info__form-pair-check">
              <label htmlFor="">
                Acepta los terminos de tratamiento de datos
              </label>
              <input type="checkbox" name="" id="" />
            </div>
            <button className="order-info__form-btn" type="submit">
              Enviar
            </button>
          </form>

          <div className="order-info__data">
            <h3 className="order-info__data-title">Resumen de compra</h3>
            <div className="order-info__data-table">
              <div className="order-info__data-table-head">
                <div className="ofdt-name">Nombre</div>
                <div className="ofdt-price">Precio unitario($)</div>
                <div className="ofdt-count">Cantidad</div>
              </div>
              {shoppingCartItems.map(({ id, nombre, precio, count }) => (
                <div className="order-info__data-table-item" key={id}>
                  <div className="ofdt-name">{nombre}</div>
                  <div className="ofdt-price">{precio}</div>
                  <div className="ofdt-count">{count}</div>
                </div>
              ))}
              <div className="order-info__data-table-total">
                <div>Total</div>
                <div>${calculateTotal()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};