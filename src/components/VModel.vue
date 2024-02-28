<template>
  <div>
    <input v-model="userNum" type="number" />
    <div>Число: {{ userNum }}</div>
    <div>Какое: {{ res }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const userNum = ref(0);
const res = ref("");

watch(userNum, () => {
  if (Math.sign(userNum.value) === 1) {
    res.value = "positive";
  } else if (Math.sign(userNum.value) === -1) {
    res.value = "negative";
  } else res.value = "zero!";
});
</script>
