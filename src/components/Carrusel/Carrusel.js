import React from "react";
import "./Carrusel.css";

export const Carrusel = ({ data }) => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        {data.map(({ id }, index) => (
          <button
            key={id}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            class={!index ? "active" : ""}
            aria-current={!index && "active"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div class="carousel-inner">
        {data.map(({ id, usuario, descripcion }, index) => (
          <div key={id} class={`carousel-item ${!index ? "active" : ""}`}>
            <p>{descripcion}</p>
            <div class="testimonial-user">
              <h6 className="text-center">{usuario}</h6>
            </div>
          </div>
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
