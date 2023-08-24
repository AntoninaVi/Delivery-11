<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="contacts__content">
          <h2 class="contacts__content-title title">Fill out the form and we will call you</h2>
          <form
            class="contacts__form"
            action=""
            method="get"
            onsubmit="return validateForm()"
          >
            <input
              class="contacts__form-input"
              type="text"
              placeholder="Your name"
              name="name"
              id="name"
            />
            <input
              class="contacts__form-input"
              type="tel"
              placeholder="Phone number"
              name="phone"
              id="phone"
              required
              pattern="[0-9]{10}"
            />
            <div class="contacts__form-btn">
              <input
                class="contacts__form-btn-input"
                type="submit"
                value="Call back"
              />
            </div>
          </form>
          <img
            class="contacts__img"
            src="../assets/img/car.png"
            alt="delivery car"
          />
        </div>
      </div>
    </div>
    <footer class="footer">
      <p class="footer__text">© Classic Family Restaurant</p>
      <img
        class="footer__logotype"
        src="../assets/img/logos.svg"
        alt="logotype"
      />
      <p class="footer__text">© Classic Family Restaurant</p>
    </footer>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-image: url(../assets/img/bg-contacts.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 5em;
}

.container {
}
.contacts {
  &__content {
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  &__content-title {

  max-width: 10.5em;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.9em;
}

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__form-input {
    padding: 20px 0 20px 30px;
    border-radius: 57px;
    border: 2px solid #eceef6;
    background: #fff;
    color: #222;
    max-width: 19.5em;
    width: 100%;
    margin-right: 2em;
  }
  &__form-btn {
    position: relative;
    max-width: 14.4em;
    width: 100%;
    &::after {
      content: url(../assets/img/arrow.svg);
      display: block;
      position: absolute;
      top: -5px;
      left: 9em;
      transform: rotate(180deg);
    }
  }
  &__form-btn-input {
    position: relative;
    max-width: 14.4em;
    width: 100%;
    padding: 1em 3em 1em 1em;
    border-radius: 59px;
    background: linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
    box-shadow: 0px 4px 8px 0px rgba(205, 169, 41, 0.26);
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 140%;
    border: none;
    cursor: pointer;
  }
  &__img {
  }
}

.footer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 2em;
   padding-bottom: 3em;
  &__text {
  }

  &__logotype {
  }
}
</style>
