<template>
  <div>
    <div v-if="data.length > 4">Задание выполнено</div>
    <div v-else>Задание из 5 карточек в процессе</div>
    <Card v-for="card in data" :title="card.title" :key="card.id" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "./CardComponent.vue";

const data = ref([
  { id: 1, title: "Banana" },
  { id: 2, title: "Apple" },
  { id: 3, title: "Grape" },
  { id: 4, title: "Watermelon" },
  // { id: 5, title: "Peach" },
]);
</script>

<style scoped></style>
