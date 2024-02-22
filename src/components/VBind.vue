<template>
  <div class="tasks">
    <div class="tasks__one task">
      <div>Task 1</div>
      <div class="img-wrapper">
        <img
          v-bind:src="link || defaultImage"
          alt="uploaded picture"
          class="task__img"
        />
      </div>

      <input
        v-model="link"
        placeholder="htttps://pic.ru/cat.jpg"
        class="task__input"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const link = ref("");
const defaultImage =
  "https://f8.pmo.ee/wzKYitGs5fJ_6bi3QRd7YJeHwkk=/685x0/nginx/o/2022/08/03/14736428t1h4a35.jpg";
</script>

<style scoped>
.tasks {
  background: -webkit-linear-gradient(#ffe894, #ffccf8);
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.task {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 10px 7px;
  width: fit-content;
}
.img-wrapper {
  width: 280px;
  height: 180px;

  border: 3px solid whitesmoke;
  border-radius: 6px;
  overflow: hidden;
}
.task__img {
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
  transition: 0.3s;
}
.task__img:hover {
  transform: scale(1.1);
}
.task__input {
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
}
</style>
