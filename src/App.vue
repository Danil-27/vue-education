<template>
  <h2 class="heading">Modifiers</h2>
  <div class="flex">
    <LazyModifiers class="input"></LazyModifiers>
    <NumberModifiers class="input"></NumberModifiers>
    <TrimModifiers class="input"></TrimModifiers>
  </div>
</template>

<script setup>
import LazyModifiers from './V-modalModifiers/LazyModifiers.vue';
import NumberModifiers from './V-modalModifiers/NumberModifiers.vue';
import TrimModifiers from './V-modalModifiers/TrimModifiers.vue';
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}
h1 {
  padding: 0px;
  margin: 2px;
}
.heading {
  padding: 5px;
  margin: 5px;
  text-align: center;
  background-color: burlywood;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
}
.input {
  border: solid rgb(98, 203, 74) 2px;
  flex-direction: column;
  padding: 10px;
  display: block;
}
</style>
