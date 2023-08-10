<template>
  <div class="wrapper">
    <div class="container">
      <div class="content__header">
        <div class="content__header-basket">
          <button class="content__header-basket-btn">Basket</button>
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
            <button class="content__dishes-offers-dish-button"></button>
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
    };
  },
  methods: {
    loadMoreDishes() {
      const newDisplayedDishes = this.dishes.slice(
        this.lastDisplayedIndex,
        this.lastDisplayedIndex + this.batchSize
      );
      this.displayedDishes = this.displayedDishes.concat(newDisplayedDishes);
      this.lastDisplayedIndex += this.batchSize;

      if (this.lastDisplayedIndex >= this.dishes.length) {
        this.showLoadMore = false;
      }
    },
    changeCategory(category) {
      console.log("Chosen category", category);
      this.selectedCategory = category;
      this.displayedDishes = [];
      this.lastDisplayedIndex = 0;
      for (const dish of this.dishes) {
        if (dish.category === category || !dish.category) {
          if (this.displayedDishes.length < this.batchSize) {
            this.displayedDishes.push(dish);
          } else {
            this.showLoadMore = true;
            break;
          }
        }
      }
      this.lastDisplayedIndex = this.displayedDishes.length;
    },
  },
  mounted() {
    getDocs(this.dishesRef)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const dishData = doc.data();
          console.log("Fetched dish:", dishData);
          this.dishes.push(dishData);
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
  }
}
</style>
