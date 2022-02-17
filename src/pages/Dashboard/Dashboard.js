import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import Topbar from "../../components/Dashboard/topbar/Topbar";
import "./Dashboard.css";
import Inicio from "./Inicio/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserList from "./userList/UserList";
import ClientList from "./clientList/ClientList";
import ProductList from "./productList/ProductList";
import ContactAdmin from "./Contact/ContactAdmin";
import Servicios from "./servicios/servicios"


import { CommentsList } from "./CommentsList/CommentsList";


function Dashboard() {
  return (
    <Router>
      <br />
      <Topbar />
      <br />
      <div className="containerD">
        <Sidebar />
        <Switch>
          <Route path="/inicio">
            <Inicio />
          </Route>
          <Route path="/users">
            <ClientList />
          </Route>
          <Route path="/clients">
            <ClientList />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/comments">
            <CommentsList />
          </Route>
          <Route path="/contact">
            <ContactAdmin />
          </Route>
          <Route path="/servicios">
            <Servicios />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
