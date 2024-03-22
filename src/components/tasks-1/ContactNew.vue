<template>
  <div>
    <p>Contact</p>
    <p>8998 2384-43-45</p>
    <button @click="value++">count {{ value }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
</script>

<style lang="scss" scoped></style>
