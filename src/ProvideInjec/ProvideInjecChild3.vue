<template>
  <div class="box">
    <div>Child three</div>
    <button class="btn" @click="log">log</button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const log = inject('log');
</script>

<style lang="scss" scoped>
.box {
  border: 5px solid rgb(32, 120, 122);
}
</style>
