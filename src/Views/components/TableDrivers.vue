<template>
      <div id="drivert">
        <h1>Vehiculos activos</h1>
        <table >
          <thead>
            <tr>
              <th scope="col">Vehículo</th>
              <th scope="col">Matricula</th>
              <th scope="col">Capacidad</th>   
              <th scope="col">Tipo de vehiculo</th>   
            </tr>
          </thead>
          <tbody>
            <tr scope="row" v-for="(row, index) in tableData.filter((data)=>data.travel.status ==='Active')" :key="index">
              <td>{{ row.travel.vehicleAssigned }}</td>
              <td>{{ row.travel.matricula }}</td>
              <td>{{ row.travel.capacidad }}</td>
              <td>{{ row.travel.tipo }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </template>
  
  <script>
  import { mockAnalitics } from '@/Models/requests';
  export default {
    data() {
      return {
        tableData: mockAnalitics, // This will store the data from the database
      };
    }
  };
  </script>
  
  <style>
  body{
    background-color: #f0f4f8; 
  }


  #drivert{
  width: 90%;
  height: 451px;
  background-color: #FFFFFF; 
  border-radius: 6px; 
  box-shadow: 
    1px 1px 1px 0px #00000040, 
    -1px -1px 1px 0px #00000040; 
  padding: 20px; 
  font-family: Arial, sans-serif; 
  font-size: 1.2em;
  overflow-y: auto;
  
}

  table {
  table-layout: fixed;
  border-collapse: collapse;
  border-bottom: 1px solid #e0e0e0; /* Light gray border */
  width: 100%;
}
tbody{
  text-align: left;
  font-size: 18px;
}

h1{
    color: #000000;
  text-align: left;
  font-size: 24px;
  padding: 10px;
  font-weight: bold;
}
table thead th{
    
    padding: 15px;
    font-weight: bold;
    color: #6E6D6D;
    text-align: left;
}
thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 20%;
}

thead th:nth-child(4) {
  width: 20%;
}

th,
td {
  padding: 30px 30px 30px 15px;
  border-bottom: 1px solid #e0e0e0;
 
}

tbody tr:hover{
  background-color: #e2eef8;
}

  </style>