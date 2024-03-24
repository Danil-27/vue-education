<template>
  <div class="wrapper">
    <div class="btn">
      <router-link to="/Settings/new">Изменить имя</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.btn {
  margin-top: 30px;
  margin-bottom: 30px;
  display: inline-block;
  background-color: cornflowerblue;
  a {
    transition: 0.3s;
    display: inline-block;
    padding: 10px;
    &:hover {
      background-color: rgb(81, 26, 81);
      transition: 0.3s !important;
      color: rgb(231, 234, 234);
    }
  }
}
</style>
