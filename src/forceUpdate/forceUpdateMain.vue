<template>
  <div class="block">
    <div class="block__box">
      <button @click="trueFalse" class="block__btn">true-false</button>
      <button @click="location" class="block__btn">reload</button>
      <button @click="click" class="block__btn">click ++</button>
    </div>
    <p class="block__text">{{ date }}</p>
    <div v-if="booleanVar" class="block__boolean">
      <p>{{ date }}</p>
      <p>{{ num }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let booleanVar = ref(false);
let date = ref(new Date());
let num = 5;

function click() {
  num += 1;
}

function trueFalse() {
  if (booleanVar.value === true) {
    return (booleanVar.value = false);
  }
  return (booleanVar.value = true);
}
function location() {
  window.location.reload();
}

// function tup() {}
</script>

<style lang="scss" scoped>
.block {
  &__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    background: rgb(63, 158, 50);
    background: linear-gradient(
      90deg,
      rgba(63, 158, 50, 1) 0%,
      rgba(105, 105, 204, 1) 51%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  &__btn {
    width: 200px;
    margin-top: 6px;
    background-color: bisque;
  }
  &__text {
    text-align: center;
    background-color: beige;
  }
  &__boolean {
    background-color: burlywood;
    padding: 30px;
    margin-top: 20px;
  }
}
</style>
