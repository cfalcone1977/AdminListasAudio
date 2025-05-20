export class Pista{
    private id:number;
    private titulo:string;
    private duracion:number;
    private interprete:string;
   constructor(_id:number,_titulo:string,_duracion:number,_interprete:string){
     this.id=_id;
     this.titulo=_titulo;
     this.duracion=_duracion;
     this.interprete=_interprete;
   }
   
   getId():number{
    return this.id;
   }
   getTitulo():string{
    return this.titulo;
   }
   getDuracion():number{
    return this.duracion;
   }
   getInterprete():string{
    return this.interprete;
   }
}





