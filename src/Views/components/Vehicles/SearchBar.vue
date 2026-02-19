<template>
  <!-- Contenedor principal del SearchBar -->
  <div class="search-bar">
    <!-- Título del SearchBar -->
    <h2>Vehículos actualmente en uso</h2>
    <!-- Controles de búsqueda: input de texto y select -->
    <div class="search-controls">
      <div class="search-input-container">
        <!-- Input de texto para buscar vehículos -->
        <input
          type="text"
          placeholder="Buscar vehículos..."
          class="search-input"
          v-model="searchQuery"
          @input="filterVehicles"
        />
      </div>
      <!-- Select para filtrar por estado -->
      <select class="search-select" v-model="selectedStatus" @change="filterVehicles">
        <option>Todos los estados</option>
        <option>Planificado</option>
        <option>En tránsito</option>
        <option>Completado</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Estado local para la consulta de búsqueda y el estado seleccionado
      searchQuery: '',
      selectedStatus: 'Todos los estados'
    };
  },
  methods: {
    // Método para emitir un evento con los filtros de búsqueda
    filterVehicles() {
      this.$emit('filter-vehicles', { query: this.searchQuery, status: this.selectedStatus });
    }
  }
};
</script>

<style scoped>
/* Estilo del contenedor principal del SearchBar */
.search-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 32px;
}

/* Estilo del título del SearchBar */
.search-bar h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2d3748;
  text-align: center;
}

/* Estilo de los controles de búsqueda */
.search-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
}

/* Estilo del contenedor del input de búsqueda */
.search-input-container {
  position: relative;
  width: 100%;
}

/* Estilo del input de búsqueda */
.search-input {
  width: 100%;
  padding: 8px 16px;
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
  width: 100%;
  padding: 8px 16px;
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

/* Media queries para pantallas más grandes */
@media (min-width: 900px) {
  .search-bar {
    flex-direction: row;
    margin: 0 55px 32px;
  }

  .search-controls {
    flex-direction: row;
    width: auto;
  }

  .search-input-container, .search-select {
    width: auto;
  }
}
</style>