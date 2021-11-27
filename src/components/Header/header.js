import "./header.css";
import logo from "../../assets/images/logo@2x.png";

export const Header = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="text-center">
          <img
            src={logo}
            alt=""
            style={{ width: "280px", height: "230px" }}
            className="img-fluid"
          />
          <h1 className="h1-header">Sabores que exaltan tus sentidos</h1>
        </div>
      </div>
    </section>
  );
};
