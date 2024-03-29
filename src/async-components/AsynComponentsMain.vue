<template>
  <div class="block">
    <div class="featured-movie">
      <img :src="movie.img" alt="vue" />
      <div class="movie-content">
        <h1>name:{{ movie.name }}</h1>
        <p>description:{{ movie.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';

const movie = ref(null);

const getMovie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  movie.value = {
    img: 'data:image/png;base64,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',
    name: 'Avengers Endgame',
    description: 'Adrift in space with no food or water, Tony Stark '
  };
};

await getMovie();
</script>

<style lang="scss" scoped>
.block {
  padding: 20px;
  height: 600px;
  background: rgb(103, 110, 102);
  background: linear-gradient(
    90deg,
    rgb(73, 76, 73) 0%,
    rgb(92, 92, 123) 51%,
    rgba(0, 0, 0, 1) 100%
  );
  color: bisque;
}
</style>
