<template>
    <div id="submenu" class="flex justify-left space-x-3 bg-white p-2 rounded-lg shadow w-full pl-2">
      <button
        data-screen="Most Used Vehicles"
        @click="navigateTo('/VehiclePage/MostUsedVehicles')"
        class="submenu-item flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        >
        <img src="../../assets/Icons/list-check-grey.png" alt="Available Icon" class="w-5 h-5 mr-2">
        Vehículos más usados
        </button>
        <button data-screen="Available Vehicles"
        class="submenu-item flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        @click="navigateTo('/VehiclePage/AvailableVehicles')">
        <img src="../../assets/Icons/clock-grey.png" alt="available Icon" class="w-5 h-5 mr-2">
        Vehículos Disponibles 
        </button>
        <button data-screen="Vehicles in Use"
        class="submenu-item flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        @click="navigateTo('/VehiclePage/VehiclesInUse')">
        <img src="../../assets/Icons/car-side-grey.png" alt="Available Icon" class="w-5 h-5 mr-2">
        Vehículos en uso
        </button>
         <button data-screen="Registered vehicles"
        class="submenu-item flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
        @click="navigateTo('/VehiclePage/RegisteredVehicles')">
        <img src="../../assets/Icons/car-flota.png" alt="available Icon" class="w-5 h-5 mr-2">
        Vehículos Registrados 
        </button>
</div>
</template>

<script>
import { useRouter } from 'vue-router';

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
    methods:
    {
      closeSidebar() {
     this.$emit("close-sidebar")
}
    },
  };
  </script>