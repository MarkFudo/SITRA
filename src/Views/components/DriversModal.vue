<template>
  <div class="modal" @click.self="$emit('close-modal')">
      <div class="modal-content">
        <!-- Icono para cerrar el modal -->
        <span class="close-icon" @click="$emit('close-modal')">&times;</span>
  
        <!-- Contenido del modal -->
        <p class="fw-bold fs-5 text-decoration-underline pb-3">Detalles del chofer: {{ driver.name }}</p>
        <p><strong>Cantidad de viajes:</strong> {{ driver.trips }}</p>
        <p><strong>Distancia:</strong> {{ driver.distance }} km</p>
        <p><strong>Codigo de empleado:</strong> {{ driver.employee_id }}</p>
        <p><strong>Cedula:</strong> {{ driver.country_id }}</p>
        <p><strong>Licencia:</strong> {{ driver.drivers_license }}</p>
        <p><strong>Fecha de expiracion:</strong> {{ driver.expiration_date }}</p>
        <p><strong>Numero de flota:</strong> {{ driver.flota_number }}</p>
        <p><strong>Categoría de Licencia:</strong> {{ driver.license_category }}</p>
        <p><strong>Estado:</strong> {{ driver.status }}</p>
      </div>
  </div>
  </template>
  
  <script>
    export default {
        name: 'DriversModal',
        props: {
            driver: Object
        }
    }
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