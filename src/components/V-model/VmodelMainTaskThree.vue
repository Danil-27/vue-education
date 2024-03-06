<template>
  <P class="p">Child components {{ data }}</P>
  <input class="input" type="text" :value="data" @input="$event = data = $event.target.value" />
  <br />

  <div class="center"><VmodelChildInput v-model:data="data" /></div>
</template>

<script setup>
import VmodelChildInput from './VmodelChildInput.vue';
import { ref } from 'vue';
const data = ref('2');
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
  color: bisque;
  font-weight: 600;
}
.p {
  padding: 0px;
  margin: 0px;
  color: bisque;
}
.input {
}
</style>
