export default class Vehicle {
    constructor(id, nombre, tipo, condicion, nivelDeCombustible, localizacion, ultimoUso, status, pasoRapido, codigoPasoRapido) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.condicion = condicion;
        this.nivelDeCombustible = nivelDeCombustible;
        this.localizacion = localizacion;
        this.ultimoUso = ultimoUso;
        this.status = status;
        this.pasoRapido = pasoRapido;
        this.codigoPasoRapido = codigoPasoRapido;

    }

}

export const vehicleData = [
    new Vehicle(1, 'TRK002', 'Carro', 'Buen estado', 100, 'Distrino Nacional', '2021-01-01', 'Disponible', true, 42423),
    new Vehicle(2, 'VAN001', 'Furgoneta', 'Buen estado', 100, 'Distrino Nacional', '2021-01-01', 'Disponible', false,),
    new Vehicle(3, 'TRK003', 'Camion', 'Buen estado', 100, 'Distrino Nacional', '2021-01-01', 'Disponible', true,63439),
    new Vehicle(4, 'CAR003', 'Carro', 'Buen estado', 100, 'Distrino Nacional', '2021-01-01', 'Disponible',false,),
    new Vehicle(5, 'VAN002', 'Furgoneta', 'Buen estado', 100, 'Distrino Nacional', '2021-01-01', 'Disponible', true,53450),
]