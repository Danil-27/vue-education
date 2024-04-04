<template>
  <div>
    <h1>passive</h1>
    <div class="passive" @touchmove.prevent.passive="onTouchMove">
      Попробуйте прокрутить это Попробуйте прокрутить это Попробуйте прокрутить это Попробуйте
      прокрутить это
    </div>
  </div>
</template>

<script setup>
function onTouchMove(event) {
  console.log('Прокрутка события тача');
}
</script>

<style lang="scss" scoped>
.passive {
  overflow: scroll;
  height: 30px;
}
</style>
