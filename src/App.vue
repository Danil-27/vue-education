<template>
  <div class="background">
    <button class="btn" @click="open">Открыть окно</button>
    <ModalVue v-if="booleanModel === true"> <template v-slot:close></template></ModalVue>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import ModalVue from './components/Slot/ModalVue.vue';

// const props = defineProps(booleanModel);
const booleanModel = ref(false);
function open() {
  booleanModel.value = true;
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(33, 44, 64);
}

.background {
  width: 100%;
  height: 100vh;
  background-color: rgb(70, 63, 77);
  color: blanchedalmond;
}

.btn {
  padding: 5px 10px;
  color: blanchedalmond;
  background-color: chocolate;
  margin: 30px;
}
</style>
