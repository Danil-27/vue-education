<template>
  <div class="block">
    <H1>Computed</H1>
    <div class="input__block">
      <input type="text" v-model="valueOne" />
      <input type="text" v-model="valueTwo" />
      <span> {{ sum }}</span>
    </div>
    <br />
    <div class="computed" :style="{ width: sum + 'px', height: sum + 'px' }">
      <p>{{ sum }}x{{ sum }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const valueOne = ref(10);
const valueTwo = ref(10);
const sum = computed(() => {
  return valueOne.value * valueTwo.value;
});
</script>

<style scoped lang="scss">
.block {
  padding: 20px;
}
.input__block {
  input {
    margin-right: 20px;
  }
}

.computed {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  border-radius: 10px;
  border: solid 2px black;
}
</style>
