import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo-topbar">Administrador</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">20</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div> */}

          <img
            src="https://cdn-icons-png.flaticon.com/512/2195/2195416.png"
            alt=""
            className="topAvatar"
          />
          <button
            class="btn btn-dark btn-outline-dark cerrarSesion"
            /* href="/menu" aria-current="page" */
          >
            Cerrrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
