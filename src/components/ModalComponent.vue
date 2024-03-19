<template>
  <div class="modal">
    <slot>default modal content</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.modal {
  border: 2px solid red;
  width: 250px;
  height: 250px;
  margin: auto;
}
</style>
