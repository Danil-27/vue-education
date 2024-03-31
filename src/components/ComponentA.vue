<template>
  <div class="round">
    component A
    <B />
    <D />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import B from './ComponentB.vue';
import D from './ComponentD.vue';

const productData = {
  title: 'Том Ям',
  price: '490',
  picture_url: 'https://www.edim.tv/img/large/tom-yum.jpg'
};
const productCount = ref(1);
const spicy = ref(1);

provide('currentProduct', productData);
provide('params', { productCount, spicy });
</script>

<style scoped>
.round {
  border: 2px solid green;
  padding: 5px;
}
:deep(.round) {
  border-color: red;
}
</style>
