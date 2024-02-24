<template>
  <div>
    <div class="img-wrapper">
      <img class="img" :src="props.TheInputUrl || BaseImg" alt="img" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['TheInputUrl']);

const BaseImg = 'https://timeweb.com/ru/community/article/1d/1d959c23e81024374895da086675b298.jpg';
</script>

<style scoped>
.img-wrapper {
  width: 280px;
  height: 180px;

  border: 3px solid rgb(25, 85, 128);
  border-radius: 6px;
  overflow: hidden;
}
.img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
  transition: 0.3s;
}
.img:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
</style>
