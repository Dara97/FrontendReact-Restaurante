import "./homeServicios.css";

export const HomeServicios = (props) => {
    return (
        <div id={props.id} className="col-md-3 img_row">
            <img src={props.img} alt="" className="img-fluid img-contenedor" />
        </div>
    );
}