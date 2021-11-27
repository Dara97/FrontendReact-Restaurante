import React from "react";
import { Footer } from "./Footer/footer";
import { Navbar } from "./Navbar/navbar";
function Layout(props) {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
