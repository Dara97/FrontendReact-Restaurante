import { HeaderServicios } from '../../components/HeaderServicios/headerServicios';
import { ServiciosCard } from '../../components/servicioCard/serviciosCard';
import serviciosData from '../../data/serviciosData.json';
import "./servicios.css";
import React, { useEffect, useState, } from "react";
export const Servicios = () => {
    // let servicios = serviciosData;
    let [datos, setDatos] = useState([]);

    function fetchObtenerServicios() {
        fetch('http://localhost:41399/api/servicios')
            .then((response) => response.json())
            .then((data) => {
                setDatos(data)
            });

    }

    useEffect(() => {
        fetchObtenerServicios()
    });

    return (
        <><HeaderServicios></HeaderServicios><div id="games">
            <div class="container-md p-5">
                <div class="row">
                    {datos.map(data =>
                        <ServiciosCard img={data.imagen_servicios} titulo={data.titulo} texto={data.descripcion} ></ServiciosCard>
                    )}
                </div>
            </div>
        </div></>
    );
}