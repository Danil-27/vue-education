<template>
  <div>
    watch

    <input type="text" v-model="figureWidth" />* <input type="text" v-model="figureHeight" />={{
      result + 'px'
    }}
    <div class="figure" :style="{ width: figureWidth + 'px', height: figureHeight + 'px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const figureWidth = ref(5);
const figureHeight = ref(5);
const result = ref();

watch([figureWidth, figureHeight], () => {
  result.value = figureWidth.value * figureHeight.value;
});
</script>

<style scoped>
.figure {
  background-color: black;
  border: 2px solid orange;
}
</style>
