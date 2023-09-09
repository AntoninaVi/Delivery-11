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
          <div v-if="isLoading" class="content__dishes-offers-loader"></div>
          <article
            v-for="(dish, index) in displayedDishes"
            :key="index"
            class="content__dishes-offers-dish"
            v-show="index < visibleCount"
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
          @click="toggleShowMore"
          class="content__dishes-offers-btn"
        ></button>
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
      visibleCount: 8,
      isLoading: true,
      showLoadMore: false,
      categories: ["Pizza", "Sushi", "Salad", "Dessert", "Drinks"],
      selectedCategory: "Pizza",
      activeCategory: "",
      cart: [],

      orderCount: 0,
      totalOrderPrice: 0, // sum of an order
      isOrderSummaryVisible: false,
    };
  },
  methods: {
    changeCategory(category) {
      this.isLoading = true;
      setTimeout(() => {
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
        setTimeout(() => {
          this.isLoading = false;
        }, 200);
      }, 800); 
    },
    addDishToCart(dish) {
      this.cart.push(dish);
      this.orderCount += 1;

      // update sum
      this.totalOrderPrice += parseFloat(dish.price.replace(" UAH", ""));
      this.isOrderSummaryVisible = true; // show sum of an order
    },
    toggleShowMore() {
      if (this.visibleCount === 8) {
        this.visibleCount = this.displayedDishes.length;
        this.showMoreText = "Show Less";
      } else {
        this.visibleCount = 8;
        this.showMoreText = "Load More";
      }
    },
  },
  mounted() {
    getDocs(this.dishesRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const dishData = doc.data();
          const category = dishData.type || "Other"; // type Firebase
          const categoryKey = category.toLowerCase();
          if (!this.dishes[categoryKey]) {
            this.$set(this.dishes, categoryKey, []); //array for no category
          }
          this.dishes[categoryKey].push(dishData);
        });
        this.changeCategory(this.selectedCategory);
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      })
      .catch((error) => {
        console.error("Error getting dishes: ", error);
        this.isLoading = false;
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
    margin-top: 6.7em;
    @media screen and (max-width: 412px) {
      margin-top: 3em;
    }
  }

  &__header-basket {
    position: relative;
    text-align: right;
    @media screen and (max-width: 1100px) {
      right: 9em;
    }
    @media screen and (max-width: 1100px) {
      top: -1em;
      right: 6em;
    }
    @media screen and (max-width: 500px) {
      right: 4em;
    }
    @media screen and (max-width: 412px) {
      transform: scale(0.7);
      right: 0;
    }
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
    padding: 1em 0.7em;
    max-width: 6em;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    color: #ffffff;
    font-size: 16px;
    border-radius: 9px;
    @media screen and (max-width: 1100px) {
      left: 68%;
    }
    @media screen and (max-width: 500px) {
      left: 54%;
    }
    @media screen and (max-width: 412px) {
      left: 47%;
    }
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
    margin-bottom: 6.5em;
  }

  &__dishes-tabs {
    display: flex;
    row-gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3.1em;
    text-align: center;
    @media screen and (max-width: 412px) {
      display: grid;
      grid-template-columns: 40% 40%;
      gap: 0.8em;
    }
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
    @media screen and (max-width: 412px) {
      margin-right: 0;
      padding: 1em 0em;
    }
  }

  &__dishes-offers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
    gap: 2.5em;
    justify-content: center;
    margin-bottom: 6.5em;
  }

  &__dishes-offers-btn {
    display: block;
    width: 3.7em;
    height: 3.7em;
    margin-left: auto;
    margin-right: auto;
    background-image: url(../assets/img/load-btn.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f06428;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    &:hover {
      transition: transform 0.3s ease-in;
      transform: rotate(360deg);
    }
  }
}
.content__dishes-offers {
  position: relative;
}
.content__dishes-offers-loader {
  position: absolute;
  top: 10%;
  left: 44%;
  z-index: 5;
  width: 7em;
  height: 7em;
  border: 13px solid;
  border-color: #f4965b transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @media screen and (max-width:540px) {
    left: 37%;
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

//Dish article
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
