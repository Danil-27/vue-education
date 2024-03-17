<template>
  <div class="catalog">
    <Item v-for="product in products" :key="product.id">
      <template #product-title v-if="product.title">
        {{ product.title }}
      </template>
      <template #product-image v-if="product.imgUrl">
        <img :src="product.imgUrl" alt="" class="img" />
      </template>
      <template #product-price v-if="product.price">
        {{ product.price }}
      </template>
    </Item>
  </div>
</template>

<script setup lang="ts">
import Item from './catalogItem.vue'

const products = [
  {
    id: 1,
    title: 'Мини Дамплинги',
    price: '470',
    imgUrl:
      'https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/q_H6uSehsG-GKrUlnHJ2MilZQmNflv4ns9pRJ-XnaIk/pr:large/MnlmbG1hNXNpZjB4/aTl0dmFtbGpwbDlq/cTN2bg'
  },
  {
    id: 2,
    title: '', // Креветки Темпура
    price: '399',
    imgUrl:
      'https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/T7w7cOrhFOhCznT57CFJU-ZSbjPxHgoLVTFfAAhe1yA/pr:large/enhmeGVoZjRxaHc1/YXpwZmgxeHVta2Nr/NXF3bQ'
  },
  {
    id: 3,
    title: 'Лосось темпура',
    price: '499',
    imgUrl:
      'https://977dba4f-c570-41cd-b9a9-7e6dd1fedbf6.selcdn.net/images/3CR86ZJ8iDtDUXwdLD2qXQQokFkwJ6m111kib4KB2uU/pr:large/aWpnOW5ud2xpNnJq/d2phcGkxc2Y5OXhj/bG45Ng'
  }
]
</script>

<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: 0.4s;
}

.img:hover {
  transform: scale(1.04);
}
</style>
