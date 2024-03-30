<template>
  <h2>BaseModel</h2>
  <button @click="openModal">View User</button>

  <Teleport to="#model">
    <div class="modal-wrap" v-if="isModalOpen">
      <div class="modal">
        <slot>
          <h1>Vue Teleport BaseModel</h1>
          <p>This modal is now outside of our vue application!</p>
        </slot>
        <button @click="closeModal">Close</button>
        <GlobalComponent>sss</GlobalComponent>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(null);

const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: #000;
}

.modal {
  padding: 20px;
  background-color: #fff;
}
</style>
