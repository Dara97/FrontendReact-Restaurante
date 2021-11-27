import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home/home";
import { Nosotros } from "./pages/Nosotros/nosotros";


import { MyModal } from "./components/MyModal/mymodal";
import { AppProvider } from "./context/AppContext";
import { Menu } from "./pages/Menu/menu";
import { OrderInfo } from "./pages/OrderInfo/orderinfo";
import { ShoppingCart } from "./pages/ShoppingCart/shoppingcart";

import { Form } from "./pages/Contact/formularioReserva";
import { FormContact } from "./pages/Contact/formularioContactanos";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Layout from "./components/Loyout";
import { Servicios } from "./pages/Servicios/servicios";


export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/formReserva" component={Form} />
            <Route exact path="/formContactanos" component={FormContact} />
            <Route exact path="/registro" component={Register} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/carrito" component={ShoppingCart} />
            <Route exact path="/orden" component={OrderInfo} />
            <Route exact path="/servicios" component={Servicios} />
            <Redirect to="/" />
          </Switch>
          <MyModal />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};
