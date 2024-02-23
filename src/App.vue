<template>
  <div class="app">
    <Vif-header></Vif-header>
    <VifBody></VifBody>
  </div>
</template>

<script>
import VifBody from './components/VifBody.vue';
import VifHeader from './components/VifHeader.vue';
export default {
  components: {
    VifHeader,
    VifBody
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
