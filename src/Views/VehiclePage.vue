<template>
  
 <div>
  <SubMenu2></SubMenu2>
  
  <!-- Contenedor principal -->
 <router-view />
 </div>
</template>

<script>

import SubMenu2 from '@/Views//components/SubMenu.vue';

export default {
  components: {
    SubMenu2,
  },
 
};
</script>

<style>
/* Estilo base para el fondo */

body {
  background-color: #f0f0f0;
}
</style>
