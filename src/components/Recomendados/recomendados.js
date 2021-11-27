import "./recomendados.css";

export const Recomendados = (props) => {

    return (
        <>
            <div className="col-4 recomendados_col">
                <img src={props.img} alt="" style={{ width: "210px", height: "190px" }} className="img-fluid imagenRecomendados" /><h4 className="h4Recomendados">{props.titulo}</h4><button className="btn btn-recomendados"><a className="especiales" href="menu.html" aria-current="page">Ver detalles</a></button>
                {/* props.titulo != " " ? <span></span> : <h4 class="h4Recomendados">{props.titulo}</h4> */}
            </div>
        </>
    );
};

