<template>
  <article class="content__dishes-offers-dish">
    <img
      :src="dish.image"
      :alt="dish.title"
      class="content__dishes-offers-dish-img"
    />
    <div class="content__dishes-offers-dish-content">
      <h3 class="content__dishes-offers-dish-content-title">
        {{ dish.title }}
      </h3>
      <p class="content__dishes-offers-dish-content-size">{{ dish.size }}</p>
    </div>
    <div class="content__dishes-offers-dish-subscription">
      <p class="content__dishes-offers-dish-ingredients">
        {{ dish.ingredients }}
      </p>
      <p class="content__dishes-offers-dish-price">{{ dish.price }}</p>
    </div>
    <button
      class="content__dishes-offers-dish-button"
      @click="addToCartHandle"
    ></button>
  </article>
</template>

<script>
import { getDocs } from "firebase/firestore";

export default {
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCartHandle() {
      this.$emit("addToCart", this.dish); // calling addDishToCart(dish) event
    },
  },
};
</script>

<style lang="scss" scoped>
.content__dishes-offers-dish {
  position: relative;
  border: 2px solid #eceef6;
  border-radius: 20px;
  max-width: 16.2em;
  width: 100%;
  padding: 2.2em 1em 2em 1.5em;
  height: 26.5em;

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    margin-bottom: 0.5em;
  }

  &-content-title {
    margin-right: 2.6em;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    white-space: pre-line;
  }

  &-content-size {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  &-ingredients {
    text-align: left;
    margin-bottom: 1.1em;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  &-price {
    text-align: center;
    margin-bottom: 1.1em;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    color: #121146;
  }

  &-button {
    position: absolute;
    left: 46%;
    bottom: -1em;
    z-index: 2;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 2em;
    height: 2em;
    background-image: url(../assets/img/buy.svg);
    background-repeat: no-repeat;
    border: 2px solid #eceef6;
    background-color: #ffffff;
    background-position: center;
    border-radius: 50%;
    cursor: pointer;
  }
  &::after {
    content: url(../assets/img/triagle.svg);
    display: block;
    position: absolute;
    bottom: -1.73em;
    left: 5.5em;
    z-index: 1;
  }
}
.content__dishes-offers-dish-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.8em;
  max-width: 10.5em;
  width: 100%;
  max-height: 10em;
  height: 100%;
}
</style>
