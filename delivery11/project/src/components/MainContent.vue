<template>
  <div class="wrapper">
    <div class="container">
      <div class="content__header">
        <div
          class="content__header-basket"
          @mouseenter="isOrderSummaryVisible = true"
          @mouseleave="isOrderSummaryVisible = false"
        >
          <button class="content__header-basket-btn">
            <img
              class="content__header-basket-btn-img"
              src="../assets/img/bag.svg"
              alt=""
            />
            <span class="content__header-basket-btn-order-count">{{
              orderCount
            }}</span>
          </button>
          <div
            v-if="isOrderSummaryVisible"
            class="content__header-order-summary"
          >
            = {{ totalOrderPrice }} ₴
            <!-- <button
              class="content__header-order-summary-close"
              @click="isOrderSummaryVisible = false"
            >
              &times;
            </button> -->
          </div>
        </div>

        <h2 class="content__header-title title">Popular dishes</h2>
      </div>
      <div class="content__dishes">
        <div class="content__dishes-tabs">
          <button
            v-for="category in categories"
            :key="category"
            class="content__dishes-tabs-btn"
            @click="changeCategory(category)"
            :class="{ active: category === activeCategory }"
          >
            {{ category }}
          </button>
        </div>
        <div class="content__dishes-offers">
          <article
            v-for="(dish, index) in displayedDishes"
            :key="index"
            class="content__dishes-offers-dish"
          >
            <img
              :src="dish.image"
              :alt="dish.title"
              class="content__dishes-offers-dish-img"
            />
            <div class="content__dishes-offers-dish-content">
              <h3 class="content__dishes-offers-dish-content-title">
                {{ dish.title }}
              </h3>
              <p class="content__dishes-offers-dish-content-size">
                {{ dish.size }}
              </p>
            </div>
            <div class="content__dishes-offers-dish-subscription">
              <p class="content__dishes-offers-dish-ingredients">
                {{ dish.ingredients }}
              </p>
              <p class="content__dishes-offers-dish-price">{{ dish.price }}</p>
            </div>
            <button
              class="content__dishes-offers-dish-button"
              @click="addDishToCart(dish)"
            ></button>
          </article>
        </div>
        <button
          v-if="showLoadMore"
          @click="loadMoreDishes"
          class="content__dishes-offers-btn"
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getDocs } from "firebase/firestore";

export default {
  props: ["dishesRef"],
  data() {
    return {
      dishes: [],
      displayedDishes: [],
      batchSize: 8,
      lastDisplayedIndex: 0,
      showLoadMore: false,
      categories: ["Pizza", "Sushi", "Salad", "Dessert", "Drinks"],
      selectedCategory: "Pizza",
      cart: [],
      orderCount: 0,
      totalOrderPrice: 0, // sum of an order
      isOrderSummaryVisible: false,
    };
  },
  methods: {
    loadMoreDishes() {
      const categoryDishes = this.dishes[this.selectedCategory] || [];
      const newDisplayedDishes = categoryDishes.slice(
        this.lastDisplayedIndex,
        this.lastDisplayedIndex + this.batchSize
      );
      this.displayedDishes = this.displayedDishes.concat(newDisplayedDishes);
      this.lastDisplayedIndex += this.batchSize;

      if (this.lastDisplayedIndex >= categoryDishes.length) {
        this.showLoadMore = false;
      }
    },
    changeCategory(category) {
      this.activeCategory = category;
      console.log("Chosen category", category);
      this.selectedCategory = category;
      const categoryKey = category.toLowerCase();
      this.displayedDishes = [];
      this.cart = []; // cart reset
      this.displayedDishes = this.dishes[categoryKey] || [];
      this.lastDisplayedIndex = this.displayedDishes.length;
      this.showLoadMore = this.displayedDishes.length > this.batchSize;
      for (const dish of this.dishes[category] || []) {
        if (this.displayedDishes.length < this.batchSize) {
          this.displayedDishes.push(dish);
        } else {
          this.showLoadMore = true;
          break;
        }
      }
      this.lastDisplayedIndex = this.displayedDishes.length;
    },
    addDishToCart(dish) {
      this.cart.push(dish);
      this.orderCount += 1;

      // update sum
      this.totalOrderPrice += parseFloat(dish.price.replace(" UAH", ""));
      this.isOrderSummaryVisible = true; // show sum of an order
    },
  },
  mounted() {
    getDocs(this.dishesRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const dishData = doc.data();
          console.log("Fetched dish:", dishData);
          const category = dishData.type || "Other"; // type Firebase
          const categoryKey = category.toLowerCase();
          if (!this.dishes[categoryKey]) {
            this.$set(this.dishes, categoryKey, []); //array for no category
          }
          this.dishes[categoryKey].push(dishData);
        });
        this.changeCategory(this.selectedCategory);
      })
      .catch((error) => {
        console.error("Error getting dishes: ", error);
      });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: url(../assets/img/bg-dishes.png);
  background-repeat: space;
  background-size: cover;
}
.content {
  &__header {
    margin-top: 8.7em;
  }

  &__header-basket {
    position: relative;
    text-align: right;
  }

  &__header-basket-btn {
    border: none;
    border-radius: 50%;
    width: 5em;
    height: 5em;
    background-color: #ffffff;
    box-shadow: 1px 1px 18px 11px rgba(199, 197, 197, 0.3);
    cursor: pointer;
  }
  &__header-basket-btn-img {
    display: block;
    width: 4.5em;
    margin-right: auto;
    margin-left: auto;
  }
  &__header-order-summary {
    position: absolute;
    top: 0;
    left: 83%;
    background-color: #3f3f3f;
    padding: 1em;
    max-width: 6em;
    width: 100%;
    text-align: left;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    border-radius: 9px;
  }
  &__header-basket-btn-order-count {
    position: absolute;
    bottom: -0.5em;
    right: 0;
    background-color: #f58656;
    border-radius: 50%;
    color: #fff;
    width: 1.8em;
    height: 1.8em;
    line-height: 24px;
    font-weight: 600;
  }
  &__header-title {
    margin-bottom: 1em;
    text-align: center;
  }

  &__dishes {
  }

  &__dishes-tabs {
    margin-bottom: 3.1em;
    text-align: center;
  }

  &__dishes-tabs-btn {
    padding: 1em 3em;
    margin-right: 1.9em;
    border-radius: 45px;
    background: linear-gradient(0deg, #eceef6 0%, #eceef6 100%), #59aaf1;
    color: #151515;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    border: none;
    cursor: pointer;
    &:hover {
      color: #ffffff;
      background: #59aaf1;
      transition: ease-in 0.2s;
    }
    &.active {
      background: #59aaf1;
      color: #ffffff;
    }
  }

  &__dishes-offers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
    gap: 2.5em;
    margin-bottom: 6.5em;
  }

  &__dishes-offers-dish {
  }

  &__dishes-offers-btn {
  }
}

.content__dishes-offers-dish {
  border: 2px solid #eceef6;
  border-radius: 20px;
  max-width: 16.2em;
  width: 100%;
  padding: 2.2em 1em 2em 1.5em;

  &__img {
    text-align: center;
    margin-bottom: 1.8em;
    max-width: 10.5em;
    width: 100%;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    margin-bottom: 0.5em;
  }

  &-content-title {
    margin-right: 2.6em;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
  }

  &-content-size {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  &-subscription {
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
}
</style>
