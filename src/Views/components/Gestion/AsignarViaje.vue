
<template>
  <div class="container mt-4 bg-light p-4">
    <h2 class="font-bold">Formulario de Asignación de Conductor y Vehículo</h2> <br>  
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="driverName" class="form-label">Nombre del Conductor</label>
        <input
          type="text"
          id="driverName"
          v-model="form.nombreConductor"
          class="form-control"
          placeholder="Ingrese el nombre del conductor"
          required
        />
      </div>
      <div class="mb-3">
        <label for="driverLicense" class="form-label">Licencia del Conductor</label>
        <input
          type="text"
          id="driverLicense"
          v-model="form.licenciaConductor"
          class="form-control"
          placeholder="Ingrese la licencia del conductor"
          required
        />
      </div>
      <div class="mb-3">
        <label for="driverPhone" class="form-label">Teléfono del Conductor</label>
        <input
          type="tel"
          id="driverPhone"
          v-model="form.telefonoConductor"
          class="form-control"
          placeholder="Ingrese el teléfono del conductor"
          required
        />
      </div>
      <div class="mb-3">
        <label for="assignedSupervisor" class="form-label">Supervisor Asignado</label>
        <select
          id="assignedSupervisor"
          v-model="form.supervisorAsignado"
          class="form-select"
          required
        >
          <option v-for="supervisor in supervisores" :key="supervisor" :value="supervisor">
            {{ supervisor }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="relatedTrip" class="form-label">Viaje Relacionado</label>
        <select
          id="relatedTrip"
          v-model="form.viajeRelacionado"
          class="form-select"
          @change="actualizarDetallesViaje"
          required
        >
          <option v-for="viaje in viajes" :key="viaje.id" :value="viaje.id">
            {{ viaje.nombre }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Detalles del Viaje Relacionado</label>
        <div class="form-control" style="background-color: #f8f9fa; height: auto;">
          <p v-if="viajeSeleccionado">
            <strong>Destino:</strong> {{ viajeSeleccionado.destino }}<br />
            <strong>Inicio:</strong> {{ viajeSeleccionado.inicio }}<br />
            <strong>Fin:</strong> {{ viajeSeleccionado.fin }}<br />
            <strong>Cantidad de Combustible:</strong> {{ viajeSeleccionado.combustible }} litros<br />
            <strong>Estado:</strong> {{ viajeSeleccionado.estado }}<br />
            <strong>En Espera:</strong> {{ viajeSeleccionado.espera ? 'Sí' : 'No' }}
          </p>
          <p v-else>Seleccione un viaje para ver los detalles.</p>
        </div>
      </div>
      <div class="mb-3">
        <label for="assignedVehicle" class="form-label">Vehículo Asignado</label>
        <select
          id="assignedVehicle"
          v-model="form.vehiculoAsignado"
          class="form-select"
          required
        >
          <option v-for="vehiculo in vehiculosActivos" :key="vehiculo.id" :value="vehiculo.id">
            {{ vehiculo.nombre }}
          </option>
        </select>
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-secondary me-2" @click="handleCancel">Cancelar</button>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const form = ref({
      nombreConductor: "",
      licenciaConductor: "",
      telefonoConductor: "",
      supervisorAsignado: "",
      viajeRelacionado: "",
      vehiculoAsignado: "",
    });

    const supervisores = ref(["Supervisor 1", "Supervisor 2", "Supervisor 3"]);
    const viajes = ref([
      {
        id: "viaje1",
        nombre: "Viaje 1",
        destino: "Los Ángeles",
        inicio: "2023-05-14 08:00",
        fin: "2023-05-15 18:00",
        combustible: 40,
        estado: "Pendiente",
        espera: false,
      },
      {
        id: "viaje2",
        nombre: "Viaje 2",
        destino: "Nueva York",
        inicio: "2023-05-15 09:00",
        fin: "2023-05-17 18:00",
        combustible: 50,
        estado: "Aprobado",
        espera: true,
      },
    ]);

    const vehiculos = ref([
      { id: "vehiculo1", nombre: "Ford F-150 (XYZ789, Camión)", estado: "Activo" },
      { id: "vehiculo2", nombre: "Toyota Corolla (ABC123, Sedán)", estado: "Inactivo" },
      { id: "vehiculo3", nombre: "Chevrolet Silverado (DEF456, Camión)", estado: "Activo" },
      { id: "vehiculo4", nombre: "Honda Civic (GHI789, Sedán)", estado: "Activo" },
    ]);

    // Filtra solo los vehículos activos
    const vehiculosActivos = computed(() => {
      return vehiculos.value.filter(vehiculo => vehiculo.estado === "Activo");
    });

    const viajeSeleccionado = ref(null);

    const actualizarDetallesViaje = () => {
      viajeSeleccionado.value = viajes.value.find(
        (viaje) => viaje.id === form.value.viajeRelacionado
      );
    };

    const handleSubmit = () => {
      console.log("Formulario enviado", form.value);
    };

    const handleCancel = () => {
      console.log("Formulario cancelado");
    };

    return {
      form,
      supervisores,
      viajes,
      vehiculosActivos, // Usamos esta lista en el template
      viajeSeleccionado,
      actualizarDetallesViaje,
      handleSubmit,
      handleCancel,
    };
  },
};
</script>

<style>
.container {
  max-width: 600px;
}

.btn-primary:hover {
  background-color: #000000;
  border-color: #000000;
}

</style>
```

