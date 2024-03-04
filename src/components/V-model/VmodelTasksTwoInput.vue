<template>
  <div>
    <input
      :value="numberOne"
      @input="($event) => $emit('update:numberOne', $event.target.value)"
      type="text"
      placeholder="number one"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps({
  numberOne: {
    type: Number
  }
});

const emit = defineEmits(['update:numberOne']);
</script>

<style scoped></style>
