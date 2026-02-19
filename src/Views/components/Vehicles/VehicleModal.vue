<template>
  <div class="modal" @click.self="$emit('close-modal')">
    <div class="modal-content">
      <!-- Icono para cerrar el modal -->
      <span class="close-icon" @click="$emit('close-modal')">&times;</span>

      <!-- Contenido del modal -->
      <h3 class="font-semibold text-md underline">Detalles de {{ vehicle.id }}</h3>
      <p><strong>Chófer:</strong> {{ vehicle.driver }}</p>
      <p><strong>Desde:</strong> {{ vehicle.startTime }}</p>
      <p><strong>Origen:</strong> {{ vehicle.location }}</p>
      <p><strong>Destino:</strong> {{ vehicle.destino }}</p>
      <p><strong>Estado:</strong> {{ vehicle.status }}</p>
      <p><strong>Solicitante:</strong> {{ vehicle.solicitante }}</p>
      <p><strong>Propósito:</strong> {{ vehicle.purpose }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleModal',
  props: {
    vehicle: Object, // Información del vehículo a mostrar
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 472px;
  width: 100%;
  position: relative; /* Necesario para posicionar la X */
  text-align: center;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.close-icon:hover {
  background-color: #ddd;
}

h3 {
  margin-bottom: 20px;
}
</style>