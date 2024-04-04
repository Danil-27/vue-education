<template>
  <div>
    <div>trim</div>
    <input type="text" v-model.trim="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let value = ref('   1  ');
</script>

<style lang="scss" scoped></style>
