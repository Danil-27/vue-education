<template>
  <div class="box">
    <div class="box-flex">
      <VbindThreeObject @valueObjectUrl="getChildData" />
      <VbindThreeImage :urlParent="url" />
    </div>
    <div class="btn-box">
      <button class="button" @click="replaceBaseImages">Base Images</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VbindThreeImage from './VbindThreeImage.vue';
import VbindThreeObject from './VbindThreeObject.vue';

const url = ref('');

const getChildData = (data) => {
  url.value = data.value;
};
function replaceBaseImages() {
  url.value = '';
}
</script>

<style scoped>
.box {
  padding: 20px;
  background: rgb(200, 20, 20);
  background: linear-gradient(
    90deg,
    rgba(200, 20, 20, 1) 0%,
    rgba(105, 105, 158, 1) 48%,
    rgba(0, 0, 0, 1) 100%
  );
}
.box-flex {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.btn-box {
  display: flex;
  justify-content: center;
}
.button {
  padding: 6px;
  border: solid rgb(48, 188, 227) 2px;
  background-color: rgb(166, 159, 154);
  color: rgb(25, 25, 27);
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}
.button:hover {
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  transition: 1s;
}
.button:active {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
