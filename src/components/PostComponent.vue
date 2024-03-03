<template>
  <div>
    child input:
    <input :value="childData" @input="handleChildInput($event)" type="text" />
    <div>child: {{ childData }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps(["childData"]);
const emit = defineEmits(["inputChild"]);
function handleChildInput(event: Event): void {
  const elem = event.target as HTMLInputElement;
  emit("inputChild", elem.value);
}
</script>

<style scoped></style>
