import React,  { useState }  from "react";
import "./Register.css";
import Title from "../../components/register/Title/Title";
import Label from "../../components/register/Label/Label";
import Input from "../../components/register/Input/Input";


function Register() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [hasError, setHasError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
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

    };

    function ifMatch(param) {
        if (param.user.length > 0 && param.password.length > 0) {
            if (param.user === 'SalySalsa' && param.password === '123456') {
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
    };

    return (

        <section className="containerP"

            style={{ marginTop: "72px", paddingBottom: "42px", paddingTop: "42px" }}>
            {isLogin ?
                <div>
                    <h2>Hola, {user}!</h2>
                </div>
                :
                <div className="contact-register animated boun ceInUP">
                    <Title text='Registrarse' />
                    {hasError && <label className="label-alert">Los datos ingresados son incorrectos.</label>}
                    <Label text='Correo electronico' />
                    <Input
                        attribute={{
                            id: 'correo',
                            name: 'correo',
                            type: 'email',
                        }}
                        handleChange={handleChange} />
                    <Label text='Usuario' />
                    <Input
                        attribute={{
                            id: 'usuario',
                            name: 'usuario',
                            type: 'text',
                        }}
                        handleChange={handleChange} />
                    <Label text='Contraseña' />
                    <Input
                        attribute={{
                            id: 'contraseña',
                            name: 'contraseña',
                            type: 'password',
                        }}
                        handleChange={handleChange}
                        param={passwordError} />
                    {passwordError &&
                        <label className='label-error'>La constraseña debe tener mas de 6 digitos</label>}


                    <div className='ingresarButton'>
                        <button className='btn-register' onClick={handleSubmit}>
                            Registrarse
                        </button>

                    </div>


                </div>}

        </section>
    );
}

export default Register;