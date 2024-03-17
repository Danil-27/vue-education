<template>
  <div class="vbind-one">
    <form @submit.prevent class="vbind-one__form">
      <input
        class="vbind-one__input"
        type="text"
        placeholder="Insert image URL"
        :value="takeValuetUrl"
        @input="takeValuetUrl = $event.target.value"
      />
      <button class="vbind-one__button" @click="sendDataToParent">Добавить картинку</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const takeValuetUrl = ref('');

const emit = defineEmits(['valueFromInput']);

const sendDataToParent = () => {
  emit('valueFromInput', takeValuetUrl);
};
</script>

<style scoped>
.vbind-one {
  padding: 20px;
  text-align: center;
  font-size: 30px;
}
.vbind-one__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
}
.vbind-one__input {
  max-width: 300px;
  border: solid rgb(48, 188, 227) 2px;
}
.vbind-one__button {
  padding: 6px;
  border: solid rgb(48, 188, 227) 2px;
  background-color: rgb(166, 159, 154);
  color: rgb(25, 25, 27);
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
}
.vbind-one__button:hover {
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  transition: 1s;
}
.vbind-one__button:active {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
