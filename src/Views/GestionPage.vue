<template>
    <SubMenu3></SubMenu3>
    <router-view></router-view>
  


</template>
  
<script>

import SubMenu3 from './components/SubMenu3.vue';

  export default {
    components: {
      SubMenu3,
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  form div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input, select, button {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  