import "./headerServicios.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export const HeaderServicios = () => {
    return (
        <section id="heroServicios">
            <div className="container">
                <div className="text-center">
                    <div className="container">
                        <h1 className="h1-header">Nuestros Servicios</h1>
                        <div className="row">
                            <div className="col-6 parrafo">
                                <p>Te mereces un momento especial, y nosotros queremos llevar la mejor experiencia a tu mesa como en cada visita a nuestros restaurantes. Prueba la auténtica cocina italiana a domicilio o para recoger en tu sede más cercana. Eventos y Fiestas de Colombia es una organización de profesionales con experiencia en el área de realización y alquiler de mobiliario para sus eventos sociales y empresariales, cuenta con variedad de servicios necesarios y productos seleccionados para destacar en sus reuniones o festejos.</p>
                            </div>
                            <div className="col-6 parrafo">
                                <p>Nuestra compañía cuenta con mobiliario, menaje, decoración, servicio de catering, sonido e iluminación, fotografía y vídeo, locación y alianzas comerciales con proveedores de instalaciones para eventos, asesoría y acompañamiento para en lo posible contar con paquetes todo incluido para la organización y realización de su evento. Porque nuestro único propósito es satisfacer necesidades, gustos, deseos y sueños. Con valor agregado y un enfoque a mercados consolidados captaremos todos los segmentos, para así mismo proveer un servicio de excelencia y confianza.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}