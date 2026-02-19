<template>
    <div id="drivert">
      <table>
        <thead>
          <tr>
            <th scope="col" v-for="(column, index) in columns" :key="index">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="(row, rowIndex) in data" :key="rowIndex" @click="$emit('row-click', row)" class="rowSelected">
            <td v-for="(column, colIndex) in columns" :key="colIndex">
              {{ row[column.field] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
  <script>
  export default {
    props: {
      columns: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
<style>
  #drivert{
  width: 90%;
  height: 600px;
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

.rowSelected{
  cursor: pointer;
}

</style>
  