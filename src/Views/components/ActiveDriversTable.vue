<template>
  <div class="container-fluid py-2">
    <!-- Stats Cards -->
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="card shadow-sm py-3">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted fs-2 fw-bold">Total Viajes</h6>
            <h2 class="card-title mb-0 fs-4 fw-semibold">610</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm py-3">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted fs-2 fw-bold">% Viaje por  Conductor</h6>
            <h2 class="card-title mb-0 fs-4 fw-semibold">122</h2>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow-sm py-3">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted fs-2 fw-bold">Total Distancia (Km)</h6>
            <h2 class="card-title mb-0 fs-4 fw-semibold">13,000</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        columns: [
          { label: 'Name', field: 'name' },
          { label: 'Status', field: 'status' },
          { label: 'Vehicles', field: 'vehicles' },
        ],
        tableData: [
        { name: "John Doe", status: "Active", vehicles: "Truck 001" },
        { name: "Jane Smith", status: "Inactive", vehicles: "Van 003" },
        { name: "Alice Johnson", status: "Pending", vehicles: "Car 005" },
        { name: "John Doe", status: "Active", vehicles: "Truck 001" },
        { name: "John Doe", status: "Active", vehicles: "Truck 001" },
        { name: "Jane Smith", status: "Inactive", vehicles: "Van 003" },
        { name: "Alice Johnson", status: "Pending", vehicles: "Car 005" },
        { name: "John Doe", status: "Active", vehicles: "Truck 001" },
        ],
      };
    },
  };
  </script>
  <style>
 
</style>
  