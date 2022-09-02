import React from "react";
//se tiene que importar el archivo css para aplicar los estilos hechos
import '../stylesheets/Testimonio.css' //Ademas se tiene que poner la extension css

//Para mostrar el componente se debe renderizar y asi puede verse en la pantalla del usurio
function Testimonio(props) { 
  return (
    <div className='contenedor-testimonio'>\
        <img 
        className='imagen-testimonio'
        //Para lograr meter js dentro de las `` se tiene que poner siempre  ->  ${}
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} //require es necesario para poner una imagen 
        alt= 'foto de dj'
        />
      <div className='contenedor-texto-testimonio' >
       <p className='nombre-testimonio'> <strong> {props.nombre} </strong> experiencia en Cars 1 </p>
       <p  className='cargo-testimonio'> {props.cargo} en la escena <strong>{props.escena}</strong> </p>
        <p  className='texto-testimonio'>"{props.testimonio}"</p>
     </div >

    </div>
  );
}

//se debe exportar el archivo, si no, tira error al importar
/*
Se puede exportar por 2 maneras
1. Por defecto
2. Nombrada
*/
export  default Testimonio; // esta es por defecto