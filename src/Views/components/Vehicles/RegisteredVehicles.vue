<template>
  <div id="vehicles" class="container my-5 px-5">
    <div class="header-container d-flex justify-content-between align-items-center mb-3">
      <div class="table-header text-start">
        <h2>Todos los Vehiculos</h2>
        <p class="description">Vehiculos registrados en la Direccion General de Aduanas.</p>
      </div>
      <div class="search-input-container d-flex gap-2">
        <input
          type="text"
          placeholder="Buscar vehiculos..."
          class="form-control"
          v-model="searchQuery"
          @input="searchVehicles"
        />
        <select class="form-select" v-model="selectedStatus" @change="searchVehicles">
          <option value="Todos">Todos los estados</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </div>
    </div>
    <div class="table-responsive table-container">
      <table class="table table-hover text-center">
        <thead>
          <tr>
            <th scope="col" class="col-4 sortable" @click="sortTable('modelo')">Modelo</th>
            <th scope="col" class="col-4 sortable" @click="sortTable('placa')">Placa</th>
            <th scope="col" class="col-4 sortable" @click="sortTable('tipo')">Tipo</th>
            <th scope="col" class="col-2 sortable" @click="sortTable('color')">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in filteredVehicles" :key="vehicle.id" @click="showDetails(vehicle)">
            <td class="text-secondary">{{ vehicle.modelo }}</td>
            <td class="text-secondary">{{ vehicle.placa }}</td>
            <td class="text-secondary">{{ vehicle.tipo }}</td>
            <td class="text-secondary">{{ vehicle.color }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- Popup -->
  <div v-if="selectedVehicle" class="popup">
    <div class="popout-content">
      <h2 class="font-semibold text-md underline mb-3">Detalles del Vehículo {{ selectedVehicle.placa }}</h2>
      <p><strong>Marca:</strong> {{ selectedVehicle.marca }}</p>
      <p><strong>Modelo:</strong> {{ selectedVehicle.modelo }}</p>
      <p><strong>Placa:</strong> {{ selectedVehicle.placa }}</p>
      <p><strong>Color:</strong> {{ selectedVehicle.color }}</p>
      <p><strong>Tipo:</strong> {{ selectedVehicle.tipo }}</p>
      <p><strong>Capacidad:</strong> {{ selectedVehicle.capacidad }} pasajeros</p>
      <p><strong>Status:</strong> {{ selectedVehicle.status }}</p>
      <p><strong>Chasis:</strong> {{ selectedVehicle.chasis }}</p>
      <p><strong>Año:</strong> {{ selectedVehicle.año }}</p>
      <p><strong>Serie:</strong> {{ selectedVehicle.serie }}</p>
      <p><strong>Ficha:</strong> {{ selectedVehicle.ficha }}</p>
      <button @click="closeDetails()" class="btn btn-primary mt-3">Cerrar</button>
    </div>
  </div>
</template>

<script>
import { vehicles } from '@/Models/vehicles';

export default {
  data() {
    return {
      vehicles: vehicles,
      selectedVehicle: null,
      searchQuery: '',
      selectedStatus: 'Todos',
      sortKey: '',
      sortOrder: 1
    };
  },
  computed: {
    filteredVehicles() {
      return this.vehicles.filter(vehicle => {
        const matchesQuery = this.searchQuery.toLowerCase().split(' ').every(term =>
          vehicle.modelo.toLowerCase().includes(term) ||
          vehicle.placa.toLowerCase().includes(term) ||
          vehicle.tipo.toLowerCase().includes(term) ||
          vehicle.color.toLowerCase().includes(term) ||
          vehicle.chasis.toLowerCase().includes(term)
        );
        const matchesStatus = this.selectedStatus === 'Todos' || vehicle.status === this.selectedStatus;
        return matchesQuery && matchesStatus;
      }).sort((a, b) => {
        if (!this.sortKey) return 0;
        let valueA = a[this.sortKey]?.toString().toLowerCase() || '';
        let valueB = b[this.sortKey]?.toString().toLowerCase() || '';
        return this.sortOrder * valueA.localeCompare(valueB);
      });
    }
  },
  methods: {
    closeDetails() {
      this.selectedVehicle = null;
      document.body.style.overflow = "";
    },
    showDetails(vehicle) {
      this.selectedVehicle = vehicle;
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const popupElement = document.querySelector('.popup');
        if (popupElement) {
          popupElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    },
    searchVehicles() {
      // Método activado automáticamente por v-model
    },
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1;
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    }
  }
};
</script>



  <style scoped>
  
  /* Estilo general */
  
  body {
  
    background-color: #f8f0f0;
  
  }
  
  .sortable {
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s;
  }
  .sortable:hover {
    color: #3182ce;
  }

  #vehicles {
  
    background-color: #FFFFFF;
  
    border-radius: 6px;
  
    box-shadow: 1px 1px 1px 0px #00000040, -1px -1px 1px 0px #00000040;
  
    padding: 16px;
  
    font-family: Arial, sans-serif;
  
    font-size: 1.2em;
  
    max-width: 85%;
  
    max-height: 725px;
  
    margin: 0 auto;
  
  }
   
  .table-header h2 {
  
    font-size: 1.8rem;
  
    font-weight: bold;
  
    color: #482d2d;
  
  }
   
  .description {
  
    font-size: 1.1rem;
  
    color: #718096;
  
    margin: 0;
  
  }
   
  .table-container {
  
    max-height: 610px; /* Ajusta este valor según sea necesario */
  
    overflow-y: auto;
  
  }
   
  .table-hover tbody tr:hover {
  
    background-color: #e2eef8;
  
  }
   
  /* Estilo del popup */
  
  .popup {
  
    position: fixed;
  
    top: 0;
  
    left: 0;
  
    right: 0;
  
    bottom: 0;
  
    width: 100%;
  
    height: 100%;
  
    background-color: rgba(0, 0, 0, 0.5);
  
    z-index: 1000;
  
    display: flex;
  
    align-items: center;
  
    justify-content: center;
  
  }
   
  .popout-content {
  
    background: #fff;
  
    padding: 20px;
  
    border-radius: 8px;
  
    max-width: 500px;
  
    width: 90%;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
    text-align: center;
  
    overflow: auto;
  
    max-height: 90vh;
  
    position: relative;
  
  }
   
  .popup-header {
  
    font-size: 20px;
  
    margin-bottom: 10px;
  
  }
  </style>
   