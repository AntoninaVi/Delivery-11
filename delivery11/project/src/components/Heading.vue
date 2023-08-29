<template>
  <div class="wrapper">
    <div class="container">
      <header class="header">
        <nav class="nav">
          <div class="nav__items">
            <a class="nav__items-item" href="#">Payment</a>
            <a class="nav__items-item" href="#">About Us</a>
            <a class="nav__items-item" href="#">Contacts</a>
          </div>

          <div class="nav__logo logo">
            <img src="../assets/img/logos.svg" alt="logotype" />
          </div>
          <div class="nav__items">
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

<script></script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-image: url(../assets/img/bg-main.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 1.5em;
    height: 125vh;

}
.header {
  margin-bottom: 6.5em;
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

//   &__logo {
//   }

  &__contacts {
    display: flex;
  }

  &__items-contact {
    display: flex;
    align-items: center;
    margin-left: 2.4em;
  }
}

.main {
  &__text {
    max-width: 38.8em;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  &__title {
    margin-bottom: 18px;
  }

//   &__subscription {
//   }
  &__img {
    position: relative;
    max-width: 62em;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  &__img-image {
    max-width: 62em;
    width: 100%;
  }
}
</style>
