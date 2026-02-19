<template>
  <div class="calendar-weekdays">
    <div class="weekday" v-for="day in adjustedWeekdays" :key="day">
      {{ day }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weekdays: Array,
  },
  data() {
    return {
      adjustedWeekdays: this.weekdays,
    };
  },
  watch: {
    weekdays: {
      immediate: true,
      handler() {
        this.adjustWeekdays();
      },
    },
  },
  methods: {
    adjustWeekdays() {
      const width = window.innerWidth;
      if (width <= 480) {
        this.adjustedWeekdays = ["Días del Mes"];
      } else if (width <= 768) {
        this.adjustedWeekdays = ["Días del Mes"];
      } else if (width <= 1024) {
        this.adjustedWeekdays = ["Días del Mes"];
      } else {
        this.adjustedWeekdays = this.weekdays;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.adjustWeekdays);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustWeekdays);
  },
};
</script>

<style scoped>
.calendar-weekdays {
  font-size: 1.3em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
  color: #3f495a;
  text-align: center;
  margin-bottom: 30px;
}

@media (max-width: 1024px) {
  .calendar-weekdays {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .calendar-weekdays {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .calendar-weekdays {
    grid-template-columns: 1fr;
  }
}
</style>