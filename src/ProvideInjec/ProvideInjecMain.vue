<template>
  <div class="box container">
    <p>Main</p>
    <button class="btn" @click="log">log</button>
    <ProvideInjecChild1></ProvideInjecChild1>
  </div>
</template>

<script setup>
import ProvideInjecChild1 from './ProvideInjecChild1.vue';
import { provide, ref } from 'vue';

let num = ref(4);

function log() {
  console.log(num, ' parent');
}
provide('log', log);
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  padding: 10px;
  margin: 20px auto;
}
.box {
  border: 5px solid green;
}
:deep(.box) {
  padding: 20px;
  border: 5px solid rgb(36, 31, 105);
}
</style>
