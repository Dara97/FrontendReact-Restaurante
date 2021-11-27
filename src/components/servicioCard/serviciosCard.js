import 'bootstrap/dist/css/bootstrap.min.css';
import "./serviciosCard.css";

export const ServiciosCard = (props) => {
    return (

        <div class="col-4" id="servicios_fd">
            <div class="card card-border" style={{ width: '20rem' }} >
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.titulo}</h5>
                    <p class="card-text">
                        {props.texto}
                    </p>
                    <a href="/formReserva" class="btn btn-primary boton-servicios"
                    >RESERVAR</a>
                </div>
            </div>
        </div>
    );
}