<template>
  <div class="inputBlock">
    <input
      type="text"
      :value="number"
      @input="($event) => $emit('update:number', $event.target.value)"
    />
    <p :class="{ positive: isPositive }">Data from child: {{ props.number }}</p>
    <button @click="compare">Проверить значение from child</button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps({
  number: {
    type: String
  }
});

const emit = defineEmits(['update:number', 'isFromPositive']);
const isPositive = ref(true);

function compare() {
  emit('isFromPositive', isPositive);
  if (props.number < 0) {
    isPositive.value = false;
  } else {
    isPositive.value = true;
  }
}
</script>

<style scoped>
.inputBlock {
  border: solid 2px black;
  padding: 30px;
}
.positive {
  color: aquamarine;
}
p {
  color: brown;
}
</style>
