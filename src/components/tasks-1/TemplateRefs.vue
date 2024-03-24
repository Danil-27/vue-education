<template>
  <div class="box">
    <div class="blockNoRender"></div>
    <div class="blockRender">
      <input type="text" ref="el" />
    </div>
    <button @click="getDiv">getDiv</button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
document.body.prepend(div);
const el = ref('');
const blockRender = document.querySelector('.blockRender');

function getDiv() {
  console.log(blockRender.value, 'onMounted div');
}
onMounted(() => {
  console.log(el.value, 'onMounted input');
});

watch(el, (el) => {
  console.log(el, 'watch input');
});
</script>

<style lang="scss" scoped>
.box {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>
