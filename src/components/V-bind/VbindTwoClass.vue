<template>
  <div class="flex">
    <div class="flex__item">
      <p class="box" :class="{ red: isRed }">Клик на меня</p>
      <button class="button" @click="toggleRed">Изменить цвет на Red</button>
    </div>
    <div class="flex__item">
      <p class="box" :class="{ yellow: isYellow }">Клик на меня</p>
      <button class="button" @click="toggleYellow">Изменить цвет на yellow</button>
    </div>
    <div class="flex__item">
      <p class="box" :class="{ blue: isBlue }">Клик на меня</p>
      <butto class="button" @click="toggleBlue">Изменить цвет на blue</butto>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isRed = ref(false);
const isYellow = ref(false);
const isBlue = ref(false);

function toggleRed() {
  isRed.value = !isRed.value;
}
function toggleYellow() {
  isYellow.value = !isYellow.value;
}
function toggleBlue() {
  isBlue.value = !isBlue.value;
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.flex__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  max-width: 100px;
  height: 100px;
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  text-align: center;
  padding: 30px;
}
.button {
  padding: 6px;
  border: solid rgb(48, 188, 227) 2px;
  background-color: rgb(166, 159, 154);
  color: rgb(25, 25, 27);
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}
.button:hover {
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  transition: 1s;
}
.button:active {
  transform: scale(1.1);
  transition: 0.2s;
}
.red {
  color: red;
}
.yellow {
  color: rgb(252, 215, 7);
}
.blue {
  color: rgb(21, 0, 255);
}
</style>
