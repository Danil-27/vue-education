<template>
  <div class="container">
    <div class="btns">
      <button @click="isModalOpen = !isModalOpen">show \ hide modal!</button>
      <button @click="modalContent = soup">set Soup to Modal</button>
      <button @click="modalContent = kasha">set Kasha to Modal</button>
    </div>
    <Modal v-show="isModalOpen">
      {{ modalContent }}
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Modal from './components/ModalComponent.vue';

const isModalOpen = ref(false);
const modalContent = ref('base modal content from App!');

const soup = 'this is soup!';
const kasha = 'awesome appetit kasha!!';
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
