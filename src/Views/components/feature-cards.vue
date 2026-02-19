<template>
  <div class="flex flex-wrap gap-4 p-4" style="width: 92.5%;">
    <!-- Card 1 -->
    <div class="flex-1 min-w-[23%] bg-white rounded-lg shadow-md p-4" style="width: 100%;">
      <h2 class="text-lg font-semibold text-gray-600 mb-2">Solicitudes totales</h2>
      <p class="text-4xl font-bold">{{ datos.length }}</p>
    </div>
    <!-- Card 2 -->
    <div class="flex-1 min-w-[23%] bg-white rounded-lg shadow-md p-4" style="width: 100%;">
      <h2 class="text-lg font-semibold text-gray-600 mb-2">Vehículos asignados</h2>
      <p class="text-4xl font-bold">
        {{ datosFiltrados.filter((data) => data.travel.status === 'Active').length }}
      </p>
      <p id="requestVehicles" class="text-sm text-gray-500 mt-2">Seleccione un mes</p>
    </div>
    <!-- Card 3 -->
    <div class="flex-1 min-w-[23%] bg-white rounded-lg shadow-md p-4" style="width: 100%;">
      <h2 class="text-lg font-semibold text-gray-600 mb-2">Combustible total</h2>
      <p class="text-4xl font-bold">
        {{ numberWithCommas(reportes.reduce((total, data) => total + data.fuel_consumed, 0)) }} L
      </p>
      <p id="requestFuel" class="text-sm text-gray-500 mt-2">Seleccione un mes</p>
    </div>
    <!-- Card 4 -->
    <div class="flex-1 min-w-[23%] bg-white rounded-lg shadow-md p-4" style="width: 100%;">
      <h2 class="text-lg font-semibold text-gray-600 mb-2">Choferes activos</h2>
      <p class="text-4xl font-bold">
        {{ datosFiltrados.filter((data) => data.travel.status === 'Active').length }}
      </p>
      <p id="requestDrivers" class="text-sm text-gray-500 mt-2">Seleccione un mes</p>
    </div>
  </div>

</template>

<script>
import { mockAnalitics } from '@/Models/requests'
import { report } from '@/Models/vehiclesReport';
import setMonthNumber from '@/Models/requests';
import { months } from '@/Models/requests';

export default {
  name: 'cardsFeature',
  props:['month'],
  data() {
    return {
      datos: mockAnalitics,
      reportes: report,
      months: months,
      datosFiltrados: [],
    };
  },
  methods:{
    numberWithCommas(x) {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    calculateAnaliticRequest(month){
      const totalRequestsActualMonth = this.datosFiltrados.filter((data)=>data.travel.month === month).map(data=>data.travel.monthNumber())
      console.log(totalRequestsActualMonth)

      //const totalRequestsPreviousMonth
      //const actualMonthNumber = actualMonth.travel.monthNumber();
      /*
      const lastMonth = this.datosFiltrados.filter((data)=>data.travel.monthNumber() === actualMonthNumber - 1)[0];

      const actualRequest = this.getRequestsByMonth(this.datos, actualMonth.travel.month);
      const lastRequest = this.getRequestsByMonth(this.datos, lastMonth.travel.month);

      const label = document.getElementById('requestStatistic');
      const estadistica = this.getPercentageDifferenceRequest(actualRequest, lastRequest);
      if(estadistica >= 0){
        label.textContent = `${estadistica.toFixed(2)}% desde el mes pasado`
        label.className = 'text-md text-green-600 mt-1';
      }
      else{
        label.textContent = `${estadistica.toFixed(2)}% desde el mes pasado`
        label.className = 'text-md text-red-600 mt-1'
      }*/
    },
    calculateAnaliticVehicles(month, status = 'Active'){
      const actualVehicles = this.getVehiclesActualMonth(this.datos, month);
      const previousVehicles = this.getVehiclesPreviousMonth(this.datos, month);
      const label = document.getElementById('requestVehicles');

      if(status === 'Active'){
        const resultado = actualVehicles - previousVehicles;
        if(resultado >= 0){
          label.textContent = `+${resultado} más que el mes pasado`
          label.className = 'text-md text-green-600 mt-1';
        }
        else{
          label.textContent = `${resultado} menos que el mes pasado`
          label.className = 'text-md text-red-600 mt-1';
        }
      }
    },
    calculateAnaliticFuel(month){
      const actualMonthNumber = this.getFuelActualMonth(this.reportes, month);
      const previousMonthNumber = this.getFuelPreviousMonth(this.reportes, month);
      const label = document.getElementById('requestFuel');
      const estadistica = this.getPercentageDifferenceFuel(actualMonthNumber, previousMonthNumber);

      if(estadistica >= 0){
        label.textContent = `+${estadistica.toFixed(2)}% desde el mes pasado`;
        label.className = 'text-md text-green-600 mt-1'
      }
      else{
        label.textContent = `${estadistica.toFixed(2)}% desde el mes pasado`;
        label.className = 'text-md text-red-600 mt-1'
      }
      return 
    },
    calculateAnaliticDrivers(month){
      const actualMonthDrivers = this.getDriversActualMonth(month);
      const previousMonthDrivers = this.getDriversPreviousMonth(month);
      const label = document.getElementById('requestDrivers');
      const resultado = actualMonthDrivers - previousMonthDrivers;

      if(resultado >= 0){
        label.textContent = `+${resultado} mas desde el mes pasado`;
        label.className = 'text-md text-green-600 mt-1'
      }
      else{
        label.textContent = `${resultado} mas desde el mes pasado`;
        label.className = 'text-md text-red-600 mt-1'
      }
    },
    getRequestsByMonth(requests, month){
      return requests.filter(data => data.travel.month === month).length;
    },
    getPercentageDifferenceRequest(currentMonth, previousMonth){
      if(previousMonth === 0){
        return (currentMonth - previousMonth) * 100;
      }
      return ((currentMonth - previousMonth) / previousMonth) * 100;
    },
    getPercentageDifferenceFuel(currentMonth, previousMonth){
      return ((currentMonth - previousMonth) / currentMonth) * 100; 
    },
    getVehiclesActualMonth(data, month){
      return data.filter(item => item.travel.status === 'Active' && item.travel.month === month).length;
    },
    getVehiclesPreviousMonth(data, currentMonth, status){
      const currentMonthNumber = setMonthNumber(currentMonth);
      const previousMonthNumber = currentMonthNumber === 1 ? 12 : currentMonthNumber - 1;
      const previousMonth = this.months[previousMonthNumber - 1]
      
      return data.filter(item=>item.travel.status === status && item.travel.month === previousMonth).length;
    },
    getFuelActualMonth(data, month){
      return data.filter(dato=>dato.month === month)
                 .reduce((total, request) => total + request.fuel_consumed, 0);
    },
    getFuelPreviousMonth(data, actualMonth){
      const currentMonthNumber = setMonthNumber(actualMonth);
      const previousMonthNumber = currentMonthNumber === 1 ? 12 : currentMonthNumber - 1;
      const previousMonth = this.months[previousMonthNumber - 1];

      return data.filter(dato=>dato.month === previousMonth)
                 .reduce((total, request) => total + request.fuel_consumed, 0);
    },
    getDriversActualMonth(month){
      return this.datosFiltrados.filter(data=>data.travel.status === 'Active' && data.travel.month === month).length;
    },
    getDriversPreviousMonth(actualMonth){
      const actualMonthNumber = setMonthNumber(actualMonth);
      const previousMonthNumber = actualMonthNumber === 1 ? 12 : actualMonthNumber - 1;
      const previousMonth = this.months[previousMonthNumber - 1]

      return this.datosFiltrados.filter(data=>data.travel.month === previousMonth && data.travel.status === 'Active').length;
    },
    filtrarDatos(mes){
      this.datosFiltrados = this.datos.filter((dato)=> dato.travel.month === mes);
      console.log("Datos filtrados para el mes", mes, this.datosFiltrados);
    },
    getMes(){
      return this.month
    },
    prueba(){

    }
  },
  mounted(){
    
    if(this.month){
      this.filtrarDatos(this.month);
    }
  },
  watch:{
    month:{
      immediate: true,
      handler(nuevoMes){
        if(nuevoMes){
          this.filtrarDatos(nuevoMes);
          this.calculateAnaliticRequest(nuevoMes);
          this.calculateAnaliticVehicles(nuevoMes);
          this.calculateAnaliticFuel(nuevoMes);
          this.calculateAnaliticDrivers(nuevoMes);
        }else{
          this.datosFiltrados = this.datos;
        }
      }
    }
  }
};

</script>

<style>
.grid-container {
  width: 90%;
  padding-bottom: 50px;
  gap: 40px; 
}
</style>