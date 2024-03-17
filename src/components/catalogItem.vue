<template>
  <div class="product">
    <div class="product__title">
      <slot name="product-title">Default title</slot>
    </div>
    <div class="img-wrapper">
      <slot name="product-image">
        <img
          class="img"
          src="https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
          alt="no image available"
        />
      </slot>
    </div>

    <slot name="product-price">Бесценно</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
}

.img-wrapper {
  width: 300px;
  height: 200px;
  border-style: solid;
  border-radius: 6px;
  transition: 0.4s;
  overflow: hidden;
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
