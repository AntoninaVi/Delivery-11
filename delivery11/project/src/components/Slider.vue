<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings" :autoplay="true">
      <div class="slide">
        <img src="../assets/img/slide2.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide3.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide4.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide2.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide2.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide3.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide5.png" alt="slide restaurant" />
      </div>
      <div class="slide">
        <img src="../assets/img/slide6.png" alt="slide restaurant" />
      </div>
    </VueSlickCarousel>
    <div class="slider-contacts">
      <p class="slider-contacts__text">
        Instagram:
        <a class="slider-contacts__text-link" href="#"> @classic_kovel</a>
      </p>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: false,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        variableWidth: true,
        autoplay: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 100%;
  max-width: 95vw;
  margin-bottom: 7.9em;
  transform: scale(1.1);
  overflow: hidden;
  white-space: nowrap;

  .slide {
    height: 260px;
  }
  @media screen and (max-width: 730px) {
    height: 23vh;
    margin-bottom: 3em;
  }
}
.slide img[data-v-2dedc691][data-v-2dedc691] {
  width: 14em;
  height: 14em;
}
.slider-contacts {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  max-width: 27.3em;
  white-space: nowrap;
  width: 100%;
  margin: auto;
  height: 10em;
  border-radius: 15px;
  color: #fff;
  text-align: center;
  padding: 1em 1em;
  background: linear-gradient(45deg, #fd9924 0%, #f65b16 100%);

  &__text {
    outline: 1px solid #fa985f;
    padding: 3.5em 2em 3.5em 1.3em;
    border-radius: 15px;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(45deg, #fd9924 0%, #f65b16 100%);
  }
  &__text-link {
    font-weight: 700;
    line-height: normal;
    color: #fff;
  }

  @media screen and (max-width: 1280px) {
    bottom: 2em;
  }
  @media screen and (max-width: 540px) {
    bottom: 0;
    transform: scale(0.7);
  }

  @media screen and (max-width: 280px) {
    padding: 1em 0.5em 1em 0.3em;
  }
}
</style>
