<template>
  <div>
    <div>name: {{ user.name }}</div>
    <div>password: {{ user.password }}</div>

    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.password" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
interface User {
  name: string;
  password: string;
}
const user = ref<User>({ name: 'defaultName', password: 'defaultPassword' });

watch(
  () => user.value.name,
  (name) => console.log('changed!', name)
);
</script>

<style scoped></style>
