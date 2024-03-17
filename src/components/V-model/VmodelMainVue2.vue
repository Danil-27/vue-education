<template>
  <div class="center">
    <VmodelInputTwo :searchText="searchText" @updateText="($event) => (searchText = $event)" />
    <p>data from parent : {{ searchText }}</p>
  </div>
</template>

<script setup>
import VmodelInputTwo from './VmodelInputVue2.vue';
import { ref } from 'vue';

const searchText = ref('hello');
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
}
</style>
