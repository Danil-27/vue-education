<template>
  <div>Card: {{ title }}</div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps(["title"]);
</script>

<style scoped></style>
