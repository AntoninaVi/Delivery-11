<template>
  <div class="wrapper">
    <div class="container">
      <div class="contacts__content">
        <h2 class="title">Fill out the form and we will call you</h2>
        <form class="contacts__form" action="" method="get" onsubmit="return validateForm()">
          <input
            class=""
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="phone"
            id="phone"
            required
            pattern="[0-9]{10}"
          />
          <div>
            <input type="submit" value="Call back" />
          </div>
        </form>
        <img src="../assets/img/car.png" alt="delivery car" />
      </div>
    </div>
  </div>

  
</template>

<script></script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-image: url(../assets/img/bg-contacts.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 1.5em;
  height: 125vh;
}
</style>
