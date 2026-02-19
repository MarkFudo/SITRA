<template>
  <div class="container mt-4 bg-light p-4">
    <h2 class="font-bold">Viajes Asignados</h2> <br>
    <div class="list-group">
      <div
        v-for="viaje in viajes"
        :key="viaje.id"
        class="list-group-item"
      >
        <h5><strong>Viaje:</strong> {{ viaje.viajeRelacionado || "No especificado" }}</h5>
        <p>
          <strong>Conductor:</strong> {{ viaje.nombreConductor }}<br />
          <strong>Licencia:</strong> {{ viaje.licenciaConductor }}<br />
          <strong>Teléfono:</strong> {{ viaje.telefonoConductor }}<br />
          <strong>Vehículo:</strong> {{ obtenerNombreVehiculo(viaje.vehiculoAsignado) }}<br />
          <strong>Supervisor:</strong> {{ viaje.supervisorAsignado }}<br />
        </p>
        <button
          class="btn btn-danger btn-sm"
          @click="$emit('eliminar-viaje', viaje.id)"
        >
          Eliminar
        </button>
      </div>
    </div>
    <p>No hay viajes asignados aún.</p>
  </div>
</template>

<script>
export default {
  props: {
    viajes: {
      type: Array,
      required: true,
    },
    vehiculos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    obtenerNombreVehiculo(vehiculoId) {
      const vehiculo = this.vehiculos.find((v) => v.id === vehiculoId);
      return vehiculo ? vehiculo.nombre : "Desconocido";
    },
  },
};
</script>

<style>
.container {
  max-width: 800px;
}

.list-group-item {
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.btn-danger {
  float: right;
}
</style>
