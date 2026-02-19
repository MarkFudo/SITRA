<template>
  <div class="home" id="home">
    <main class="home-content">
      <h2 class="main-title">Bienvenido al SITRA</h2>
      <p class="sub-title">Impulsando el futuro del transporte</p>
      <div class="services">
        <ServiceCard 
          :iconSrc="carIcon" 
          title="Vehículos" 
          description="Registro de vehículos"
          :navigateTo="() => navigateTo('/VehiclePage/MostUsedVehicles')"
        />
        <ServiceCard 
          :iconSrc="usersIcon" 
          title="Conductores" 
          description="Información de los choferes"
          :navigateTo="() => navigateTo('/DriversPage')"
        />
        <ServiceCard 
          :iconSrc="scheduleIcon" 
          title="Agenda" 
          description="Horario de los viajes"
          :navigateTo="() => navigateTo('/AgendaPage/SchedulePage')"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router';
  import ServiceCard from '@/Views/components/ServiceCard.vue';
  import carIcon from '@/assets/Icons/car-outline-blue.png';
  import usersIcon from '@/assets/Icons/users-outline-blue.png';
  import scheduleIcon from '@/assets/Icons/schedule-outline-blue.png';

  export default {
    name: 'HomePage',
    components: {
      ServiceCard,
    },
    setup() {
      const router = useRouter();
      const navigateTo = (path) => {
        router.push(path);
      };
      return {
        carIcon,
        usersIcon,
        scheduleIcon,
        navigateTo,
      };
    },
  };
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f0f4f8;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.home-content {
  text-align: center;
  flex: 1;
  margin: 5px;
  font-size: 1.2em;
  margin-top: 5%;
}

.services {
  display: flex;
  justify-content: center;
  gap: 35px;
  margin-top: 45px;
  padding: 60px;
}

.main-title {
  font-size: 45px;
  font-weight: bolder;
  font-family: 'Open Sans';
}

.sub-title {
  font-weight: light;
  margin-top: 12px;
  font-size: 1.1em;
}

.explore-button {
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 45px;
  font-weight: bold;
}

  .explore-button:hover {
    background-color: #4cae4c;
  }

  @media (max-width: 768px) {
      .services {
        flex-direction: column; /* Cambia la dirección del flex a columna */
        align-items: center; /* Centra las tarjetas en la columna */
      }
    }
</style>