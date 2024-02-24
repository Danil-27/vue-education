<template>
  <div class="tasks">
    <div class="task">
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
    <div class="task">
      <div>Task 2</div>
      <p v-bind:class="customColor" class="task__text">
        color me (by v-bind:class)!🔥
      </p>
      <p v-bind:style="{ color: customColor }" class="task__text">
        color me (by v-bind:style)!✨
      </p>
      <div class="btns">
        <button @click="customColor = 'blue'">blue</button>
        <button @click="customColor = 'green'">green</button>
        <button @click="customColor = 'orange'">orange</button>
      </div>
    </div>

    <div class="task">
      <div>Task 3</div>
      <div>Current picture:</div>
      <div class="img-wrapper img-wrapperNaruto--current">
        <img
          :src="currentNarutoImage || defaultImageNaruto"
          alt="default image"
          class="task__img"
        />
      </div>
      <button @click="swapNarutoPicture(defaultImageNaruto)">
        Set default!
      </button>
      <div>Available pictures:</div>
      <div class="imagesNaruto">
        <div v-for="image in images" :key="image.id" class="img-wrapper">
          <img
            :src="image.src"
            alt="picture of character"
            class="task__img"
            @click="swapNarutoPicture(image.src)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const link = ref("");
const customColor = ref("");

const currentNarutoImage = ref("");
const images = [
  {
    id: 1,
    src: "https://viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/564x/70/64/55/7064556770ef722f5c1d20968a0ded53.jpg",
  },
  {
    id: 3,
    src: "https://avatars.dzeninfra.ru/get-zen_doc/4364496/pub_6224c1dc8e10b21e79167aef_6224c2259ab6767e34267203/scale_1200",
  },
];

const defaultImage =
  "https://f8.pmo.ee/wzKYitGs5fJ_6bi3QRd7YJeHwkk=/685x0/nginx/o/2022/08/03/14736428t1h4a35.jpg";
const defaultImageNaruto =
  "https://cojo.ru/wp-content/uploads/2022/12/naruto-konokha-1-2.webp";

function swapNarutoPicture(link: string): void {
  console.log("переданный аргумент: ", link);
  console.log("currentNarutoImage before is: ", currentNarutoImage.value);
  currentNarutoImage.value = link;
  console.log("currentNarutoImage after is: ", currentNarutoImage.value);
}
</script>

<style scoped>
.imagesNaruto {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.img-wrapperNaruto--current {
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
    rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
    rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.orange {
  color: orange;
}
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
  width: 300px;
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
