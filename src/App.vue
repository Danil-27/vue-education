<template>
  <div>
    parent input:
    <input v-model="myData" type="text" />
    <div>parent: {{ myData }}</div>
    <Post :childData="myData" @inputChild="handleChildInput" />
  </div>
</template>

<script setup lang="ts">
import Post from "./components/PostComponent.vue";
import { ref } from "vue";

const myData = ref("baseValue");

function handleChildInput(childData: string): void {
  myData.value = childData;
}
</script>
