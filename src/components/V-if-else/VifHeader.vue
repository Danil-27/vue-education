<template>
  <div class="header">
    <img class="header-img" v-if="showElement" :src="images" alt="picture" />
    <img class="header-img" v-else :src="images" alt="picture" />
    <div class="header__block">
      <button @click="showClickIf" class="showClickIf">Клик <strong>IF</strong></button>
      <button @click="showClickElse" class="showClickIf">Клик <strong>else</strong></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showElement: false,
      images:
        'https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-208480728.jpg'
    };
  },
  methods: {
    showClickIf() {
      this.showElement = true;
      this.images =
        'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg';
    },
    showClickElse() {
      this.showElement = false;
      this.images =
        'https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-208480728.jpg';
    }
  }
};
</script>

<style scoped>
.showClickIf {
  background-color: blanchedalmond;
  padding: 10px 20px;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: rgb(114, 64, 29);
}
.header-img {
  border-radius: 50%;
  height: 80px;
  width: 80px;
}
.header__block {
  display: flex;
  gap: 0px 20px;
}

.tasks,
.elseTasks {
  font-size: 40px;
  color: burlywood;
  text-align: center;
}
</style>
