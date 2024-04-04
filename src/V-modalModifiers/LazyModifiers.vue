<template>
  <div>
    <div>lazy</div>
    <input type="text" v-model.lazy="value" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

let value = ref('12  3');
</script>

<style lang="scss" scoped></style>
