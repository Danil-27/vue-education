<template>
  <div class="img-wrapper">
    <img class="img" :src="props.urlParent || img" alt="ZV" />
    <br />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['urlParent']);
const img = ref(
  'https://art-fresco.ru/upload/webp/iblock/84c/h27mboan0wexup7wnm4bwjqw2px1whm2.webp'
);
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
