<template>
    <div id="vehicles" class="container my-8 px-3">
      <div class="header-container row align-items-start mb-3">
        <div class="col-md-6">
          <h2 class="fw-bold fs-3">Gestión de Vehículos</h2>
          <p class="text-muted">Añade, edita o elimina vehículos.</p>
        </div>
        <div class="col-md-6 d-flex flex-wrap justify-content-end">
          <select v-model="filterStatus" class="form-select me-2 mb-2 mb-md-0 w-auto">
            <option value="todos">Todos</option>
            <option value="activos">Activos</option>
            <option value="inactivos">Inactivos</option>
          </select>
          <input type="text" placeholder="Buscar vehículos..." class="form-control me-2 mb-2 mb-md-0" v-model="searchQuery" style="max-width: 200px;"/>
          <button class="btn btn-success" @click="showAddVehicleModal">+ Agregar</button>
        </div>
      </div>
  
      <div class="table-responsive">
        <table class="table table-hover text-cente">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Tipo</th>
              <th>Modelo</th>
              <th>Estatus</th>
              <th>Motivo</th>
              <th>Archivo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="vehicle in filteredVehicles" :key="vehicle.id" style="cursor: pointer;">
              <td>{{ vehicle.placa }}</td>
              <td>{{ vehicle.tipo }}</td>
              <td>{{ vehicle.modelo }}</td>
              <td :class="{ 'text-success': vehicle.status, 'text-danger': !vehicle.status }">
                {{ vehicle.status ? 'Activo' : 'Inactivo' }}
              </td>
              <td>{{ vehicle.motivo || 'N/A' }}</td>
              <td>
                <a v-if="vehicle.archivo" :href="vehicle.archivo" target="_blank" class="btn btn-sm btn-info">Ver</a>
                <span v-else>-</span>
              </td>
              <td>
                <div class="d-flex justify-content-around">
                  <button class="btn btn-primary btn-sm me-1" @click.stop="editVehicle(vehicle)">Editar</button>
                  <button class="btn btn-danger btn-sm" @click.stop="deleteVehicle(vehicle.id)">Eliminar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Modal Bootstrap -->
      <div v-if="isModalOpen" class="modal fade show d-block justify-content-center align-content-center" tabindex="-1" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ editingVehicle ? "Editar Vehículo" : "Agregar Vehículo" }}</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <label>Placa:</label>
              <input v-model="vehicleForm.placa" class="form-control mb-2" />
  
              <label>Tipo:</label>
              <input v-model="vehicleForm.tipo" class="form-control mb-2" />
  
              <label>Modelo:</label>
              <input v-model="vehicleForm.modelo" class="form-control mb-2" />
  
              <label>Estatus:</label>
              <select v-model="vehicleForm.status" class="form-select mb-2">
                <option :value="true">Activo</option>
                <option :value="false">Inactivo</option>
              </select>
  
              <div v-if="!vehicleForm.status">
                <label>Motivo de Inactividad:</label>
                <textarea v-model="vehicleForm.motivo" class="form-control mb-2" placeholder="Escribe el motivo..."></textarea>
  
                <label>Adjuntar Archivo:</label>
                <input type="file" @change="handleFileUpload" class="form-control mb-2" />
              </div>
            </div>
            <div class="modal-footer">
              <button @click="saveVehicle" class="btn btn-success">Guardar</button>
              <button @click="closeModal" class="btn btn-secondary">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        vehicles: [
          { id: 1, placa: "ABC123", tipo: "Camión", modelo: "Ford F-150", status: true, motivo: "", archivo: "" },
          { id: 2, placa: "XYZ789", tipo: "Sedán", modelo: "Toyota Corolla", status: false, motivo: "Motor dañado", archivo: ""},
          { id: 3, placa: "DEF456", tipo: "Camioneta", modelo: "Chevrolet Silverado", status: true, motivo: "", archivo: "" },
          { id: 4, placa: "DEF456", tipo: "Camioneta", modelo: "Chevrolet Silverado", status: true, motivo: "", archivo: "" },
          { id: 5, placa: "DEF456", tipo: "Camioneta", modelo: "Chevrolet Silverado", status: true, motivo: "", archivo: "" },
        ],
        searchQuery: '',
        filterStatus: 'todos',
        isModalOpen: false,
        editingVehicle: null,
        vehicleForm: { id: null, placa: '', tipo: '', modelo: '', status: true, motivo: '', archivo: '' },
      };
    },
    computed: {
      filteredVehicles() {
        return this.vehicles.filter(vehicle => {
          const queryMatch = this.searchQuery.toLowerCase();
          const statusMatch =
            this.filterStatus === "todos" ||
            (this.filterStatus === "activos" && vehicle.status) ||
            (this.filterStatus === "inactivos" && !vehicle.status);
  
          return (
            statusMatch &&
            (vehicle.tipo.toLowerCase().includes(queryMatch) ||
            vehicle.modelo.toLowerCase().includes(queryMatch) ||
            vehicle.placa.toLowerCase().includes(queryMatch))
          );
        });
      },
    },
    methods: {
      showAddVehicleModal() {
        this.editingVehicle = null;
        this.vehicleForm = { id: null, placa: '', tipo: '', modelo: '', status: true, motivo: '', archivo: '' };
        this.isModalOpen = true;
      },
      editVehicle(vehicle) {
        this.editingVehicle = vehicle;
        this.vehicleForm = { ...vehicle };
        this.isModalOpen = true;
      },
      saveVehicle() {
        if (this.editingVehicle) {
          // Editar vehículo existente
          const index = this.vehicles.findIndex(v => v.id === this.editingVehicle.id);
          if (index !== -1) {
            this.vehicles[index] = { ...this.vehicleForm };
          }
        } else {
          // Agregar nuevo vehículo
          this.vehicleForm.id = Date.now();
          this.vehicles.push({ ...this.vehicleForm });
        }
        this.closeModal();
      },
      deleteVehicle(id) {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
      },
      closeModal() {
        this.isModalOpen = false;
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.vehicleForm.archivo = URL.createObjectURL(file);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos Generales */
  .container {
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 85%;
  }
  
  .table-container {
    max-height: 300px;
    overflow-y: auto;
  }
  
  .text-success {
    color: green;
    font-weight: bold;
  }
  
  .text-danger {
    color: red;
    font-weight: bold;
  }
  
  /* Modal */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popout-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .popout-content input,
  .popout-content select,
  .popout-content textarea {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .btn + .btn {
    margin-left: 10px; /* Ajusta el valor según el espacio deseado */
  }
  
  </style>
  