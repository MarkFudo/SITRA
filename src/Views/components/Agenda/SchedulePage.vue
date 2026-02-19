<template>
  <div>
    <div class="schedule-page">
      
      <div class="assignments-list">
        <AssignmentFilter 
          ref="assignmentFilter"
          :assignmentsForSelectedDay="assignmentsForSelectedDay"
          @updateFilteredAssignments="updateFilteredAssignments"
        />
        <AssignmentsList :assignments="filteredAssignments.length ? filteredAssignments : assignmentsForSelectedDay" :selectedDay="selectedDay" :isFiltered="isFiltered" />
      </div>
      <div class="calendar-container">
        <CalendarNav
          :currentMonthName="currentMonthName"
          :currentYear="currentYear"
          @prev-month="prevMonth"
          @next-month="nextMonth"
          @update-month="updateMonth"
          @update-year="updateYear"
        />
        <div class="calendar-card">
          <CalendarWeekdays :weekdays="weekdays" />
          <CalendarGrid 
            :daysInMonth="daysInMonth" 
            :selectedDay="selectedDay" 
            @open-modal="openModal"
            @reset-filter="resetFilter"
          />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
  import CalendarNav from "@/Views/components/CalendarNav.vue";
  import CalendarWeekdays from "@/Views/components/CalendarWeekdays.vue";
  import CalendarGrid from "@/Views/components/CalendarGrid.vue";
  import AssignmentsList from "@/Views/components/AssignmentsList.vue";
  import AssignmentFilter from "@/Views/components/AssignmentFilter.vue";
  import { getAssignmentsForDate } from "@/Models/AssignmentModel.js";

  export default {
    components: {
      CalendarNav,
      CalendarWeekdays,
      CalendarGrid,
      AssignmentsList,
      AssignmentFilter,
    },
    data() {
      return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        weekdays: ["DO", "LU", "MA", "MI", "JU", "VI", "SA"],
        selectedDay: {
          date: new Date(),
          assignments: getAssignmentsForDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
        },
        filteredAssignments: [],
        isFiltered: false,
      };
    },
    computed: {
      currentMonthName() {
        return new Date(this.currentYear, this.currentMonth).toLocaleString(
          "default",
          { month: "long" }
        );
      },
      daysInMonth() {
        const days = [];
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const lastDate = new Date(
          this.currentYear,
          this.currentMonth + 1,
          0
        ).getDate();

        for (let i = 0; i < firstDay; i++) {
          days.push({ date: "", assignments: [] });
        }

        for (let date = 1; date <= lastDate; date++) {
          const assignments = getAssignmentsForDate(this.currentYear, this.currentMonth, date);
          days.push({ date, assignments });
        }

        return days;
      },
      assignmentsForSelectedDay() {
        if (this.selectedDay) {
          return this.selectedDay.assignments;
        }
        return [];
      },
    },
    methods: {
      prevMonth() {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
      },
      nextMonth() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
      },
      updateMonth(month) {
        this.currentMonth = month;
      },
      updateYear(year) {
        this.currentYear = year;
      },
      openModal(day) {
        if (day.date) {
          this.selectedDay = {
            date: new Date(this.currentYear, this.currentMonth, day.date),
            assignments: day.assignments
          };
          this.filteredAssignments = []; // Desactivar el filtro
          this.isFiltered = false;
        }
      },
      closeModal() {
        this.selectedDay = null;
      },
      updateFilteredAssignments(filteredAssignments) {
        this.filteredAssignments = filteredAssignments;
        this.isFiltered = true;
      },
      resetFilter() {
        this.isFiltered = false;
        this.filteredAssignments = [];
        
        // Add this to clear the filter inputs
        if (this.$refs.assignmentFilter) {
          this.$refs.assignmentFilter.startDate = "";
          this.$refs.assignmentFilter.endDate = "";
          this.$refs.assignmentFilter.isFiltered = false;
        }
      },
    },
  };
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
  background-color: #f0f4f8; 
  margin: 0;
  padding: 0;
}

.schedule-page {
  padding-top: 0.1%;
  display: flex;
  flex-direction: row;
}

.assignments-list {
  width: 40%;
  padding: 1.5% 0 0 1.2%;
}

.calendar-container {
  width: 60%;
  padding: 20px;
  max-width: 95%;
  margin: auto;
}

.calendar-card {
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  padding-top: 30px;
  margin-top: 20px;
}

/* Media query for smaller screens */
@media (max-width: 1310px) {
  .schedule-page {
    padding-top: 1%;
    flex-direction: column;
  }

  .assignments-list, .calendar-container {
    width: 100%;
    padding: 10px;
  }

  .calendar-card {
    margin-top: 10px;
  }
}
</style>