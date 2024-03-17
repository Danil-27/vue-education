<template>
  <div class="modal">
    <button class="modal__btn" @click="passUp(booleanBtn)">X</button>
    <slot name="title"> <h1>Сегодня будет жарко</h1></slot>
    <slot name="img"
      ><img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqrmhIhe_BsIHSXrQIfhvPfDTOLZPMu0ZUA&usqp=CAU"
        height="100"
        width="100"
        alt="img"
    /></slot>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';

const booleanChild = ref(false);
const emit = defineEmits('update:booleanBtn', 'booleanBtn');
defineProps(['booleanBtn']);

function passUp(booleanBtn) {
  booleanChild.value = !booleanBtn;
  emit('booleanBtn', booleanChild);
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: cadetblue;
  position: relative;
  &__btn {
    position: absolute;
    top: -10px;
    right: -6px;
    background-color: brown;
    padding: 4px;
  }
}
</style>
