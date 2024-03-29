<template>
  <div class="user__card">
    <h1>TeleportMain</h1>
    <p>Jonh</p>
    <p class="margin-bottom">development</p>
    <BaseModel class="BaseModel"></BaseModel>
  </div>
</template>

<script setup>
import BaseModel from './BaseModel.vue';
</script>

<style lang="scss" scoped>
.user__card {
  padding: 20px;
  border-radius: 20px;
  border: solid rgb(201, 100, 100) 2px;
  opacity: 0.9;
}
.margin-bottom {
  margin-bottom: 15px;
}
</style>
