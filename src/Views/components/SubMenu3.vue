<template>
    <div id="submenu"
    class="d-flex flex-row justify-content-start align-items-center bg-white p-2 rounded shadow w-100">
      <!-- Encabezado -->
      <!-- Botones debajo del encabezado -->
      <div class="d-flex flex-row justify-content-center gap-2">
        <button
          data-screen="Registrar Viaje"
          @click="navigateTo('/GestionPage/AsignarViaje')"
          class="submenu-item d-flex align-items-center px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
        >
          <img
            src="../../assets/Icons/schedule-outline-blue.png"
            alt="Available Icon"
            class="w-5 h-5 me-2"
          />
          Asignar  Viaje
        </button>
        <button
          data-screen="Gestión de Conductores"
          @click="navigateTo('/GestionPage/GestionDrivers')"
          class="submenu-item d-flex align-items-center px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
        >
          <img
            src="../../assets/Icons/users-gray.png"
            alt="Available Icon"
            class="w-5 h-5 me-2"
          />
          Gestión de Conductores
        </button>
        <button
          data-screen="Gestión de Vehículo"
          @click="navigateTo('/GestionPage/GestionVehicles')"
          class="submenu-item d-flex align-items-center px-4 py-2 rounded text-gray-700 hover:bg-gray-200"
        >
          <img
            src="../../assets/Icons/car-side-grey.png"
            alt="Available Icon"
            class="w-5 h-5 me-2"
          />
          Gestión de Vehículo
        </button>
        
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    name: "AppSidebar",
    setup(_, { emit }) {
      const router = useRouter();
  
      // Función para navegar
      const navigateTo = (path) => {
        router.push(path); // Usa `router.push` para navegar
        emit("close-sidebar");
      };
  
      return {
        navigateTo,
      };
    },
    methods: {
      closeSidebar() {
        this.$emit("close-sidebar");
      },
    },
  };
  </script>
  