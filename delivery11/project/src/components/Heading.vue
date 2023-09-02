<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <nav class="nav">
          <button class="burger-menu" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </button>

          <div class="nav__items" :class="{ 'nav__items--open': isMenuOpen }">
            <a class="nav__items-item" href="#">Payment</a>
            <a class="nav__items-item" href="#">About Us</a>
            <a class="nav__items-item" href="#">Contacts</a>
          </div>

          <div class="nav__logo logo">
            <img src="../assets/img/logos.svg" alt="logotype" />
          </div>
          <div class="nav__items-contacts">
            <p class="nav__items-item">Daily 11am - 9pm</p>
            <p class="nav__items-contact">
              <img src="../assets/img/phone.svg" alt="cellphone" /> 0 800 33 08
              98
            </p>
          </div>
        </nav>
      </header>
      <main class="main">
        <div class="main__text">
          <h1 class="main__title title">Food delivery in Kovel</h1>
          <p class="main__subscription">
            If you decide to relax or have unexpected guests, call us. We make
            sure that your vacation is comfortable, enjoyable and delicious
          </p>
        </div>
        <div class="main__img">
          <img
            class="main__img-image"
            src="../assets/img/main-img.png"
            alt="pizza"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-image: url(../assets/img/bg-main.png);
  background-repeat: no-repeat;
  background-position: 60% 30%;
  background-size: cover;
  padding-top: 1.5em;
  height: 105vh;
  @media screen and (max-width: 920px) {
    height: 60vh;
  }
  @media screen and (max-width: 500px) {
    padding-top: 0.5em;
  }
}
.header {
  margin-bottom: 6.5em;
  @media screen and (max-width: 712px) {
    margin-bottom: 0;
  }
}
.nav {
  display: grid;
  grid-template-columns: 40% 20% 40%;
  justify-items: center;
  align-items: center;

  &__items {
    display: flex;
    align-items: center;
  }

  &__items-item {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin-left: 2.4em;
    &:first-child {
      margin-left: 0;
    }
  }
  &__items-contacts {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 600px) {
      transform: scale(0.7);
    }
    @media screen and (max-width: 500px) {
      grid-column: 2;
      margin-top: -1em;
    }
  }

  &__items-contact {
    display: flex;
    align-items: center;
    margin-left: 2.4em;
    white-space: nowrap;
    @media screen and (max-width: 901px) {
      margin-top: 1em;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 40% 66%;
  }
}

.main {
  &__text {
    max-width: 38.8em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    @media screen and (max-width: 712px) {
      transform: scale(0.8);
    }
  }

  &__title {
    margin-bottom: 18px;
    @media screen and (max-width: 412px) {
      white-space: nowrap;
    }
    @media screen and (max-width: 320px) {
      white-space: pre-line;
    }
  }
  &__subscription {
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    @media screen and (max-width: 412px) {
      font-size: 15px;
    }
  }

  &__img {
    position: relative;
    max-width: 62em;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 1050px) {
      transform: scale(0.8);
    }
    @media screen and (max-width: 600px) {
      top: -4em;
    }
    @media screen and (max-width: 320px) {
      top: -2em;
    }
  }
  &__img-image {
    max-width: 52em;
    width: 100%;
  }
  @media screen and (max-width: 390px) {
    margin-top: -1em;
    transform: scale(0.8);
  }
  @media screen and (max-width: 320px) {
    margin-top: -3em;
  }
}

.burger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #000;
  margin: 5px auto;
}

@media screen and (max-width: 900px) {
  .burger-menu {
    display: block;
  }

  .nav__items {
    display: none;
  }

  .nav__items--open {
    position: absolute;
    left: 7%;
    top: 6em;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
    padding: 2em 3em;
    background-color: white;
    border-radius: 10%;
  }
  .nav__items-item {
    margin-left: 0;
    font-size: 24px;
    white-space: nowrap;
  }
}
</style>
