<template>
  <div class="block">
    <H1>Watch Object</H1>
    <div><input type="text" v-model="object.name" /></div>
    <br />
    <div>{{ object }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const object = ref({ ega: 23, name: 'Петр' });

watch(
  () => object.value.name,
  (name) => {
    return console.log('Выполнилась Watch: ', name);
  }
);
</script>

<style scoped lang="scss">
.block {
  padding: 20px;
}
.input__block {
  input {
    margin-right: 20px;
  }
}

.computed {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(93, 92, 169);
  border-radius: 10px;
  border: solid 2px black;
}
</style>
