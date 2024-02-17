<template>
  <div class="app">
    <p class="tasks" v-if="items.length > 5">
      УРа Задание выполнено здесь <strong class="strong">больше</strong> 5
      элиментов !
    </p>
    <p class="elseTasks" v-else>
      Задание <strong class="strong">провалено</strong> здесь меньше 5 элиментов
      !
    </p>
    <div class="for" v-for="item in items" v-bind:key="item">
      <div class="for_item">
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
      items: [
        {
          id: 1,
          title: "Toyota Corolla",
          description:
            "Toyota Corolla 12-го поколения имеет современный и аэродинамичный дизайн, который включает в себя улучшенную внешность, управляемость и поведение на дороге",
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Toyota_Corolla_Limousine_Hybrid_Genf_2019_1Y7A5576.jpg",
        },
        {
          id: 2,
          title: "Ford F-Series",
          description:
            "Ford F-150 является одной из самых популярных моделей пикапов в мире. Некоторые технические характеристики Ford F-150 включают.",
          img: "https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/081/852/42f2e8b0-670-0.jpg",
        },
        {
          id: 3,
          title: "Honda CR-V",
          description:
            "Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:",
          img: "https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*",
        },
        {
          id: 4,
          title: "Honda CR-V",
          description:
            "Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:",
          img: "https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*",
        },
        {
          id: 5,
          title: "Honda CR-V",
          description:
            "Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:",
          img: "https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*",
        },
        {
          id: 6,
          title: "Honda CR-V",
          description:
            "Honda CR-V III Рестайлинг представляет собой модель с обновленным дизайном и техническими характеристиками. Некоторые технические характеристики Honda CR-V III Рестайлинг включают:",
          img: "https://hips.hearstapps.com/hmg-prod/images/10best-trucks-suvs-2023-honda-crv-113-1673298616.jpg?crop=0.634xw:0.714xh;0.181xw,0.230xh&resize=768:*",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app {
  background-image: url(https://bgfons.com/uploads/ornaments/ornaments_texture1133.jpg);
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
