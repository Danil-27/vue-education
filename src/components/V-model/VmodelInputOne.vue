<template>
  <div class="inputBlock">
    <form action="">
      <input v-model="number" type="text" placeholder="Проверка на +/-" />
      <p>data from child : {{ number }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const number = ref('34');
//Динамическая передача данных в child
</script>

<style scoped>
.inputBlock {
  border: solid 2px black;
  padding: 30px;
}
</style>
