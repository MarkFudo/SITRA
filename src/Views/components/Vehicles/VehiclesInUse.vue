<template>
  <!-- Contenedor principal de la página -->
  <div class="page">
    <!-- Componente SearchBar para filtrar vehículos -->
    <SearchBar @filter-vehicles="filterVehicles" />
    <!-- Contenedor de las tarjetas de vehículos -->
    <div class="cards-container">
      <!-- Iteración sobre los vehículos filtrados para mostrar cada tarjeta -->
      <div v-for="vehicle in sortedFilteredVehiclesInUse" :key="vehicle.id" class="cards" :data-status="vehicle.status">
        <VehicleCard 
          :vehicle="vehicle" 
          @select-vehicle="selectVehicle"/>
      </div>
    </div>
    <!-- Modal para mostrar detalles del vehículo seleccionado -->
    <VehicleModal 
      v-if="selectedVehicle" 
      :vehicle="selectedVehicle" 
      @close-modal="closeModal" />
  </div>
</template>

<script>
import VehicleCard from './VehicleCard.vue';
import VehicleModal from './VehicleModal.vue';
import SearchBar from './SearchBar.vue';
import { getVehiclesInUse } from "@/Models/VehicleModel.js";

export default {
  components: {
    VehicleCard,
    VehicleModal,
    SearchBar,
  },
  data() {
    return {
      // Lista de vehículos en uso obtenida desde el modelo
      vehiclesInUse: getVehiclesInUse(),
      searchQuery: '',
      selectedStatus: 'Todos los estados',
      selectedVehicle: null,
    };
  },
  computed: {
    // Computed property para filtrar los vehículos según la búsqueda y el estado seleccionado
    filteredVehiclesInUse() {
      return this.vehiclesInUse.filter(vehicle => {
        const matchesQuery = vehicle.id.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus = this.selectedStatus === 'Todos los estados' || vehicle.status === this.selectedStatus;
        return matchesQuery && matchesStatus;
      });
    },
    // Computed property para ordenar los vehículos filtrados por id en orden alfabético
    sortedFilteredVehiclesInUse() {
      return this.filteredVehiclesInUse.sort((a, b) => a.id.localeCompare(b.id));
    }
  },
  methods: {
    // Método para actualizar los filtros de búsqueda
    filterVehicles({ query, status }) {
      this.searchQuery = query;
      this.selectedStatus = status;
    },
    // Método para seleccionar un vehículo y mostrar el modal
    selectVehicle(vehicle) {
      this.selectedVehicle = vehicle;
    },
    // Método para cerrar el modal
    closeModal() {
      this.selectedVehicle = null;
    }
  }
};
</script>

<style scoped>
/* Estilo del contenedor principal de la página */
.page {
  display: flex;
  flex-direction: column;
  gap: 2%;
  padding: 2%;
}

/* Estilo del contenedor de las tarjetas de vehículos */
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las tarjetas horizontalmente */
  gap: 2%;
}

/* Estilo de cada tarjeta de vehículo */
.cards {
  width: 31%;
  height: auto;
  padding: 0;
  margin: 0;
}

/* Media queries para pantallas pequeñas */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .cards {
    width: 100%;
    margin-bottom: 2%;
  }
}
</style>