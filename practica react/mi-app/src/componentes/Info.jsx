import React from 'react';
import '../styles/Info.css';

function Info(props) {
  return (
    <div className='contenedor-info'>
      <img className='imagen-info' src={require(`../imagenes/${props.imagen}.png`)}  />
      <div className='contenedor-texto-info'>
      <p className='nombre-info'><strong>{props.nombre}</strong></p>
      <p className='detalles-info'>{props.detalle}</p>
      <p className='texto-info'>{props.informacion}</p>
      </div>
    </div>
  );
}

export default Info;