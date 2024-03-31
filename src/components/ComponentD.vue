<template>
  <div class="round">
    <div>component D product from D: {{ product }}</div>
    <div>parameters from D: {{ parameters }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const product = inject('currentProduct');
const parameters = inject('params');
</script>

<style scoped>
.round {
  border: 2px solid rgb(0, 255, 17);
  padding: 55px;
}
</style>
