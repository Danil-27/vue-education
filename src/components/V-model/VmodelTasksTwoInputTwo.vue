<template>
  <div>
    <input
      :value="numberTwo"
      @input="($event) => $emit('update:numberTwo', $event.target.value)"
      type="text"
      placeholder="number two"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  numberTwo: {
    type: Number
  }
});

const emit = defineEmits(['update:numberTwo']);
</script>

<style scoped></style>
