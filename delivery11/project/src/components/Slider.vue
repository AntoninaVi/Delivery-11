<template>

    <div class="container">
      <div class="slider">
        <vue-slick-carousel :options="slickOptions">
          <div class="slide">Slide 1</div>
          <div class="slide">Slide 2</div>
          <div class="slide">Slide 3</div>
        </vue-slick-carousel>
      </div>
    </div>

</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel.css';


export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      slickOptions: {
        lazyLoad: "ondemand",
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        adaptiveHeight: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.slider {
  width: 100%;
  max-width: 60em;
  height: 100px;
     margin-bottom:7.9em;
  .slide {
    width: 100px;
    height: 100px;
    background-color: lightcoral;

  }
}
.slick-slide{
   width: 100%;
  max-width: 100px;
  height: 100px;
}
</style>
