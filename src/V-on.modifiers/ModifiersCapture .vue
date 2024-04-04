<template>
  <div>
    <h1>Capture</h1>
    <div @click.capture="captureHandler">
      <button @click="regularHandler">Нажми на меня!</button>
    </div>
  </div>
</template>

<script setup>
function captureHandler() {
  alert('Обработчик в режиме захвата , до целевого элемента');
}
function regularHandler() {
  alert('Обычный обработчик целевой элемент');
}
</script>

<style lang="scss" scoped></style>
