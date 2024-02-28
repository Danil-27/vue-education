<template>
  <div>
    <input v-model="userNum" type="number" />
    <div>Число: {{ userNum }}</div>
    <div>Какое: {{ res }}</div>

    <div>
      <div>Сложение чисел:</div>
      <input v-model="firstNum" type="number" /> +
      <input v-model="secondNum" type="number" /> =
      {{ sum }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const userNum = ref(0);
const res = ref("");

const firstNum = ref(0);
const secondNum = ref(0);
const sum = ref(0);

watch(userNum, () => {
  if (Math.sign(userNum.value) === 1) {
    res.value = "positive";
  } else if (Math.sign(userNum.value) === -1) {
    res.value = "negative";
  } else res.value = "zero!";
});
watch([firstNum, secondNum], ([newFirst, newSecond]) => {
  sum.value = newFirst + newSecond;
});
</script>
