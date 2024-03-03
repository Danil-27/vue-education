<template>
  <div class="center">
    <div class="block">
      <VmodelInputTwo v-model:number="number" @isFromPositive="handleChildData" />
      {{
        (valueIsNotDefined = isPositiveParent.value === undefined ? true : isPositiveParent.value)
      }}
      <p :class="{ positive: x }">data from parent : {{ number }}</p>
    </div>
  </div>
</template>

<script setup>
import VmodelInputTwo from './VmodelInputVue3.vue';
import { ref } from 'vue';
const number = ref(0);
let valueIsNotDefined = undefined;
const isPositiveParent = ref(true);

function handleChildData(data) {
  isPositiveParent.value = data;
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 20px;
}
.block {
  border: solid 2px black;
  padding: 30px;
}
.positive {
  color: aquamarine;
}
p {
  color: brown;
}
</style>
