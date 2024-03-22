<template>
  <div class="box">
    <div class="box__btn">
      <button class="btn" v-for="tab in tabs" :key="tab" @click="component = tab">
        {{ tab }}
      </button>
    </div>
    <keep-alive>
      <component class="component" :is="component == 'About' ? About : null" />
    </keep-alive>
    <keep-alive>
      <component class="component" :is="component == 'Contact' ? Contact : null" />
    </keep-alive>
  </div>
</template>

<script setup>
import Contact from './ContactNew.vue';
import About from './AboutNew.vue';
import { ref } from 'vue';

let component = ref('');
const tabs = ref(['About', 'Contact']);
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  padding-top: 25px;
  &__btn {
    display: flex;
    height: 30px;
    gap: 20px;
    .btn {
    }
  }
}
.component {
  margin-top: 20px;
}
</style>
