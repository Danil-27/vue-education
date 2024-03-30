<template>
  <div class="btn">
    <button @click="log">GlobalComponent + mixin-log</button>
    <p>{{ y }}</p>
    <p>{{ x }}</p>
  </div>
</template>

<script setup>
import { useMouse } from '../mix/mouse';

const { x, y } = useMouse();
</script>

<style lang="scss" scoped>
.btn {
  margin: 5px 0px;
}
</style>
../mix/mouse
