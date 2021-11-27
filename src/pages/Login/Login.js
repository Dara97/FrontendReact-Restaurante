import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Login/Title/Title";
import Label from "../../components/Login/Label/Label";
import Input from "../../components/Login/Input/Input";
import Dashboard from "../../pages/Dashboard/Dashboard";
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "SalySalsa" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
      console.log("account:", account);
    }
  }

  return (
    <div className="Administrador" style={{ marginTop: "72px" }}       >
      {isLogin ? (
        <Dashboard />
      ) : (
        <div
          className="containerP"
          style={{
            marginTop: "72px",
            paddingBottom: "42px",
            paddingTop: "42px",
          }}
        >
          <div className="contact-login animated boun ceInUP">
            <Title text="Iniciar sesión" />
            {hasError && (
              <label className="label-alert">
                Los datos ingresados son incorrectos.
              </label>
            )}
            <Label text="Usuario" />
            <Input
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
              }}
              handleChange={handleChange}
            />
            <Label text="Contraseña" />
            <Input
              attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
            {passwordError && (
              <label className="label-error">
                La constraseña debe tener mas de 6 digitos
              </label>
            )}
            <div className="ingresarButton">
              <button className="boton-login" onClick={handleSubmit} style={{marginRight: "10px"}}>
                Ingresar
              </button>
              <Link
                className="boton-registro"
                aria-current="page"
                to="/registro"
                style={{marginLeft: "10px"}}
              >
                Registro
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
