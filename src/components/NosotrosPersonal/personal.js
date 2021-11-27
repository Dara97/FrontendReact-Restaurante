
export const Personal = (props) => {

    return (
        <>
            <div id={props.id} className="col-md-3 img_row-personal">
                <img src={props.img} alt="" className="img-fluid img-contenedor" />
                <h1>{props.titulo}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </>
    );
}