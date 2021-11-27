import { Personal } from "../../components/NosotrosPersonal/personal";
import "./nosotros.css";
import personal from "../../data/personal.json";
import { Carrusel } from "../../components/Carrusel/Carrusel";
import carruselTestimonios from "../../data/carruselTest.json";
import { useState } from "react";
import { createRecord, useGet } from "../../api/crudActions";
import QuienesSomos from "../../components/QuienesSomos/QuienesSomos";

const initialForm = {
  usuario: "",
  descripcion: "",
};

export const Nosotros = () => {
  let personalData = personal;
  let carruselTest = carruselTestimonios;

  const [form, setForm] = useState({ ...initialForm });
  const [comments, setComments] = useState([]);
  const { refetch } = useGet("Comentario", {
    onCompleted: (data) => {
      const first6 =
        data.length > 6 ? data.reverse().slice(0, 6) : data.reverse();
      setComments(first6);
    },
  });

  const onChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    });
  };

  const onAddComment = () => {
    if (!form.usuario.trim() || !form.descripcion.trim()) return;

    createRecord("Comentario", form);
    setForm({ ...initialForm });
    document.location.reload();
  };

  return (
    <>
      <section id="historia">
        <QuienesSomos/>
      </section>

      <section id="equipo">
        <div className="container todo ">
          <div className="contenido-nosotros mt-5">
            <h1 className="title text-lg-center">Nuestro equipo</h1>
            <p className="text-lg-center">
            El equipo del Restaurante SAL&SALSA está formado por 15 personas. 
            Profesionales que con su dedicación y esfuerzo diarios, consiguen que todo 
            funcione a la perfección. El objetivo es siempre el mismo:
             que las personas que acuden a nuestro restaurante disfruten de un momento agradable,
              degustando nuestros platos y sintiéndose exquisitamente bien atendidos.
            </p>
          </div>
          <div className="row ">
            {personalData.map((data) => (
              <Personal
                id={data.id}
                img={data.img}
                titulo={data.titulo}
              ></Personal>
            ))}
          </div>
        </div>
      </section>
      <section id="comentarios">
        <div className="container">
          <div className="content-center">
            <h1 className="padding-top padding-h1">
              Unas palabras de nuestros clientes
            </h1>
           
          </div>
          {comments.length && <Carrusel data={comments} />}
          <div className="form-group">
            <div className="Row">
              <label className="Comentarios">Escribe aqui tu comentario!</label>
              <div className="col-">
              <br/>
                <input
                  type="text"
                  name="usuario"
                  className="form-control"
                  value={form.usuario}
                  onChange={onChange}
                  placeholder="Nombre completo"
                  
                />
                <br/>
                <textarea
                  className="form-control"
                  name="descripcion"
                  rows="2"
                  onChange={onChange}
                  value={form.descripcion}
                  placeholder="Opinion o comentario"
                />{" "}
                <br/>
                <button
                  className="btn button-comentarios"
                  onClick={onAddComment}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
