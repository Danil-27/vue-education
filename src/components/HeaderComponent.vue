<template>
  <div class="header">
    <button v-if="isLogin" @click="isLogin = false" class="btn">Войти</button>
    <button v-else @click="isLogin = true" class="btn">Выйти</button>
    <img v-if="isLogin" src="../assets/user.png" class="icon icon-login" />
    <img v-else src="../assets/arrow.png" class="icon icon-logout" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLogin = ref(true);
</script>

<style scoped>
.header {
  background-color: rgb(251, 255, 3);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
}
.btn {
  width: 85px;
  height: 30px;
}
.icon {
  max-width: 40px;
}
</style>
