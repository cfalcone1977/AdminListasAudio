"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Administrador = void 0;
var Administrador = /** @class */ (function () {
    function Administrador() {
        this.lista = [];
    }
    Administrador.prototype.agregarTemaLista = function (tema) {
        this.lista.push(tema);
        console.log("El tema: ".concat(tema.getTitulo(), " a sido agregado a la lista!!"));
    };
    Administrador.prototype.quitarTemaLista = function (tema) {
        var posicion = -1;
        for (var i = 0; i < this.lista.length; i = i + 1) {
            if (tema.getId() == this.lista[i].getId()) {
                posicion = i;
            }
        }
        if (posicion != -1) {
            this.lista.splice(posicion, 1);
        }
        else {
            console.warn("El tema no existe..");
        }
    };
    Administrador.prototype.mostrarListaExistente = function () {
        console.warn("---------------------------------Lista de Reproduccion--------------------------------");
        console.table(this.lista);
        console.warn("--------------------------------------------------------------------------------------");
    };
    Administrador.prototype.cargarListaReproduccion = function (_lista) {
        this.lista = _lista;
        this.mostrarListaExistente();
        console.warn("lista de reproduccion cargada...");
    };
    Administrador.prototype.informarDatosLista = function () {
        var cantPistas = 0;
        var duracionTotal = 0;
        this.lista.forEach(function (pista) {
            cantPistas = cantPistas + 1;
            duracionTotal = duracionTotal + pista.getDuracion();
        });
        console.warn("------------------LISTA----------------------");
        console.log("Cantidad de Pistas   : ".concat(cantPistas));
        console.log("Duracion Lista en min: ".concat(duracionTotal.toFixed(2)));
        console.warn("---------------------------------------------");
    };
    return Administrador;
}());
exports.Administrador = Administrador;
