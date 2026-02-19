<template>
        <div>
            <div class="whole-page">
                <ActiveDriversTable class="active-table"></ActiveDriversTable>
                <DriverPerfomanceTable class="driver-table"></DriverPerfomanceTable>
            </div>
        </div>

</template>

<script setup>
import ActiveDriversTable from './components/ActiveDriversTable.vue';
import DriverPerfomanceTable from './components/DriverPerfomanceTable.vue';

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.whole-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 85%;
    margin: 0 auto;
}
.active-table{
    margin-top: 3%;
    
}
.driver-table{
    margin: 0;
    padding: 0;
    width: 100%;
}

</style>