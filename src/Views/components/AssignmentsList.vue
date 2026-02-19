<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="assignment-card">
      <div class="assignment-header">
        <span class="header-item">Vehículo</span>
        <span class="header-item">Motivo</span>
        <span class="header-item">Chofer</span>
      </div>
      <ul class="assignment-list">
        <li v-if="assignments.length === 0 || (assignments[0] && assignments[0].message)">
          No existen viajes registrados para este periodo.
        </li>
        <li v-else v-for="(assignment, index) in assignments" :key="index" class="assignment-item">
          <div class="assignment-details">
            <span class="vehicle">{{ assignment.vehicle }}</span>
            <span class="reason">{{ assignment.reason }}</span>
            <span class="driver">{{ assignment.driver }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    assignments: Array,
    selectedDay: Object,
    currentMonthName: String,
    isFiltered: Boolean,
  },
  computed: {
    selectedDayWeekday() {
      if (!this.selectedDay || !this.selectedDay.date) return "";
      return this.getWeekday(this.selectedDay.date);
    },
    title() {
      return this.isFiltered 
        ? "Asignaciones entre fechas indicadas" 
        : `Asignaciones para el ${this.selectedDayWeekday} ${this.selectedDay.date.getDate()}`;
    }
  },
  methods: {
    getWeekday(date) {
      const day = new Date(date).toLocaleString("default", { weekday: "long" });
      return day.charAt(0).toUpperCase() + day.slice(1);
    },
  },
};
</script>
  
<style scoped>
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2d3748;
  }
  
  .assignment-card {
        border: 2px solid #ddd;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 16px;
        min-height: 575px; /* Altura mínima */
    }
  
  .assignment-header {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #4a5568;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 8px;
  }
  
  .header-item {
    flex: 1;
    text-align: center;
  }
  
  .assignment-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .assignment-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .assignment-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #4a5568;
  }
  
  .vehicle, .reason, .driver {
    flex: 1;
    text-align: center;
  }
  
  .vehicle {
    background-color: #edf2f7;
    padding: 2px 6px;
    border-radius: 4px;
    color: #2d3748;
  }
  
  .reason {
    font-style: italic;
    color: #718096;
  }
  
  .driver {
    font-size: 0.85rem;
    color: #2d3748;
  }
</style>