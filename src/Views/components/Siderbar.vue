<template>


    <aside class="app-sidebar">
     <div class="logo">
      <div class="logo-joined">
         <img class="dga-logo" src="../../assets/Icons/dga-white.png">
      <h2>MasterAPP</h2>
      </div>

      <img class="back" src="../../assets/Icons/back.png" @click= "closeSidebar">
     </div>
      <ul class="menu">
        <li class="option" @click="navigateTo('/')">
          <img class="siderbar-icons home-icon" src="../../assets/Icons/home-white.png">
          <i class="home">Inicio</i> 
        </li>
        <li class="option"  @click="navigateTo('/RequestPage/SolicitudFormulario')">
        <img class="siderbar-icons request-icon" src="../../assets/Icons/list-check-white.png">
        <i class="analytics">Solicitud</i> 
      </li>
      <li class="option" @click="navigateTo('/VehiclePage/MostUsedVehicles')" >
        <img class="siderbar-icons vehicle-icon" src="../../assets/Icons/car-white.png">
        <i class="vehicles">Vehiculos</i> 
        </li>
      <li class="option" @click="navigateTo('/DriversPage')">
        <img class="siderbar-icons driver-icon" src="../../assets/Icons/users-white.png">
        <i class="drivers">Conductores</i> 
        </li>
      <li class="option"  @click="navigateTo('/AgendaPage/SchedulePage')">
        <img class="siderbar-icons schedule-icon" src="../../assets/Icons/calendar-white.png">
        <i class="schedule">Agenda</i> 
        </li>
      <li class="option"  @click="navigateTo('/AnaliticsPage')">
        <img class="siderbar-icons analytics-icon" src="../../assets/Icons/analytics-white.png">
        <i class="analytics">Analisis</i> 
      </li>
      <li class="option last"  @click="navigateTo('/GestionPage/AsignarViaje')">
        <img class="siderbar-icons gestion-icon" src="../../assets/Icons/menu.png">
        <i class="analytics">Gestión</i> 
      </li>
  
      <hr>
      <li>
        <i class="th-large">Aplicaciones</i> 
      </li>
      </ul>
    
      <div class="footer">
        <p>Versión 3.0</p>
        <p>Dirección General de Aduanas</p>
        <p>República Dominicana</p>
    </div>

    </aside>
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
  
  <style scoped>

  .app-sidebar {
    width: 350px;
    height: 100vh;
    background-color: #112d61;
    color: white;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
  }
  .logo {
  padding: 5px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  gap: 10px;
  margin-left: 15px;
}
.dga-logo{
  width: 80px;
  margin: 0;
  height: 30px;
  margin-top: 3px;
}
.logo-joined{
  display: flex;
  margin: 0;
  cursor: pointer;
}
.back{
  height: 15px;
  margin-top: 10px;
  margin-right: 1px;
  cursor: pointer;
}
i{
  text-align: start;
  margin: 0;
  font-style: normal;
  
}

.menu li {
  padding: 20px 0px;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
  font-weight: bold;
  border-radius: 8px;
}

.menu li:hover {
  background-color: #f5f5f5;
  color: #112d61;
}

.menu li.last {
  margin-bottom: 10%;
}

.footer {
  padding: 20px;
  font-size: 12px;
  text-align: start;
  border-top: 1px solid #112d61;
  margin-top: 55%;
}

.siderbar-icons{
  width: 30px;
  margin: 0 20px 0 10px;
}
.menu{
  align-items: start;
  margin: 0;
  flex-direction: row;
  margin: 0;
  padding: 25px 10px;
}
.option{
  display: flex;
  justify-content: flex-start; /* Asegura que los items dentro de la opción estén alineados horizontalmente */
  margin: 0;
  align-items: center;

}

.option:hover .siderbar-icons {
  content: url("../../assets/Icons/home-blue.png");
}

.option:hover .vehicle-icon {
  content: url("../../assets/Icons/car-blue.png");
}
.option:hover .driver-icon {
  content: url("../../assets/Icons/users-blue.png");
}
.option:hover .schedule-icon {
  content: url("../../assets/Icons/calendar-blue.png");
}
.option:hover .analytics-icon {
  content: url("../../assets/Icons/analytics-blue.png");
}
.option:hover .request-icon {
  content: url("../../assets/Icons/list-check.png");
}
.option:hover .gestion-icon {
  content: url("../../assets/Icons/menu-de-hamburguesas.png");
}


  </style>
  