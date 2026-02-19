<template>
  <div class="calendar-grid">
    <CalendarDay
      v-for="(day, index) in daysInMonth"
      :key="index"
      :day="day"
      :isSelected="day.date === selectedDay.date"
      @open-modal="$emit('open-modal', day)"
      @reset-filter="$emit('reset-filter')"
    />
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue';

export default {
  components: {
    CalendarDay,
  },
  props: {
    daysInMonth: Array,
    selectedDay: Object,
  },
};
</script>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

@media (max-width: 1024px) {
  .calendar-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 768px) {
  .calendar-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 480px) {
  .calendar-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 320px) {
  .calendar-grid {
    grid-template-columns: 1fr;
  }
}
</style>