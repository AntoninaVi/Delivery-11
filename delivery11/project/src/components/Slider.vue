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
  max-width:95vw;
  margin-bottom: 7.9em;
  transform: scale(1.1);
  overflow: hidden;
  .slide {
    height: 260px;
  }
}
.slide img[data-v-2dedc691][data-v-2dedc691] {
  width: 14em;
  height: 14em;
}
.slider-contacts {
  position: absolute;
  top: 1em;
  left: 39%;
  width: 480px;
  height: 180px;
  color: #fff;
  text-align: center;
  font-size: 24px;
  &__text {
    padding: 75px 75px;
    border-radius: 15px;
    font-weight: 400;
    line-height: normal;
    background: linear-gradient(45deg, #fd9924 0%, #f65b16 100%);
    box-shadow: 0px 20px 25px 0px rgba(253, 55, 10, 0.2);
    
  }
  &__text-link {
    font-weight: 700;
    line-height: normal;
    color: #fff;
  }
}
</style>
