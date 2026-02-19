<template>
    <div class="graphs-containers"

    >
      <!-- Instalar estas dependencias: -->
      <!-- yarn add chart.js
      yarn add pug pug-plain-loader --dev -->
      <!-- yarn add chart.js vue-chartjs -->

      
      <!-- Victor -->
      <div class="request-attended-bar shadow-lg"> 
        <Chart type="bar" :data="chartData" :options="chartOptions"
        class="bar charts">
          
        </Chart>

      </div>
      
      <!-- Cristhian -->
      <div class="fuel-consumption-chart shadow-lg"> 
                <Chart type="line" :data="lineChartData" :options="lineChartOptions"
        class="line charts">
          
        </Chart>

      </div>
    </div>
</template>
<script setup>
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'vue-chartjs';
import { mockAnalitics } from '@/Models/requests';
import { report } from '@/Models/vehiclesReport';

// Registrar todos los elementos de Chart.js
ChartJS.register(...registerables);

const countRequests = mockAnalitics.reduce((acc, req) => {
  if(req.travel.month){
    acc[req.travel.month] = (acc[req.travel.month] || 0) + 1;
  }
  return acc;
}, {});

const amountRequests = Object.values(countRequests);

const countFuel = report.reduce((acc, entry) => {
  acc[entry.month] = (acc[entry.month] || 0) + entry.fuel_consumed;
  return acc;
}, {});

const labels = [...new Set(mockAnalitics.map(entry => entry.travel.month))];


const chartData = {
  labels: labels,
  datasets: [
    { 
      label: 'Solicitudes',
      data: amountRequests,
      backgroundColor: ['#80B819'],
    },
  ],
};

  // Opciones para el gráfico
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  
  scales: {
    y: {
      display: false,
    },
  },
};



const lineChartData = {
  labels: labels,
  datasets: [
    {
      label: 'Consumo de Combustible',
      data: countFuel, // Datos del gráfico lineal
      borderColor: '#36A2EB',    // Color de la línea
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de relleno bajo la línea
      borderWidth: 2,
      tension: 0.4, // Suaviza las curvas de la línea
    },
  ],
};
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
      display: false
    },
  },
};
</script>


<style>
.request-attended-bar{
  background-color: #FFFFFF;
  width: 100%;
  height: 330;
  text-align: end;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  padding: 20px;
}
.graphs-containers{
  display: flex;
  overflow-x: auto;
  width: 90%;
  height: 330;
  justify-content: center;
  flex-direction: row;
  gap: 40px;
  padding-bottom: 50px;
  overflow-y: auto;
}

.fuel-consumption-chart{
  background-color: #FFFFFF;
  width: 100%;
  height: 330;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  justify-content: center;
  padding: 20px;
}
.charts{
  width: 100%;
}


</style>