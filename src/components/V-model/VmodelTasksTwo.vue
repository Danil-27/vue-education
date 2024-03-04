<template>
  <div class="center">
    <div class="result">{{ result }}</div>
    <button class="button" @click="sum">result</button>
    <div>
      <p>Number One</p>
      <VmodelTasksTwoInput class="Input" v-model:numberOne="numberOne" width="20px" />
      <p>Number Two</p>
      <VmodelTasksTwoInputTwo class="Input" v-model:numberTwo="numberTwo" />
    </div>
  </div>
</template>

<script setup>
import VmodelTasksTwoInput from './VmodelTasksTwoInput.vue';
import VmodelTasksTwoInputTwo from './VmodelTasksTwoInputTwo.vue';
import { ref } from 'vue';

const result = ref(0);
const numberOne = ref();
const numberTwo = ref();

function sum() {
  result.value = Number(numberOne.value) + Number(numberTwo.value);
}
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
  color: bisque;
  font-weight: 600;
}
.button {
  padding: 6px 10px;
}
.result {
  font-size: 30px;
}
.Input {
  display: block;
}
</style>
