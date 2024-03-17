<template>
  <div class="box">
    <button class="box__btn" v-on:click="openBtn">Open</button>
    <SlotChildModalVue v-if="booleanBtn" :booleanBtn="booleanBtn" @booleanBtn="handleChildData">
      <template v-slot:title>
        <div><h1>Сегодня будет жарко</h1></div>
      </template>
      <template v-slot:img>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqrmhIhe_BsIHSXrQIfhvPfDTOLZPMu0ZUA&usqp=CAU"
            height="100"
            width="100"
            alt="img"
          />
        </div> </template
    ></SlotChildModalVue>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SlotChildModalVue from './slotTasks/SlotChildModal.vue';

const booleanBtn = ref(false);

function openBtn() {
  booleanBtn.value = true;
}

function handleChildData(data) {
  booleanBtn.value = data.value;
}
</script>

<style lang="scss" scoped>
.box__btn {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px 20px;
}
</style>
