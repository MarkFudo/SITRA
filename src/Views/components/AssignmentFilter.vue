<template>
  <div class="filter-container">
    <input type="date" v-model="startDate" class="date-input" />
    <input type="date" v-model="endDate" class="date-input" />
    <button @click="filterAssignments" class="btn">Filtrar</button>
    <button @click="exportToExcel" class="btn">Exportar a Excel</button>
  </div>
  <div ref="assignmentsList">
    <AssignmentsList :assignments="filteredAssignments.length ? filteredAssignments : assignmentsForSelectedDay" :isFiltered="isFiltered" />
  </div>
</template>

<script>
  import { getAssignmentsBetweenDates } from "@/Models/AssignmentModel.js";
  import * as XLSX from "xlsx";

  export default {
    props: {
      assignmentsForSelectedDay: Array,
      isFiltered: Boolean
    },
    watch: {
      isFiltered(newVal) {
        if (!newVal) {
          this.startDate = "";
          this.endDate = "";
          this.filteredAssignments = [];
        }
      }
    },
    data() {
      return {
        startDate: "",
        endDate: "",
        filteredAssignments: [],
        isFiltered: false,
      };
    },
    methods: {
      resetFilter() {
        this.isFiltered = false;
        this.filteredAssignments = [];
        this.startDate = "";  // Clear date inputs
        this.endDate = "";    // Clear date inputs
      },
      filterAssignments() {
        const startDate = new Date(this.startDate);
        const endDate = new Date(this.endDate);
        endDate.setDate(endDate.getDate() + 1); // Añadir un día adicional

        this.filteredAssignments = getAssignmentsBetweenDates(startDate, endDate);

        if (this.filteredAssignments.length === 0) {
          this.filteredAssignments = [{ message: "No existen viajes registrados para este día." }];
        }
        this.isFiltered = true;
        this.$emit('updateFilteredAssignments', this.filteredAssignments);
        this.$emit('updateFilterDates', { startDate: this.startDate, endDate: this.endDate }); // Emitir las fechas de filtro
      },
      exportToExcel() {
        // Check if assignmentsForSelectedDay is defined and has valid data
        const hasDailyAssignments = Array.isArray(this.assignmentsForSelectedDay) && 
                                    this.assignmentsForSelectedDay.length > 0 &&
                                    !this.assignmentsForSelectedDay.some(item => item.message);

        // Check if there's an active date filter
        const hasActiveFilter = this.startDate && this.endDate && 
                                Array.isArray(this.filteredAssignments) && 
                                this.filteredAssignments.length > 0;

        // Determine which data to export
        let dataToExport;
        if (hasActiveFilter) {
          dataToExport = this.filteredAssignments;
        } else if (hasDailyAssignments) {
          dataToExport = this.assignmentsForSelectedDay;
        } else {
          alert("No hay datos para exportar.");
          return;
        }

        // Generate the title based on the data source
        let title;
        if (hasActiveFilter) {
          title = `Asignaciones entre ${this.startDate} y ${this.endDate}`;
        } else if (this.$parent.selectedDay?.date) {
          const date = new Date(this.$parent.selectedDay.date);
          title = `Asignaciones para el ${date.toLocaleDateString('es-ES', { weekday: 'long' })} ${date.getDate()}`;
        } else {
          title = "Asignaciones";
        }

        // Create worksheet data
        let wsData = [
          [title],
          ["Vehículo", "Motivo", "Chofer"],
          ...dataToExport.map(assignment => [
            assignment.vehicle,
            assignment.reason,
            assignment.driver
          ])
        ];

        // Create worksheet
        let ws = XLSX.utils.aoa_to_sheet(wsData);

        // Merge the first three columns of the first row
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];

        // Set column widths
        ws["!cols"] = [
          { wch: 15 },
          { wch: 20 },
          { wch: 15 }
        ];

        // Apply bold style and center alignment to the first row
        const boldCenterStyle = { font: { bold: true }, alignment: { horizontal: "center" } };
        for (let C = 0; C <= 2; C++) {
          const cell1 = ws[XLSX.utils.encode_cell({ r: 0, c: C })];
          const cell2 = ws[XLSX.utils.encode_cell({ r: 1, c: C })];
          if (cell1) cell1.s = boldCenterStyle;
          if (cell2) cell2.s = { font: { bold: true } }; // Only bold for the second row
        }

        // Create workbook and export
        let wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Asignaciones");
        XLSX.writeFile(wb, "Asignaciones.xlsx");
    },
    },
  };
</script>

<style scoped>
.filter-container {
  display: flex;
  gap: 10px;
  margin-bottom: 5%;
}

.date-input {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.date-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
  border-color: #3182ce;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3182ce;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn:hover {
  background-color: #225ea8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
}
</style>