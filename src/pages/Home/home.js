import { Header } from "../../components/Header/header";
import { Recomendados } from "../../components/Recomendados/recomendados";
import { HomeServicios } from "../../components/homeServicios/homeServicios";


import recomendadosData from "../../data/recomendadosData";
import homeService from "../../data/homeService.json";


export const Home = () => {
  let recomendados = recomendadosData;
  let homeServices = homeService;

  return (
    <>
      <Header />
      <section id="propuesta">
        <div className="container-fluid">
          <div className="content-center">
            <h1 className="title">Nuestra propuesta</h1>
            <p>
              Desde que inauguramos el primer restaurante,
              nuestro compromiso ha sido satisfacer tus gustos,
              expectativas y necesidades con una excelente calidad.
              Siendo expertos en hamburguesas y brindando nuevos sabores en cada
              producto que creamos para ti. Por esta razón, utilizamos materias
              primas seleccionadas, para la preparación de nuestros alimentos.
            </p>
          </div>
        </div>
      </section>

      <section id="recomendados">
        <div className="container content-center contenedorRecomendados">
          <h1 className="title">Descubre nuestras especialidades</h1>
          <div className="row g-4">
            {recomendados.map((data) => (
              <Recomendados img={data.img} titulo={data.titulo}></Recomendados>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" class="divider">
        <div className="container">
          <div className="content-center">
            <h1 className="padding-h1">Organizamos eventos</h1>
            <p>
              SAL&SALSA es el lugar ideal para todo tipo de eventos y recepciones:
              Matrimonios, Bautizos, Cumpleaños, Aniversarios, Desayunos, Reuniones de trabajo…
              Aquí sus invitados serán atendidos con sobriedad, distinción y calidez.
            </p>
          </div>

          <div className="row">
            {homeServices.map((data) => (
              <HomeServicios id={data.id} img={data.img} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};
