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
  const [respuestas, setRespuestas] = useState({});
  const [codigo, setCodigo] = useState(" ");
  const [error, setError] = useState(" ");
  const [alert, setAlert] = useState(" ");
  const [modal, setModal] = useState(true);



  const handleNombreChange = (e:any) => {
    setNombre(e.target.value);
  };
  const handleAreaChange = (e:any) => {
    setArea(e.target.value);
    console.log(e.target.value);
  }
  const handleCodigoChange = (e:any) => {
    const codigo = e.target.value.trim();
    return setCodigo(codigo);
  }
  // acción de boton
  const handleButtonEnviar = (e: React.FormEvent) => {
      e.preventDefault();
      const codigoValido = codigo.trim() !== '' && codigo.length > 0;
      if(codigoValido){
        setError(" ");
        setAlert(" ");
        verificarCodigo(e);
      }else{
        setAlert("alert alert-error mt-5")
        setError("El código no puede estar vacio");
      }
  }
  const handleDiagnosticoChange = (e:any) => {
    setDiagnostico(e.target.value);
    console.log(e.target.value);
  }
  const onPreguntaChange = (value:any, id:any) => {
    setRespuestas(prevState => ({...prevState, [id]: value}));
  };
  console.log(codigo);

  // función para verificar el codigo
  const verificarCodigo = async (e: React.FormEvent) => {
    e.preventDefault();
    fetch(
      "http://localhost:3000/api/buscar-codigo/" + codigo
    ).then((res) => {
        if (res.status === 200) {
          setModal(false);
          setCodigo(codigo);
          // mostrar el modal
          // ID.showModal();
        } else {
          setAlert("alert alert-error mt-5")
          setError("El código no es valido");
        }
    });
  };


  return (
    <>
    {/* Open the modal using ID.showModal() method */}
      <NavbarComponent></NavbarComponent>
      <div className="container w-full flex justify-center"  style={{minHeight: 'calc(100vh - 60px)'}}>
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
          


          {diagnostico === "BigData" && <CardPreguntas data={BigData} titulo="Big Data" onPreguntaChange={onPreguntaChange}></CardPreguntas>}
          {diagnostico === "MarketingDigital" && <CardPreguntas data={MarketingDigital} titulo="Marketing Digital" onPreguntaChange={onPreguntaChange}></CardPreguntas>}
          {diagnostico === "BaseDeDatos" && <CardPreguntas data={BaseDeDatos} titulo="Base de Datos" onPreguntaChange={onPreguntaChange}></CardPreguntas>}
          {diagnostico === "Desarrollo" && <CardPreguntas data={Desarrollo} titulo="Desarrollo" onPreguntaChange={onPreguntaChange}></CardPreguntas>}
          {diagnostico === "RecursosHumanos" && <CardPreguntas data={RecursosHumanos} titulo="Recursos Humanos" onPreguntaChange={onPreguntaChange}></CardPreguntas>}
          {/* <CardPreguntas data={BigData} titulo="Big Data"></CardPreguntas>
          <CardPreguntas data={MarketingDigital} titulo="Marketing Digital"></CardPreguntas>
          <CardPreguntas data={BaseDeDatos} titulo="Base de Datos"></CardPreguntas>
          <CardPreguntas data={Desarrollo} titulo="Desarrollo"></CardPreguntas>
          <CardPreguntas data={RecursosHumanos} titulo="Recursos Humanos"></CardPreguntas> */}

         <div className="card-actions justify-center mt-5">
          <button className="btn btn-primary">Guardar</button>
        </div>
        </form>
        {modal && (
          <dialog id="my_modal_1" className="modal glass" open>
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">¡Bienvenido!</h3>
              <p className="py-4">Ingrese el código para hacer el diagnóstico</p>
              <input type="text" className="input input-bordered w-full shadow-xl" placeholder="Ingrese el código" value={codigo} onChange={handleCodigoChange}/>
              {error ? (<div className={alert}>{error}</div>):null}
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                {/* <button className="btn">Cancelar</button> */}
                <button className="btn btn-primary" onClick={handleButtonEnviar}>Acceder</button>
              </div>
            </form>
          </dialog>)}
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Cymetria</p>
        </div>
      </footer>
    </>
  );
}
