<template>
  <main class="main">
    <TeleportMain class="container"></TeleportMain>
  </main>
</template>

<script setup>
import TeleportMain from './teleport/TeleportMain.vue';
</script>

<style scoped lang="scss">
:deep(*) {
  padding: 0px;
  margin: 0px;
}
.main {
  color: burlywood;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgb(73, 76, 73) 0%,
    rgb(92, 92, 123) 51%,
    rgba(0, 0, 0, 1) 100%
  );
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
