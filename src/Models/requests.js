export const mockAnalitics = [
    {
        id: 1,
        nameRequester: 'Pablo Frias',
        travel:
        {
            vehicleAssigned: 'Toyota Corolla 2005',
            matricula: 'A4578G92',
            color: 'Negro',
            tipo: 'Sedan',
            capacidad: 4,
            driver: 'Antonio de la Masa',
            status: 'Active',
            month: 'Enero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 2,
        nameRequester: 'Enrique Tavarez',
        travel:
        {
            vehicleAssigned: 'Honda Civic 2016',
            matricula: 'T569850E',
            color: 'Rojo',
            tipo: 'Sedan',
            capacidad: 3,
            driver: 'Mercedes Ledesma',
            status: 'Inactive',
            month: 'Febrero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 3,
        nameRequester: 'Freivel Hirujo',
        travel:
        {
            vehicleAssigned: 'Dodge RAM 1994',
            matricula: 'G023F9E2',
            color: 'Gris',
            tipo: 'Camioneta',
            capacidad: 6,
            driver: 'Alan de Jesus',
            status: 'Active',
            month: 'Marzo',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 4,
        nameRequester: 'Benito de la Cruz',
        travel:
        {
            vehicleAssigned: 'Daihatsu Delta 2004',
            matricula: 'A689G3J9',
            color: 'Blanco',
            tipo: 'Hatchback',
            capacidad: 2,
            driver: 'Felipe Polanco',
            status: 'Active',
            month: 'Abril',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 5,
        nameRequester: 'Irma Angelica',
        travel:
        {
            vehicleAssigned: 'Toyota Vitz 2010',
            matricula: 'A902Y6H5',
            color: 'Crema',
            tipo: 'Hatchback',
            capacidad: 3,
            driver: 'Antonio de la Masa',
            status: 'Inactive',
            month: 'Febrero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 6,
        nameRequester: 'Victor Peña',
        travel:
        {
            vehicleAssigned: 'BMW X5 2024',
            matricula: 'A09F8L74',
            color: 'Negro',
            tipo: 'SUV',
            capacidad: 6,
            driver: 'Fausto Murillo',
            status: 'Inactive',
            month: 'Enero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 7,
        nameRequester: 'Mia Ramirez',
        travel:
        {
            vehicleAssigned: 'Chevrolet Tahoe 2023',
            matricula: 'A84G8M91',
            color: 'Gris',
            tipo: 'SUV',
            capacidad: 8,
            driver: 'Alberto Jimenez',
            status: 'Inactive',
            month: 'Mayo',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 8,
        nameRequester: 'Santos Guzman',
        travel:
        {
            vehicleAssigned: 'Lincoln Navigator 2024',
            matricula: 'A0002034',
            color: 'Negro',
            tipo: 'SUV',
            capacidad: 8,
            driver: 'Alberto Jimenez',
            status: 'Inactive',
            month: 'Enero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 9,
        nameRequester: 'Santiago Matias',
        travel:
        {
            vehicleAssigned: 'Peugeot 3006 2012',
            matricula: 'T82I5G03',
            color: 'Verde',
            tipo: 'SUV',
            capacidad: 4,
            driver: 'Fausto Murillo',
            status: 'Active',
            month: 'Marzo',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 10,
        nameRequester: 'Luis Molina',
        travel:
        {
            vehicleAssigned: 'Chevrolet Silverado 2017',
            matricula: 'A51285F2',
            color: 'Blanco',
            tipo: 'Camioneta',
            capacidad: 4,
            driver: 'Hector Cruz',
            status: 'Active',
            month: 'Febrero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    },
    {
        id: 11,
        nameRequester: 'Freivel Hirujo',
        travel:
        {
            vehicleAssigned: 'Daihatsu Mira 2013',
            matricula: 'Y90O3R5J2',
            color: 'Crema',
            tipo: 'Hacthback',
            capacidad: 3,
            driver: 'Jose Ambrioris Sierra',
            status: 'Inactive',
            month: 'Enero',
            monthNumber: function () {
                return setMonthNumber(this.month)
            }
        }
    }
]

export const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export default function setMonthNumber(month) {
    return months.indexOf(month) + 1;
}