<template>
  <div class="vehicle-card" @click="$emit('select-vehicle', vehicle)" v-if="vehicle" >
    <div class="vehicle-header">
      <h3>{{ vehicle.id }}</h3>
      <span :class="['vehicle-status', statusClass]">{{ vehicle.status }}</span>
    </div>
    <p><strong>Chófer:</strong> {{ vehicle.driver }}</p>
    <p><strong>Desde:</strong> {{ vehicle.startTime }}</p>
    <p><strong>Origen:</strong> {{ vehicle.location }}</p>
    <p><strong>Destino:</strong> {{ vehicle.destino }}</p>
  </div>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusClass() {
      if (this.vehicle.status === 'En tránsito') {
        return 'status-in-transit';
      } else if (this.vehicle.status === 'Completado') {
        return 'status-completed';
      } else if (this.vehicle.status === 'Planificado') {
        return 'status-planned';
      }
    }
  }
};
</script>

<style scoped>
.vehicle-card {
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  padding: 16px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-top: 2%;
  margin-left: 0;
  margin-right: 0;
  
}

.vehicle-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.vehicle-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.vehicle-header h3 {
  font-size: 1.125rem;
  font-weight: bold;
}

.vehicle-status {
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.status-in-transit {
  color: #38a169;
  background-color: #c6f6d5;
}

.status-completed {
  color: #3182ce;
  background-color: #bee3f8;
}

.status-planned {
  color: #718096;
  background-color: #e2e8f0;
}
p{
  text-align: start;
}
</style>