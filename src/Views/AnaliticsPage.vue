<template>
    <topSelect class="select" :month="selectedMonth" @update:month="sendMonth"></topSelect>
    <div class="page-body" id="analytics">
        <div class="all-page">
            <cards :month="selectedMonth" class="cards"></cards>
            <RequestCard class="request-card"></RequestCard>
            <TableDrivers class="table-drivers"></TableDrivers>
        </div>
    </div>
</template>


<script setup>

import TableDrivers from './components/TableDrivers.vue';
import RequestCard from './components/RequestCard.vue';
import topSelect from './components/topSelect.vue';
import cards from './components/feature-cards.vue';

</script>

<script>
// Bloque para definir configuraciones adicionales como el nombre del componente
export default {
  name: 'analiticsPage', // El nombre del componente es opcional aquí.
  data(){
    return{
        selectedMonth: ''
    }
  },
  methods:{
    sendMonth(month){
        this.selectedMonth = month;
    }
  }
};
</script>
<style>
*{
    margin: 0 auto;
    
}
.content{
    background-color: #F3F4F6;
}
.all-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 25px 25px 25px;
    height: 90%;
    gap: 20px;    
    align-items: center;

}

.page-body{
    padding: 15px 5px;
}

.select{
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 20px 10px 0 5px;
    margin-right: 6%;
    margin-bottom: -20px;
}

</style>