import React from "react";

const CardPreguntas = ({ data, titulo } : any) => {
  return (
    <div className="card shadow-xl mt-10 glass animate__animated animate__fadeInUp animate__delay-3s">
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        {data.map((item:any, index:any) => (
          <div key={index} className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              {item.Variable}
            </div>
            <div className="collapse-content">
              {/* Preguntas con el correspondiente select */}
              {item.Preguntas.map((pregunta:any, pregIndex:any) => (
                <div key={pregIndex} className="form-control mt-10">
                  <label className="label" htmlFor="nombre">
                    <p className="label-text">{pregunta.Pregunta}</p>
                  </label>
                  <select className="select" id="area">
                    <option disabled selected>Seleccione una respuesta</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                    <option value="6">7</option>
                    <option value="7">8</option>
                    <option value="8">9</option>
                    <option value="9">10</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Guardar</button>
        </div> */}
      </div>
    </div>
  );
};

export default CardPreguntas;
