<template>
  <div class="container-fluid px-5"> <!-- Added horizontal padding -->
    <!-- Encabezado con título y barra de búsqueda -->
    <div class="d-flex justify-content-between align-items-center p-3 text-center">
      <h1 class="h2 fw-bold text-dark ps-3">Vehículos Disponibles</h1>
      <div class="d-flex gap-3 pe-3">
        <input
          type="text"
          placeholder="Buscar Vehiculos..."
          class="form-control w-auto"
          v-model="searchQuery"
          @input="filterVehicles"
        />
        <select
          class="form-select w-auto"
          v-model="selectedType"
          @change="filterVehicles"
        >
          <option>Todos los vehículos</option>
          <option>Camion</option>
          <option>Furgoneta</option>
          <option>Carro</option>
        </select>
      </div>
    </div>

    <!-- Contenedor de tarjetas de vehículos -->
    <div class="row row-cols-1 row-cols-md-3 g-5 mb-4 mx-2"> <!-- Added horizontal margin -->
      <!-- Tarjeta 1: Información de un vehículo -->
      <div
        v-for="(vehicle, index) in filteredVehicles" :key="index"
        class="col"
      >
        <div
          class="card h-100 shadow-sm cursor-pointer hover-effect"
          @click="showPopup(vehicle.id, vehicle.nombre, vehicle.tipo, vehicle.condicion, 
          vehicle.nivelDeCombustible, vehicle.localizacion, vehicle.ultimoUso, vehicle.status,
          vehicle.pasoRapido, vehicle.codigoPasoRapido)"
        >
          <div class="card-body">
            <!-- Cabecera de la tarjeta con ID y estado -->
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h2 class="h5 fw-bold text-dark mb-0">{{ vehicle.nombre }}</h2>
              <span class="badge bg-success bg-opacity-5">{{ vehicle.status }}</span>
            </div>
            
            <!-- Reinstated SVG icons -->
            <p class="text-muted mb-2 d-flex align-items-center">
              <svg
                class="me-2"
                style="width: 20px; height: 20px; color: #6b7280;"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 13V10.5L4.5 7a2 2 0 011.8-1h11.4a2 2 0 011.8 1L21 10.5V13h1a1 1 0 011 1v3a2 2 0 01-2 2 1.5 1.5 0 11-3 0H7a1.5 1.5 0 11-3 0 2 2 0 01-2-2v-3a1 1 0 011-1h1zm2-2h14l-1.5-3h-11L5 11zm2.5 6a.5.5 0 100-1 .5.5 0 000 1zm11 0a.5.5 0 100-1 .5.5 0 000 1z"
                ></path>
              </svg>
              {{ vehicle.tipo }}
            </p>

            <p class="text-muted mb-2 d-flex align-items-center">
              <svg
                class="me-2"
                style="width: 20px; height: 20px; color: #6b7280;"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414L11 10.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Deposito Principal
            </p>

            <p class="text-muted mb-2 d-flex align-items-center">
              <svg
                class="me-2"
                style="width: 20px; height: 20px; color: #6b7280;"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9 1a1 1 0 100-2 1 1 0 000 2zm-5 6a1 1 0 100-2 1 1 0 000 2z"
                ></path>
              </svg>
              Nivel de Combustible: {{ vehicle.nivelDeCombustible }}%
            </p>

            <p class="text-muted mb-2 d-flex align-items-center">
              <svg
                class="me-2"
                style="width: 20px; height: 20px; color: #6b7280;"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zM5 7v9h10V7H5zm3 3a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
                ></path>
              </svg>
              Ultimo uso: {{ vehicle.ultimoUso }}
            </p>

            <p class="text-muted mb-0 d-flex align-items-center">
              <svg
                class="me-2"
                style="width: 20px; height: 20px; color: #22c55e;"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="8" />
              </svg>
              Estado: {{ vehicle.status }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal emergente -->
    <div
      v-if="popupVisible"
      class="modal-backdrop"
    >
      <div
        class="modal d-block"
        tabindex="-1"
        style="display: flex !important; align-items: center;"
      >
        <div class="modal-dialog modal-dialog-centered"> <!-- Added centering -->
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold text-dark">Detalles del vehículo {{ popupDetails.nombre }}</h5>
              <button
                type="button"
                class="btn-close"
                @click="popupVisible = false"
              ></button>
            </div>
            <div class="modal-body">
              <p><strong>Tipo:</strong> {{ popupDetails.type }}</p>
              <p><strong>Condicion:</strong> {{ popupDetails.condition }}</p>
              <p><strong>Nivel de combustible:</strong> {{ popupDetails.fuel }}</p>
              <p><strong>Direccion:</strong> {{ popupDetails.location }}</p>
              <p><strong>Ultimo uso:</strong> {{ popupDetails.lastUsed }}</p>
              <p v-if="!popupDetails.pasoRapido"><strong>Paso Rápido:</strong> No</p>
              <p v-else><strong>Código de pase rápido:</strong> {{ popupDetails.codigoPasoRapido }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { vehicleData } from '@/Models/janmorant';

export default {
  data() {
    return {
      popupVisible: false,
      popupDetails: {
        id: '',
        nombre: '',
        type: '',
        condition: '',
        fuel: '',
        location: '',
        lastUsed: '',
        status: '',
        pasoRapido: '',
        codigoPasoRapido: ''
      },
      datos: vehicleData,
      searchQuery: '',
      selectedType: 'Todos los vehículos'
    };
  },
  computed: {
    filteredVehicles() {
      return this.datos.filter(vehicle => {
        const matchesQuery = vehicle.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesType = this.selectedType === 'Todos los vehículos' || vehicle.tipo === this.selectedType;
        return matchesQuery && matchesType;
      });
    }
  },
  methods: {
    showPopup(id, nombre, type, condition, fuel, location, lastUsed, status, pasoRapido, codigoPasoRapido) {
      this.popupDetails = { id, nombre, type, condition, fuel, location, lastUsed, status, pasoRapido, codigoPasoRapido };
      this.popupVisible = true;
    },
    filterVehicles() {
      // Este método se llama automáticamente debido a la reactividad de Vue
    }
  }
};
</script>

<style scoped>
.hover-effect:hover {
  transform: translateY(-5px);
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Modal positioning */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

/* Custom modal dialog centering */
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
</style>