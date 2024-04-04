<template>
  <div>
    <h1>prevent</h1>
    <form class="block">
      <p>form</p>
      <button @click="childClick">Нажми и ссылка перезагрузится!</button>
      <button @click.prevent="childClick">Нажми link не перезагрузится !</button>
    </form>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
