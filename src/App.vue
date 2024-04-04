<template>
  <h2 class="heading">Modifiers</h2>
  <div class="flex">
    <modifiersStop class="btn"></modifiersStop>
    <modifiersPrevent class="btn"></modifiersPrevent>
    <modifiersCapture class="btn"></modifiersCapture>
    <modifiersSelf class="btn"></modifiersSelf>
    <modifiersOnce class="btn"></modifiersOnce>
    <modifiersPassive class="btn"></modifiersPassive>
  </div>
</template>

<script setup>
import modifiersStop from './components/ModifiersStop.vue';
import modifiersPrevent from './components/ModifiersPrevent.vue';
import modifiersCapture from './components/ModifiersCapture .vue';
import modifiersSelf from './components/ModifiersSelf.vue';
import modifiersOnce from './components/ModifiersOnce.vue';
import modifiersPassive from './components/ModifiersPassive.vue';
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
.btn {
  padding: 10px;
  display: block;
  border: 2px solid rgb(55, 158, 169);
}
</style>
