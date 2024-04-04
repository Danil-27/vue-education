<template>
  <div>
    <h1>once</h1>
    <button @click.once="buttonClick">Нажми на меня один раз!</button>
  </div>
</template>

<script setup>
function buttonClick() {
  alert('Событие клика на кнопке (вызовется только один раз)');
}
</script>

<style lang="scss" scoped></style>
