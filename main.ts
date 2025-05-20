import { Pista } from "./pista";
import { Administrador } from "./administracion";


const tema1=new Pista(1,"Con una Rubia en el Avion",3.2,"La Portuaria");
const tema2=new Pista(2,"Playas Oscuras",2.5,"Los Visitantes");
const tema3=new Pista(3,"Selva",4,"La Portuaria");


const spotify=new Administrador();

spotify.cargarListaReproduccion([tema1,tema2,tema3]);
spotify.informarDatosLista();

const tema4=new Pista(4,"Mal Bicho",4.1,"Los Fabulosos Cadillacs");
const tema5=new Pista(5,"19 Dias y 500 Noches",4.55,"Joaquin Sabina");

spotify.agregarTemaLista(tema4);

spotify.mostrarListaExistente();

spotify.informarDatosLista();

spotify.quitarTemaLista(tema2);

spotify.mostrarListaExistente();

spotify.agregarTemaLista(tema2);

spotify.quitarTemaLista(tema5);

spotify.mostrarListaExistente();

