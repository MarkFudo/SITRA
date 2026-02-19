<template>
    <div class="container mt-5 mb-5">
    <h1 class="mb-4">Solicitud de Transporte</h1>
    <form @submit.prevent="submitForm">
      <!-- Información del Empleado -->
      <div class="card mb-4 fw-bold">
        <div class="card-header">Información del Empleado</div>
        <div class="card-body">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control bg-gray-100 bg-gray-100" id="nombre" v-model="empleado.Nombre" required>
          </div>
          <div class="mb-3">
            <label for="cargo" class="form-label">Cargo</label>
            <input type="text" class="form-control bg-gray-100" id="cargo" v-model="empleado.Cargo" required>
          </div>
          <div class="mb-3">
            <label for="codigo" class="form-label">Código de Colaborador</label>
            <input type="text" class="form-control bg-gray-100" id="codigo" v-model="empleado.Codigo_Colaborador" required>
          </div>
        </div>
      </div>

      <!-- Detalles de la Solicitud de Transporte -->
      <div class="card mb-4 fw-bold">
        <div class="card-header">Detalles de la Solicitud</div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="fechaServicio" class="form-label">Fecha de Inicio</label>
              <input type="date" class="form-control bg-gray-100" id="fechaServicio" v-model="solicitud.Fecha_Servicio" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="fechaRegreso" class="form-label">Fecha de Regreso</label>
              <input type="date" class="form-control bg-gray-100" id="fechaRegreso" v-model="solicitud.Fecha_Regreso" required>
            </div>
          </div>
          <div class="mb-3">
            <label for="areaSolicitante" class="form-label">Área Solicitante</label>
            <input type="text" class="form-control bg-gray-100" id="areaSolicitante" v-model="solicitud.Area_Solicitante" required>
          </div>
          <div class="mb-3">
            <label for="cantidadColaboradores" class="form-label">Cantidad de Colaboradores</label>
            <input type="number" class="form-control bg-gray-100" id="cantidadColaboradores" v-model="solicitud.Cantidad_Colaboradores" required>
          </div>
          <div class="mb-3">
            <label for="flotillaAsignada" class="form-group">Flota</label>
            <input type="text" class="form-control bg-gray-100" id="flotillaAsignada" v-model="solicitud.Flotilla_Asignada" required>
          </div>
          <div class="mb-3">
            <label for="destinoViaje" class="form-label">Destino del Viaje</label>
            <input type="text" class="form-control bg-gray-100" id="destinoViaje" v-model="solicitud.Destino_Del_Viaje" required>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="horaSalida" class="form-label">Hora de Salida</label>
              <input type="time" class="form-control bg-gray-100" id="horaSalida" v-model="solicitud.Hora_Salida" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="horaRegreso" class="form-label">Hora de Regreso</label>
              <input type="time" class="form-control bg-gray-100" id="horaRegreso" v-model="solicitud.Hora_Regreso" required>
            </div>
          </div>
          <div class="mb-3 d-flex gap-2">
            <input type="checkbox" class="form-check-input bg-gray-100" id="espera" v-model="solicitud.Espera">
            <label class="form-check-label " for="espera">¿Se quedara esperando?</label>
          </div>
          <div class="form-group">
            <label for="status">Estado</label>
                <select class="form-control bg-gray-100" id="status">
                <option>Seleccionar estado</option>
                <option value="pending">Pendiente</option>
                <option value="approved">Aprobado</option>
                <option value="rejected">Rechazado</option>
                </select>
          </div>
        </div>
        <div class="flex justify-content-end " >
            <button type="submit" class="m-2 btn btn-danger" id="cancelar">Cancelar</button>
            <button type="submit" class="m-2 btn" id="enviar">Enviar</button>
        </div> 
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const empleado = ref({
  Nombre: '',
  Cargo: '',
  Codigo_Colaborador: ''
});

const solicitud = ref({
  Fecha_Servicio: '',
  Fecha_Regreso: '',
  Area_Solicitante: '',
  Cantidad_Colaboradores: '',
  Flotilla_Asignada: '',
  Destino_Del_Viaje: '',
  Hora_Salida: '',
  Hora_Regreso: '',
  Espera: false,
  Status: 'Pendiente' // Valor por defecto
});

const submitForm = () => {
  // Aquí puedes manejar la lógica para enviar el formulario
  console.log('Datos del empleado:', empleado.value);
  console.log('Datos de la solicitud:', solicitud.value);
  // Implementa la lógica para enviar los datos al servidor
};
</script>

<style scoped>

    body {
        font-family: f;
    }
    h1 {
        text-align: center;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(35%) sepia(89%) saturate(1234%) hue-rotate(190deg) brightness(95%) contrast(89%);
        cursor: pointer;
    }
    input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(35%) sepia(89%) saturate(1234%) hue-rotate(190deg) brightness(95%) contrast(89%);
  cursor: pointer;
}

    input[type="checkbox"], input[type="time"] {
        cursor: pointer;
    }

    #enviar {
        background-color: #0caf0f;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    #cancelar {
        background-color: #0a188c;
        color: #fff;
        border: none;
        cursor: pointer;
    }

</style>