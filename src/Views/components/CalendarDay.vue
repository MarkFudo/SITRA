<template>
  <div 
    :class="['calendar-day', { selected: isSelected, 'no-hover': !day.assignments.length && !day.date }]" 
    @click="selectDay"
  >
    <div class="day-header">{{ day.date }}</div>
    <div v-if="day.assignments.length > 0" class="assignment-count">
      {{ day.assignments.length === 1 ? '1 asignación' : day.assignments.length + ' asignaciones' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: Object,
    isSelected: Boolean,
  },
  methods: {
    selectDay() {
      this.$emit("open-modal", this.day);
      this.$emit("reset-filter"); 
      this.$parent.$parent.resetFilter(); // Adjust based on your component hierarchy
    },
  },
};
</script>

<style scoped>
.calendar-day {
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  min-height: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.calendar-day:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
}

.no-hover:hover {
  box-shadow: none;
  transform: none;
  cursor: default;
}

.day-header {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2d3748;
  margin-bottom: 5px;
}

.assignment-count {
  font-size: 0.9rem;
  color: #1994c5;
  margin-bottom: 10px;
}

.assignment-list {
  font-size: 0.85rem;
}

.assignment-item {
  font-weight: bold;
  background-color: #fff;
  padding: 3px 6px;
  border-radius: 30px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  box-shadow: inset 0 0 3px gray;
}

.more-assignments {
  color: #718096;
}

/* Nueva clase para el día seleccionado */
.selected {
  border-color: #3182ce;
  background-color: #ebf8ff;
  box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);
}
</style>