import React from 'react';
import '../stylesheets/Testimonio.css'

import Imagen from '../img/retrato-1.jpg'
const Testimonio = () => {
  return (
   <div className='contenedor-testimonio'>
    <img 
    className='imagen-testimonio' 
    src={Imagen}
    alt='Primer retrato'/>
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        Carlos Aguirre
      </p>
      <p className='cargo-testimonio'>Ingenieria de Software</p>
      <p className='texto-testimonio'>Siempre he querido aprender JavaScript pero nunca tuve tiempo, ahora me dedico a la ingenieria a tiempo completo</p>
    </div>
   </div>
  );
} 

export default Testimonio;