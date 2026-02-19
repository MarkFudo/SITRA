<template>
  <header class="header">
    <!-- Titulo -->
    <div class="title">

      <img class="menu-img" 
      ref="menuImage" 
      src="../../assets/Icons/menu.png" 
      tabindex="0" 
      @click="handleMenuClick">
      Sistema Integrado de Transporte Aduanero 
    </div>
    <nav class="nav">

      <!-- Icono de notificaciones con espaciado -->
      <div class="notification-dropdown"
      tabindex="1">
        <img class="notification-icon" @click="toggleNotifications" src="../../assets/Icons/bell-outline-white.png">
        <div v-if="showNotifications" class="dropdown-menu">
          <p>No tienes notificaciones nuevas</p>
        </div>
      </div>

      <!-- Sección de usuario con nombre e ícono -->
      <div class="profile-dropdown">
        <div class="profile-section" @click="toggleProfileMenu">
            <img class="user-icon" src="../../assets/Icons/user-outline-white.png" alt="">
            <span class="user-name">Victor Taveras</span>
            <img class="dropdown" src="../../assets/Icons/dropdown.png" alt="">
        </div>
        <div v-if="showProfileMenu" class="dropdown-menu">
          <ul>
            <li>Cerrar Sesión</li>
          </ul>
        </div>
      </div>

    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showNotifications: false,
      showProfileMenu: false,
    };
  },
  methods: {
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
      this.showProfileMenu = false; // Cerrar el menú de perfil si está abierto
    },
    toggleProfileMenu() {
      this.showProfileMenu = !this.showProfileMenu;
      this.showNotifications = false; // Cerrar el menú de notificaciones si está abierto
    },
    handleMenuClick() {
      this.toggleMenu();
    },
      toggleMenu() {
      this.$emit('toggle-sidebar');
    }
  },


};




</script>

<style scoped>

html.hydrated {
  padding: 0;
  margin: 0;
}

body{
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.header {
  background-color: #112d61;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-left: 40px;
  gap: 40%;
}
.title {
  font-size: 24px;
  font-weight: bold;
  width: 40%;
  display: flex;
  align-items: center;
  align-content: start;
  
  gap: 5%;
}
.nav {
  display: flex;
  align-items: center;
  width: 20%;
  padding-left: 55px;
}

.menu-img{
  width: 30px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2;
  display: inline-block;
  margin: 0;
}
/* menu-img animations */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.menu-img:focus {
  animation: bounce 0.5s ease-in-out;
}

.notification-dropdown,
.profile-dropdown {
  position: relative;
  padding: 5px;
  cursor: pointer;
}


.notification-dropdown{
  right: 20%;
  border-radius: 6px;
}
.notification-dropdown:hover .notification-icon{
  content: url('../../assets/Icons/bell-outline-blue.png');
}
.notification-dropdown:hover{
  background: #FFFFFF;
}

.profile-dropdown:hover .user-icon{
  content: url('../../assets/Icons/user-outline-blue.png');
}
.notification-icon,
.user-icon {
  height: auto;
  width: 25px;

}
.profile-dropdown:hover{
  border-radius: 6px;
  background: #ffffff;
}
.profile-dropdown:hover .user-name{
  color: #112d61;
}
.profile-dropdown:hover .dropdown{
  content: url(../../assets/Icons/dropdown-blue.png);
}
.profile-section {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Espaciado entre el ícono y el nombre */
  cursor: pointer;
  border-radius: 6px; 
}

.user-name {
  font-size: 18;
  color: #fff;
  font-weight: bold;
  margin: 0 5px;
  margin-left: 10px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  margin-top: 20px;
  right: -80px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0.5rem;
  z-index: 1000;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}
.dropdown{
  width: 20px;
  margin: 0;
  
}
</style>
