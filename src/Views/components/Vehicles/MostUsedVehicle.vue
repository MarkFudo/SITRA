<template>
 <div class="min-vh-100 py-6">
    <div class="container contenedor">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h2 fw-semibold text-dark mb-0">Vehículos mas usados - 2024</h1>
        <div class="d-flex p-3 gap-3">
          <select 
            v-model="selectedType"
            class="form-select p-2 font shadow-sm border"
          >
            <option value="">Todos los vehículos</option>
            <option v-for="data in types" :key="data" :value="data">{{ data }}</option>
          </select>
          <!-- <select class="form-select p-2 font shadow-sm border">
            <option>Departamento</option>
          </select> -->
        </div>
      </div>

      <!-- Dashboard Grid -->
      <div class="row g-4 py-4">
        <!-- Usage Statistics -->
        <div class="col-12 col-md-6">
          <div class="card border shadow-sm h-100">
            <div class="card-body p-4">
              <h2 class="h4 fw-semibold text-dark mb-4">Estadísticas de uso</h2>
              <div class="h-100">
                <div class="chart h-100 pt-4">
                  <Chart type="bar" :data="graphData" :options="chartOptions" class="chart" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle Rankings -->
        <div class="col-12 col-md-6">
          <div class="card border shadow-sm h-100">
            <div class="card-body p-4">
              <h2 class="h4 fw-semibold text-dark mb-4">Clasificación de vehículos</h2>
              <div class="d-flex flex-column gap-3">
                <div 
                  v-for="vehicle in filterChartData.sort((a, b) => b.hours - a.hours)" 
                  :key="vehicle.id"
                  class="d-flex justify-content-between align-items-center"
                >
                  <span class="text-dark small">{{ vehicle.matricula }}</span>
                  <span class="border-bottom flex-grow-1 mx-2"></span>
                  <span class="text-secondary small">{{ vehicle.hours }} Horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart';
import { vehicles } from '@/Models/mostUsedVehicles';

export default {
  name: 'MostUsedVehicle',
  components: {
    Chart,
  },
  data() {
    return {
      selectedType: "",
      datos: vehicles,
      types: [],

      chartOptions: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              display: true,
              font: {
                size: 13,
              },
              precision: 0
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
        }
      }
    };
  },
  mounted() {
    this.prepareTypes();
    this.logVehicles();
  },
  methods: {
    prepareTypes() {
      this.types = [...new Set(this.datos.map((dato) => dato.type))];
    },
    logVehicles() {
      const data = this.datos.map((dato) => dato.hours);
      console.log(data.sort((a, b) => b - a));
    },
  },
  computed: {
    filterChartData() {
      if (!this.selectedType) {
        return this.datos;
      }
      return this.datos.filter(
        (data) => data.type === this.selectedType
      );
    },
    graphData() {
      const datos = [...this.filterChartData].sort((a, b) => b.hours - a.hours);
      const labels = datos.map((data) => data.matricula)
      const hours = datos.map((data) => data.hours);

      return {
        labels: labels,
        datasets: [
          {
            label: 'Horas',
            data: hours,
            backgroundColor: ['#68a88e'],
          },
        ],
      };
    },
  },
};

</script>

<style scoped>
h1 {
  text-align: center;
}

.chart {
  width: 100%;
  overflow-y: auto;
  margin: 0 auto;
}

.contenedor {
  height: 90%;
  padding: 20px;
  min-width: 100%;
}

.rankings {
  padding: 25px;
  padding-top: 40px;
  line-height: 2;
}

.font{
  font-size: 14px;
  color: gray;
  width: 170px;
}

.line {
  width: 50%;
  height: 0.5px;
  background-color: black;
}
</style>