<template>
  <main class="container">
    <Suspense @pending="pending" @fallback="fallback" @resolved="resolved">
      <template #default>
        <AsynComponentsMain />
      </template>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import AsynComponentsMain from './async-components/AsynComponentsMain.vue';

const pending = () => {
  console.log('pending');
};
const fallback = () => {
  console.log('fallback');
};
const resolved = () => {
  console.log('resolved');
};
</script>

<style scoped lang="scss">
:deep(*) {
  padding: 0px;
  margin: 0px;
}
</style>
