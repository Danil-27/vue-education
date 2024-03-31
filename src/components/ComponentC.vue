<template>
  <div class="round">
    component C
    <div>product from C: {{ product }}</div>
    <div>parameters from C: {{ parameters }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const product = inject('currentProduct');
const parameters = inject('params');
</script>

<style scoped>
.round {
  margin: 10px;
}
</style>
