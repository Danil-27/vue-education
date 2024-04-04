<template>
  <div>
    <h1>stop</h1>
    <div @click="parentClick">
      <button @click.stop="childClick">Нажми на меня!</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let count = ref(0);

function parentClick() {
  alert('Событие клика на родителе div');
}
function childClick() {
  alert('Событие клика на кнопке button');
}
</script>

<style lang="scss" scoped></style>
