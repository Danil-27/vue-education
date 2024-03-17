<template>
  <div class="inputBlock">
    <input
      type="text"
      :value="searchText"
      @input="($event) => $emit('updateText', $event.target.value)"
    />
    <p>text child: {{ props.searchText }}</p>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
const props = defineProps({
  searchText: String
});

defineEmits('update:searchText', props.searchText);
</script>

<style scoped>
.inputBlock {
  border: solid 2px black;
  padding: 30px;
}
</style>
