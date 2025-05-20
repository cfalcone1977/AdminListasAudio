"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pista = void 0;
var Pista = /** @class */ (function () {
    function Pista(_id, _titulo, _duracion, _interprete) {
        this.id = _id;
        this.titulo = _titulo;
        this.duracion = _duracion;
        this.interprete = _interprete;
    }
    Pista.prototype.getId = function () {
        return this.id;
    };
    Pista.prototype.getTitulo = function () {
        return this.titulo;
    };
    Pista.prototype.getDuracion = function () {
        return this.duracion;
    };
    Pista.prototype.getInterprete = function () {
        return this.interprete;
    };
    return Pista;
}());
exports.Pista = Pista;
