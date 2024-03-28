<template>
  <div class="box">
    <p>Child one</p>
    <button class="btn" @click="log">log</button>
    <div><ProvideInjecChild2></ProvideInjecChild2></div>
  </div>
</template>

<script setup>
import ProvideInjecChild2 from './ProvideInjecChild2.vue';
import { inject } from 'vue';

const log = inject('log');
</script>

<style lang="scss" scoped>
.box {
  border: 5px solid rgb(117, 122, 32);
}
</style>
