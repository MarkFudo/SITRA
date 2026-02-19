<template>
  <div class="calendar-nav">
    <div class="title-container">
      <h2 class="calendar-title">{{ currentMonthName }} {{ currentYear }}</h2>
    </div>
    <div class="button-container">
      <button class="nav-button" @click="prevMonth">&lt;</button>
      <button class="nav-button" @click="nextMonth">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentMonthName: String,
    currentYear: Number,
  },
  methods: {
    prevMonth() {
      if (this.$emit('prev-month')) {
        this.$emit('update-month', this.currentMonth === 0 ? 11 : this.currentMonth - 1);
        this.$emit('update-year', this.currentMonth === 0 ? this.currentYear - 1 : this.currentYear);
      }
    },
    nextMonth() {
      if (this.$emit('next-month')) {
        this.$emit('update-month', this.currentMonth === 11 ? 0 : this.currentMonth + 1);
        this.$emit('update-year', this.currentMonth === 11 ? this.currentYear + 1 : this.currentYear);
      }
    },
  },
};
</script>

<style scoped>
.calendar-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;
}

.title-container {
  flex: 1;
  text-align: left;
}

.button-container {
  display: flex;
  gap: 10px;
}

.calendar-title {
  font-size: 2rem;
  color: #1a202c;
  font-weight: bold;
  text-transform: capitalize;
}

.nav-button {
  font-size: 1.2em;
  font-weight: bold;
  background-color: #80B819;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-button:hover {
  background-color: #327e48;
}
</style>