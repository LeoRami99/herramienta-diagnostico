'use client';
import React, { useState } from 'react';
import NavbarComponent from "../components/navbar.component";

export default function Admin() {
  const [codigo, setCodigo] = useState('');
  const [envioCodigo, setEnvioCodigo] = useState(false);
  const [botonVisible, setBotonVisible] = useState(true);

  const sendCode = async (data:any) => {
    try {
      fetch('http://localhost:3000/api/generar-codigo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        setEnvioCodigo(true);
      });
    } catch (error) {
      setEnvioCodigo(false);
    }
  };

  const handleGenerateCodigo = (e:any) => {
    e.preventDefault();

    if (!botonVisible) {
      return;
    }
    const codigoGenerado = "DIA-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    sendCode({ codigo_acceso: codigoGenerado });
    setCodigo(codigoGenerado);
    setBotonVisible(false);
  };

  return (
    <>
      <NavbarComponent />
      <div className="container w-full flex justify-center" style={{ minHeight: 'calc(100vh - 60px)' }}>
        <form className="card shadow-xl glass p-10 card-form m-10">
          <div className="form-control mt-5 animate__animated animate__fadeInUp">
            <label className="label" htmlFor="area">
              <span className="label-text">Código para diagnóstico</span>
            </label>
            <div className="alert alert-success flex justify-center mb-5">
              <h1 className="text-center">{codigo}</h1>
            </div>
            {botonVisible && (
              <button className="btn btn-primary" onClick={handleGenerateCodigo}>
                Generar Código
              </button>
            )||(<h1 className="text-center">Recuerda copiar el código para compartir con los colaboradores</h1>)}
          </div>
        </form>
      </div>
    </>
  );
}

