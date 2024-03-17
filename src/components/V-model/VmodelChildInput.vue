<template>
  <div>
    <P>Child components {{ data }}</P>
    <input type="text" :value="data" @input="$event = $emit('update:data', $event.target.value)" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  data: {
    type: String
  }
});

const emit = defineEmits(['update:data']);
</script>

<style scoped></style>
