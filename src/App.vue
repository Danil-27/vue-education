<template>
  <div class="app">
    <VbindMainThree />
    <VbindMain />
    <VbindTwoClass />
  </div>
</template>

<script setup>
import VbindMainThree from './components/V-bind/VbindMainThree.vue';
import VbindMain from './components/V-bind/VbindMain.vue';
import VbindTwoClass from './components/V-bind/VbindTwoClass.vue';
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
