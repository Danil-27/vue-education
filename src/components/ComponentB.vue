<template>
  <div class="round">
    component B
    <C />
  </div>
</template>

<script setup lang="ts">
import C from './ComponentC.vue';
</script>

<style scoped>
.round {
  border: 2px solid;
}
:deep(.round) {
  border-color: blue;
}
</style>
