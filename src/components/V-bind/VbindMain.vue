<template>
  <div>
    <VbindOne class="components" @valueFromInput="handleChildData" />
    <VbindOneObj class="components components__img" :TheInputUrl="valueUrl" />
  </div>
</template>

<script setup>
import VbindOne from './VbindOneInput.vue';
import VbindOneObj from './VbindOneImage.vue';
import { ref } from 'vue';

const valueUrl = ref('');

const handleChildData = (data) => {
  valueUrl.value = data.value;
};
</script>

<style scoped>
.components {
  background: rgb(238, 174, 202);
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
.components__img {
  display: flex;
  justify-content: center;
  padding: 30px;
}
</style>
