import React from "react";

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split(""); //Logica de Contador de Segundos, con 6 digitos y 
  // rellenando con ceros a la izquierda
  
// Divs con Bootsrap
  return (
    <div className="seconds-counter p-4 mx-auto mt-4 shadow-sm rounded-4 bg-white">
      <div className="d-flex align-items-center gap-3 mb-3">
        <i className="fa-solid fa-clock fa-2x text-primary" />
        <div>
          <h5 className="mb-0">Segundos Contados</h5>
          <small className="text-muted">Tiempo transcurrido desde que se cargó el sitio</small>
        </div>
      </div>
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        {digits.map((digit, index) => (
          <span key={index} className="digit-box d-flex align-items-center justify-content-center">
            {digit}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;
