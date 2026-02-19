<template>
  <div id="drivert">
    <div class="table-header">
      <div>
        <h2>Rendimiento de Conductores</h2>
        <p class="description">Conductores con mejor rendimiento según el número de viajes</p>
      </div>
      <div class="search-input-container">
        <input
          type="text"
          placeholder="Buscar conductores..."
          class="search-input"
          v-model="searchQuery"
          @input="searchDrivers"
        />
        <select class="search-select" v-model="selectedStatus" @change="searchDrivers">
          <option>Todos los estados</option>
          <option>Activo</option>
          <option>Suspendido</option>
        </select>
      </div>
    </div>
  </div>
  <BaseTable
      class="basetable"
      :columns="columns"
      :data="filteredTableData"
      @row-click="filterDrivers"
    />
  <DriversModal
    v-if="selectedDriver"
    :driver="selectedDriver"
    @close-modal="closeModal"
  />
</template>

<script>
import BaseTable from './BaseTable.vue';
import { driversData } from '@/Models/driversData.js';
import DriversModal from './DriversModal.vue';

export default {
  components: { BaseTable, DriversModal },
  data() {
    return {
      columns: [
        { label: 'Conductor', field: 'name' },
        { label: 'Estado', field: 'status' },
        { label: 'Viajes', field: 'trips' },
        { label: 'Distancia (km)', field: 'distance' },
        { label: 'Tiempo (h)', field: 'time'}
      ],
      tableData: driversData,
      searchQuery: '',
      selectedStatus: 'Todos los estados',
      selectedDriver: null
    };
  },
  computed: {
    filteredTableData() {
      return this.tableData.filter(driver => {
        const matchesQuery = driver.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus = this.selectedStatus === 'Todos los estados' || driver.status === this.selectedStatus;
        return matchesQuery && matchesStatus;
      });
    }
  },
  methods: {
    filterDrivers(driver) {
      this.selectedDriver = driver;
    },
    closeModal(){
      this.selectedDriver = null;
    },
    searchDrivers(){
    }
  }
};
</script>

<style scoped>
/* Estilo del contenedor principal */
#drivert {
  margin-bottom: 1%;
  padding-bottom: 0;
  height: auto;
  width: 97%;
  background-color: #FFFFFF;
  border-radius: 6px;
  box-shadow:
    1px 1px 1px 0px #00000040,
    -1px -1px 1px 0px #00000040;
}

/* Estilo del encabezado de la tabla */
.table-header {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Estilo del contenedor de la entrada de búsqueda */
.search-input-container {
  display: flex;
  gap: 10px;
}

/* Estilo del input de búsqueda */
.search-input { 
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

/* Estilo del input de búsqueda cuando está enfocado */
.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  border-color: #3182ce;
}

/* Estilo del select de búsqueda */
.search-select {
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

/* Estilo del select de búsqueda cuando está enfocado */
.search-select:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  border-color: #3182ce;
}

/* Estilo del título y descripción */
.table-header h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3748;
}

.table-header .description {
  font-size: 1rem;
  color: #4a5568;
}

/* Media queries para pantallas más grandes */
@media (min-width: 900px) {
  .table-header {
    flex-direction: row;
    margin: 0 55px 32px;
  }

  .search-input-container {
    flex-direction: row;
    width: auto;
  }

  .search-input, .search-select {
    min-width: 200px;
  }
}
</style>