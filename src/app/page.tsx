import Image from "next/image";
import NavbarComponent from "../app/components/navbar.component";
import CardPreguntas from "../app/components/cardPreguntas.component";
import {BigData, MarketingDigital, BaseDeDatos, Desarrollo, RecursosHumanos} from "../app/data/BigData";
const areas={
  proyectos: "Proyectos",
  administracion: "Administración",
  comercial: "Comercial"
}

export default function Home() {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="container w-full flex justify-center">
        <form className="card shadow-xl glass p-10 card-form m-10">
          <div className="form-control mt-5 animate__animated animate__fadeInUp">
            <label className="label" htmlFor="area">
              <span className="label-text">Area</span>
            </label>
            <select className="select shadow-xl" id="area">
              <option disabled selected>Seleccione un área de la empresa</option>
              <option>Proyectos</option>
              <option>Administración</option>
              <option>Comercial</option>
            </select>
          </div>
          {/* Datos del usuario */}
          <div className="form-control mt-5 animate__animated animate__fadeInUp animate__delay-2s">
            <label className="label" htmlFor="nombre">
              <span className="label-text">Nombre</span>
            </label>
            <input type="text" className="input input-bordered w-full shadow-xl" id="nombre" placeholder="Ingrese su nombre" required/>
          </div>
          {/* Preguntas para cada uno de los componentes claves*/}
          <CardPreguntas data={BigData} titulo="Big Data"></CardPreguntas>
          <CardPreguntas data={MarketingDigital} titulo="Marketing Digital"></CardPreguntas>
          <CardPreguntas data={BaseDeDatos} titulo="Base de Datos"></CardPreguntas>
          <CardPreguntas data={Desarrollo} titulo="Desarrollo"></CardPreguntas>
          <CardPreguntas data={RecursosHumanos} titulo="Recursos Humanos"></CardPreguntas>

         <div className="card-actions justify-center mt-5">
          <button className="btn btn-primary">Guardar</button>
        </div>
        </form>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Cymetria</p>
        </div>
      </footer>
    </>
  );
}
