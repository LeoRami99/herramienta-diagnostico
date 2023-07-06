'use client';
import Image from "next/image";
import NavbarComponent from "../app/components/navbar.component";
import CardPreguntas from "../app/components/cardPreguntas.component";
import {BigData, MarketingDigital, BaseDeDatos, Desarrollo, RecursosHumanos} from "../app/data/BigData";
import { useState } from "react";


export default function Home() {
  const [nombre, setNombre] = useState(" ");
  const [area, setArea] = useState("Seleccione un area");
  const [diagnostico, setDiagnostico] = useState(" ");
  const handleNombreChange = (e:any) => {
    setNombre(e.target.value);
    console.log(nombre);
  };
  const handleAreaChange = (e:any) => {
    setArea(e.target.value);
    console.log(e.target.value);
  }
  const handleDiagnosticoChange = (e:any) => {
    setDiagnostico(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className="container w-full flex justify-center">
        <form className="card shadow-xl glass p-10 card-form m-10">
          <div className="form-control mt-5 animate__animated animate__fadeInUp">
            <label className="label" htmlFor="area">
              <span className="label-text">Area</span>
            </label>
            <select className="select shadow-xl" id="area" value={area} onChange={handleAreaChange}>
                <option defaultValue={"Seleccione un área de la empresa"} >Seleccione un área de la empresa</option>
                <option value="Proyectos">Proyectos</option>
                <option value="Administración">Administración</option>
                <option value="Comercial">Comercial</option>
            </select>

          </div>
          {/* Datos del usuario */}
          <div className="form-control mt-5 animate__animated animate__fadeInUp animate__delay-2s">
            <label className="label" htmlFor="nombre">
              <span className="label-text">Nombre</span>
            </label>
            <input type="text" className="input input-bordered w-full shadow-xl" id="nombre" placeholder="Ingrese su nombre" required value={nombre} onChange={handleNombreChange}/>
          </div>
          {/* Preguntas para cada uno de los componentes claves*/}
          {/* hacer un selector */}
          <div className="form-control mt-5 animate__animated animate__fadeInUp">
            <label className="label" htmlFor="area">
              <span className="label-text">Diagnóstico</span>
            </label>
            <select className="select shadow-xl" id="area" value={diagnostico} onChange={handleDiagnosticoChange}>
                <option defaultValue={"Seleccione un área de la empresa"} >Seleccione el diagnóstico</option>
                <option value="BigData">Big Data</option>
                <option value="MarketingDigital">Marketing Digital</option>
                <option value="BaseDeDatos">Base de Datos</option>
                <option value="Desarrollo">Desarrollo</option>
                <option value="RecursosHumanos">Recurso Humanos</option>
            </select>

          </div>



          {diagnostico === "BigData" && <CardPreguntas data={BigData} titulo="Big Data"></CardPreguntas>}
          {diagnostico === "MarketingDigital" && <CardPreguntas data={MarketingDigital} titulo="Marketing Digital"></CardPreguntas>}
          {diagnostico === "BaseDeDatos" && <CardPreguntas data={BaseDeDatos} titulo="Base de Datos"></CardPreguntas>}
          {diagnostico === "Desarrollo" && <CardPreguntas data={Desarrollo} titulo="Desarrollo"></CardPreguntas>}
          {diagnostico === "RecursosHumanos" && <CardPreguntas data={RecursosHumanos} titulo="Recursos Humanos"></CardPreguntas>}
          {/* <CardPreguntas data={BigData} titulo="Big Data"></CardPreguntas>
          <CardPreguntas data={MarketingDigital} titulo="Marketing Digital"></CardPreguntas>
          <CardPreguntas data={BaseDeDatos} titulo="Base de Datos"></CardPreguntas>
          <CardPreguntas data={Desarrollo} titulo="Desarrollo"></CardPreguntas>
          <CardPreguntas data={RecursosHumanos} titulo="Recursos Humanos"></CardPreguntas> */}

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
