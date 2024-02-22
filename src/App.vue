<template>
  <div class="app">
    <!-- Реализованно спомощью v-if - v-else  -->
    <header class="header">
      <img class="header-img" v-if="showElement" :src="images" alt="picture" />
      <img class="header-img" v-else :src="images" alt="picture" />
      <div class="header__block">
        <button @click="showClickIf" class="showClickIf">Клик <strong>IF</strong></button>
        <button @click="showClickElse" class="showClickIf">Клик <strong>else</strong></button>
      </div>
    </header>
    <!-- Реализованно спомощью @clik -->
    <!-- <header class="header">
      <img class="header-img" :src="images" alt="Картинка" />
      <div class="header__block">
        <button @click="enter" class="enter">войти</button>
        <button @click="exit" class="exit">выйти</button>
      </div>
    </header> -->
    <p class="tasks" v-if="items.length > 5">
      УРа Задание выполнено здесь <strong class="strong">больше</strong> 5 элиментов !
    </p>
    <p class="elseTasks" v-else>
      Задание <strong class="strong">провалено</strong> здесь меньше 5 элиментов !
    </p>
    <div class="for" v-for="item in items" v-bind:key="item">
      <div class="for_item">
        <span>{{ item.title }}</span>
        <button @click="removeObject(item)" class="showClickIf">удалить</button>
        <h2 class="heading">{{ item.title }}</h2>
        <img class="img" :src="item.img" alt="car" />
        <p class="description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showElement: false,
      images:
        'https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-208480728.jpg',
      items: [
        {
          id: 1,
          title: 'Toyota Corolla',
          description:
            'Toyota Corolla 12-го поколения имеет современный и аэродинамичный дизайн, который включает в себя улучшенную внешность, управляемость и поведение на дороге',
          img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Toyota_Corolla_Limousine_Hybrid_Genf_2019_1Y7A5576.jpg'
        },
        {
          id: 2,
          title: 'Ford F-Series',
          description:
            'Ford F-150 является одной из самых популярных моделей пикапов в мире. Некоторые технические характеристики Ford F-150 включают.',
          img: 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/081/852/42f2e8b0-670-0.jpg'
        },
        {
          id: 3,
          title: 'Honda CR-V',
          description:
            'Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:',
          img: 'https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*'
        },
        {
          id: 4,
          title: 'Honda CR-V',
          description:
            'Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:',
          img: 'https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*'
        },
        {
          id: 5,
          title: 'Honda CR-V',
          description:
            'Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:',
          img: 'https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*'
        },
        {
          id: 6,
          title: 'Honda CR-V',
          description:
            'Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:',
          img: 'https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*'
        }
      ]
    };
  },
  methods: {
    exit() {
      this.images =
        'https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-208480728.jpg';
    },
    enter() {
      this.images =
        'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg';
    },
    showClickIf() {
      this.showElement = true;
      this.images =
        'https://icdn.lenta.ru/images/2019/09/07/18/20190907182940553/square_320_4a4daec12981891d5b0270fe7a4de168.jpg';
    },
    showClickElse() {
      this.showElement = false;
      this.images =
        'https://thumbs.dreamstime.com/b/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%BE%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2-208480728.jpg';
    },
    removeObject(items) {
      const index = this.items.indexOf(items);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
strong {
  color: blueviolet;
}
.showClickIf {
  background-color: blanchedalmond;
  padding: 10px 20px;
}
.app {
  background-image: url(https://bgfons.com/uploads/ornaments/ornaments_texture1133.jpg);
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
.tasks {
  background-color: cadetblue;
}
.elseTasks {
  background-color: rgb(163, 40, 58);
}
.strong {
  color: rgb(205, 204, 201);
}
.for {
  display: flex;
  justify-content: center;
  width: 100%;
  color: burlywood;
}
.for_item {
  background: rgb(81, 79, 79);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 50px;
}
.heading {
  font-size: 30px;
}
.img {
  max-width: 300px;
  max-height: 400px;
}
.description {
  text-align: center;
  max-width: 700px;
  margin-top: 10px;
}
</style>
