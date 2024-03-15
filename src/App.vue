<template>
  <div class="app__wrapper app__wrapper_page-type_inner">
    <!-- LEFTBAR -->
    <div class="left-bar">
      <RouterLink to="/">Home ссылка `/`</RouterLink>
      <br />
      <RouterLink to="/Vmodel">Routing ссылка `/Vmodel`</RouterLink>
      <br />
    </div>
    <div class="app__main">
      <!-- CONTENT -->
      DD GOOD
      <RouterView />
      <VifBody></VifBody>
    </div>
  </div>
</template>
I

<script setup>
// import VmodelMainTaskThree from './components/V-model/VmodelMainTaskThree.vue';
// import Vb from './components/V-bind/VbindMain.vue';
import { ref } from 'vue';
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(33, 44, 64);
}
</style>
