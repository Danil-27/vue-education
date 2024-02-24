<template>
  <div class="wrapper">
    <div class="object img-wrapper" v-for="obj in objects" :key="obj">
      <img class="img" @click="sendDataToParent(obj.url)" :src="obj.url" alt="image" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['valueObjectUrl']);

const sendDataToParent = (url) => {
  let valueObjectUrl = ref(url);
  emit('valueObjectUrl', valueObjectUrl);
};

const objects = ref([
  {
    id: 0,
    url: 'https://liss-art.ru/wp-content/uploads/2023/02/zvezdnye-voyiny-7.jpg'
  },
  {
    id: 1,
    url: 'https://pikuco.ru/upload/test_stable/c80/c8086b9ea3c937428538544ce9b15ce8.webp'
  },
  { id: 2, url: 'https://i.pinimg.com/736x/85/f7/13/85f71310d93595f1f7829e04e9d2f427.jpg' },
  {
    id: 3,
    url: 'https://art-fresco.ru/upload/webp/iblock/74e/ykx12ye1qfi67k9k50w698l9yi0fq6mx.webp'
  },
  {
    id: 4,
    url: 'https://img.freepik.com/premium-photo/star-wars-the-force-awakens-fan-art_890191-474.jpg'
  }
]);
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 320px;
}
.img-wrapper {
  width: 100px;
  height: 80px;

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
