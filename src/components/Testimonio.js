import React from 'react'; //desde el 2020 no es obligatorio para componentes sencillos
import '../stylesheets/Testimonio.css'

const Testimonio = (props) => {
  return (
   <div className='contenedor-testimonio'>
    <img 
    className='imagen-testimonio' 
    src={require(`../img//retrato-${props.img}.jpg`)}
    alt={props.alt}/>
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
       <strong>{props.nombre}</strong>  en {props.pais}
      </p>
      <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
      <p className='texto-testimonio'>"{props.testimonio}"</p>
    </div>
   </div>
  );
} 

export default Testimonio;