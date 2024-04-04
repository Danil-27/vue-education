<template>
  <div>
    <h1>self</h1>
    <div class="divClick" @click.self="divClick">
      <button @click="buttonClick">Нажми на меня!</button>
    </div>
  </div>
</template>

<script setup>
function divClick() {
  alert('Событие клика на div');
}
function buttonClick() {
  alert('Событие клика на кнопке');
}
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.divClick {
  padding: 20px;
  background-color: cadetblue;
}
</style>
