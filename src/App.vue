<template>
  <div>
    parent input:
    <input :value="myData" @input="handleParentInput" type="text" />
    <div>parent: {{ myData }}</div>
    <Post :childData="myData" @inputChild="handleChildInput" />
  </div>
</template>

<script setup lang="ts">
import Post from "./components/PostComponent.vue";
import { ref } from "vue";

const myData = ref("baseValue");

function handleParentInput(event: Event): void {
  const elem = event.target as HTMLInputElement;
  myData.value = elem.value;
}
function handleChildInput(childData: string): void {
  myData.value = childData;
}
</script>
