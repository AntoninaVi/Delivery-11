<template>
  <div class="layout">
    <heading></heading>
    <main-content :dishesRef="dishesRef"></main-content>
    <slider></slider>
    <contacts></contacts>
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import MainContent from "./components/MainContent.vue";
import Slider from "./components/Slider.vue";
import Contacts from "./components/Contacts.vue";

import { collection, getFirestore } from "firebase/firestore"; //

export default {
  components: {
    Heading,
    MainContent,
    Slider,
    Contacts,
  },
  data() {
    return {
      dishesRef: collection(getFirestore(), "dishes"), //
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  color: #000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  overflow-x: hidden;
}
.container {
  max-width: 1160px;
  margin-right: auto;
  margin-left: auto;
}
.title {
  color: #000;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}
.logo {
  max-width: 7em;
  width: 100%;
}
</style>
