<template>
  <div class="box">
    <p>Child two</p>
    <button class="btn" @click="log">log</button>
    <div><ProvideInjecChild3></ProvideInjecChild3></div>
  </div>
</template>

<script setup>
import ProvideInjecChild3 from './ProvideInjecChild3.vue';
import { inject } from 'vue';

const log = inject('log');
</script>

<style lang="scss" scoped>
.box {
  border: 5px solid rgb(122, 32, 48);
}
</style>
