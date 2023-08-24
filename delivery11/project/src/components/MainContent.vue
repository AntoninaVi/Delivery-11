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
            Basket ({{ orderCount }})
          </button>
          <div
            v-if="isOrderSummaryVisible"
            class="content__header-order-summary"
          >
            Total: {{ totalOrderPrice }} UAH
            <button
              class="content__header-order-summary-close"
              @click="isOrderSummaryVisible = false"
            >
              &times;
            </button>
          </div>
        </div>

        <h1 class="content__header-title title">Popular dishes</h1>
      </div>
      <div class="content__dishes">
        <div class="content__dishes-tabs">
          <button
            v-for="category in categories"
            :key="category"
            class="content__dishes-tabs-btn"
            @click="changeCategory(category)"
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
.content {
  &__header {
    margin-top: 8.7em;
  }

  &__header-basket {
    text-align: right;
  }

  &__header-basket-btn {
  }
  &__header-order-summary {
  }
  &__header-order-summary-close {
  }
  &__header-title {
    text-align: center;
  }

  &__dishes {
  }

  &__dishes-tabs {
    text-align: center;
  }

  &__dishes-tabs-btn {
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
.title {
}
.content__dishes-offers-dish {
  border: 2px solid #eceef6;
  max-width: 16.2em;
  width: 100%;
  padding: 2.2em 1em 2em 1.5em;

  &__img {
    text-align: center;
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-content-title {
  }

  &-content-size {
  }

  &-subscription {
    text-align: left;
  }

  &-ingredients {
  }

  &-price {
    text-align: center;
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
