<template lang="pug">
  <div id="app">
    <!-- Este div tiene la visibilidad controlada por la variable `siderbarVisible` -->
    <Cabezera @toggle-sidebar="toggleSidebar"></Cabezera>
    <Siderbar v-if="siderbarVisible"   @close-sidebar="toggleSidebar" class="siderbar"></Siderbar>
    <router-view/>
  </div>  
</template>
<script>

import Siderbar from './Views/components/Siderbar.vue';
import Cabezera from './Views/components/Cabezera.vue';

export default {
  name: 'App',
  components: {
    Cabezera,
    Siderbar,
  },
    data() {
      return {
        siderbarVisible: false
      };
  },
  methods: {
    toggleSidebar() {
      this.siderbarVisible = !this.siderbarVisible;
    },
     closeSidebar() {
      this.siderbarVisible = false; // Ocultar el sidebar
    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0%;
}
.cabezera{
width: 100%;
}
.siderbar{
  visibility: visible;
  z-index: 1990;
  position: fixed;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  left: -100%;
}
.siderbar-hidden{
  transform: translateX(-100%)
}
@keyframes bounce {
   0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0);
  }
}
.siderbar:focus {
  animation: bounce 0.5s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
