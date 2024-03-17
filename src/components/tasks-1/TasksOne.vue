<template>
  <div class="box container">
    <div class="box__header">
      <router-link to="/">Home</router-link>
      <router-link to="/Users">Users</router-link>
      <router-link to="/Settings">Settings</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss">
a {
  text-decoration: none;
  color: rgb(24, 24, 24);
}
.container {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
}

.box {
  background-color: var(main);
  height: 100vh;
  &__header {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    background-color: rgb(92, 98, 55);
    a {
      padding: 10px 5px;
      background-color: chocolate;
    }
  }
}
</style>
