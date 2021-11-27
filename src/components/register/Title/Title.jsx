import React from "react";
import  "./Title.css";

const Title = ({text}) => {
    return (
        <div className="title-container" style={{  paddingBottom: "20px", paddingTop: "20px", paddingRight: "57px", paddingLeft:"57px" }}>
           <label className="title-label">{text}</label> 
        </div>
    )
}

export default Title;