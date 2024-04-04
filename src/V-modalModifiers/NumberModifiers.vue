<template>
  <div>
    <div>number</div>
    <input type="text" v-model.number="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let value = ref(1);
</script>

<style lang="scss" scoped></style>
