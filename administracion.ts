import { Pista } from "./pista";


export class Administrador{
   private lista:Pista[];

   constructor(){
    this.lista=[];
   }

agregarTemaLista(tema:Pista){
    this.lista.push(tema);
    console.log(`El tema: ${tema.getTitulo()} a sido agregado a la lista!!`);
}

quitarTemaLista(tema:Pista){
   let posicion:number=-1;
   for (let i = 0; i < this.lista.length; i=i+1) {
         if (tema.getId()==this.lista[i].getId()){
                                         posicion=i;
                                                 }
   }
   if (posicion!=-1){
                     this.lista.splice(posicion,1);
                    }else {
                          console.warn("El tema no existe..");
                          }

}

mostrarListaExistente(){
  console.warn("---------------------------------Lista de Reproduccion--------------------------------");
  console.table(this.lista);
  console.warn("--------------------------------------------------------------------------------------");
}

cargarListaReproduccion(_lista:Pista[]){
  this.lista=_lista;
  this.mostrarListaExistente();
  console.warn("lista de reproduccion cargada...");
}

informarDatosLista(){
   let cantPistas:number=0;
   let duracionTotal:number=0;

   this.lista.forEach(pista => {
      cantPistas=cantPistas+1;
      duracionTotal=duracionTotal + pista.getDuracion();
   });
   console.warn("------------------LISTA----------------------");
   console.log(`Cantidad de Pistas   : ${cantPistas}`);
   console.log(`Duracion Lista en min: ${duracionTotal.toFixed(2)}`);
   console.warn("---------------------------------------------");
}
}