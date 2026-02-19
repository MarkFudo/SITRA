<template>
    <div>
      <select v-model="selectedMonth" @change="filterMonth" class="form-select shadow-sm border rounded text-secondary px-4 py-2" style="width: auto; font-size: 14px;">
        <option disabled value=""> Mes </option>
        <option v-for="(data, index) in allMonths" :key="index" :value="data">{{data}}</option>
      </select>
  </div>
</template>

<script>
import { months } from '@/Models/requests';

export default {
    name: 'topSelect',
    props: ["month"],
    data(){
        return{
            selectedMonth: this.month || "",
            allMonths: months
        };
    },
    methods:{
        filterMonth(){
            this.$emit("update:month", this.selectedMonth);
        }
    }
}
</script>

<style scoped>
</style>