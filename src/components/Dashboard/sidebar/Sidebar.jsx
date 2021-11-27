import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  AssignmentInd,
  RestaurantMenu,
  AddAlertSharp,
  AssignmentTurnedIn,
  Contacts,
  Comment,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ marginBottom: "50px" }}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h2 className="sidebarTitle">Administrar</h2> */}
          <ul className="sidebarList">
            <Link to="/inicio" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Nosotros
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <AssignmentInd className="sidebarIcon" />
                Personal
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <RestaurantMenu className="sidebarIcon" />
                Menu
              </li>
            </Link>
            <Link to="/servicios" className="link">
            <li className="sidebarListItem">
                <AssignmentTurnedIn className="sidebarIcon" />
                Servicios
              </li>
            </Link>
            {/* <li className="sidebarListItem">
              <AddAlertSharp className="sidebarIcon" />
              Reservas
            </li> */}
            <Link to="/contact" className="link">
            <li className="sidebarListItem">
                <Contacts className="sidebarIcon" />
                Contactenos
            </li>
            </Link>
            <Link to="/comments" className="link">
            <li className="sidebarListItem">
                <Comment className="sidebarIcon" />
                Comentarios
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
