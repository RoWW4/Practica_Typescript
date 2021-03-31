"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
//Hacemos la clase Direccion exportable
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, cod_postal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cod_postal = cod_postal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cod_postal", {
        get: function () {
            return this._cod_postal;
        },
        set: function (value) {
            this._cod_postal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (value) {
            this._poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
