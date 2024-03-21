<template>
  <div>
    computed
    <input type="text" v-model="figureWidth" />* <input type="text" v-model="figureHeight" />={{
      result + 'px'
    }}
    <div class="figure" :style="{ width: figureWidth + 'px', height: figureHeight + 'px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const figureWidth = ref(5);
const figureHeight = ref(5);

const result = computed((): number => figureWidth.value * figureHeight.value);
</script>

<style scoped>
.figure {
  background-color: green;
  border: 2px solid red;
}
</style>
