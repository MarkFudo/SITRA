import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/Views/HomePage.vue';
import VehiclePage from '@/Views/VehiclePage.vue'
import AnaliticsPage from '@/Views/AnaliticsPage.vue';
import SchedulePage from '@/Views/components/Agenda/SchedulePage.vue';
import DriversPage from '../Views/DriversPage.vue';
import MostUsedVehicle from '@/Views/components/Vehicles/MostUsedVehicle.vue';
import AvailableVehicles from '@/Views/components/Vehicles/AvailableVehicles.vue';
import VehiclesInUse from '@/Views/components/Vehicles/VehiclesInUse.vue';
import AsignarViaje from '@/Views/components/Gestion/AsignarViaje.vue';
import SolicitudFormulario from '@/Views/components/Solicitudes/solicitudFormulario.vue';
import RegisteredVehicles from '@/Views/components/Vehicles/RegisteredVehicles.vue';
import ViajesAsignados from '@/Views/components/Agenda/ViajesAsignados.vue';
import GestionPage from '@/Views/GestionPage.vue';
import GestionSolicitudes from '@/Views/components/Solicitudes/GestionSolicitudes.vue';
import GestionDrivers from '@/Views/components/Gestion/GestionDrivers.vue';
import AgendaPage from '@/Views/AgendaPage.vue';
import GestionVehicles from '@/Views/components/Gestion/GestionVehicles.vue';
import RequestPage from '@/Views/RequestPage.vue';


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/AnaliticsPage',
    name: 'AnaliticsPage',
    component: AnaliticsPage,
  },
    {
    path: '/VehiclePage',
    name: 'VehiclePage',
    component: VehiclePage,
      children: [
    {
        path: '/VehiclePage/AvailableVehicles',
        name: 'AvailableVehicles',
        component: AvailableVehicles,
      },
      {
        path: '/VehiclePage/MostUsedVehicles',
        name: 'MostUsedVehicles',
        component: MostUsedVehicle,
      },
      {
        path: '/VehiclePage/VehiclesInUse',
        name: 'VehiclesInUse',
        component: VehiclesInUse,
      },
      {
        path: '/VehiclePage/RegisteredVehicles',
        name: 'RegisteredVehicles',
        component: RegisteredVehicles,
      },
    ],
  },
  {
    path: '/AgendaPage',
    name: 'AgendaPage',
    component: AgendaPage,
    children:[
      {
        path: '/AgendaPage/SchedulePage',
        name: 'SchedulePage',
        component: SchedulePage,
      },
      {
        path: '/AgendaPage/ViajesAsignados',
        name: 'ViajesAsignados',
        component: ViajesAsignados,
      },
    ]
  },
  {
    path: '/DriversPage',
    name: 'DriversPage',
    component: DriversPage,
  },
  {
    path: '/RequestPage',
    name: 'RequestPage',
    component: RequestPage,
    children:[
      {
        path: '/RequestPage/SolicitudFormulario',
        name: 'SolicitudFormulario',
        component: SolicitudFormulario,
      },
      {
        path: '/RequestPage/GestionSolicitudes',
        name: 'GestionSolicitudes',
        component: GestionSolicitudes,
      },
    ]
  },
  {
    path: '/GestionPage',
    name: 'GestionPage',
    component: GestionPage,
    children:[
      {
        path: '/GestionPage/AsignarViaje',
        name: 'AsignarViaje',
        component: AsignarViaje,
      },
      {
        path: '/GestionPage/GestionDrivers',
        name: 'GestionDrivers',
        component: GestionDrivers,
      },
      {
        path: '/GestionPage/GestionVehicles',
        name: 'GestionVehicles',
        component: GestionVehicles,
      }
    ]
  },
];  

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
