<template>
  <div class="layout">
    <heading></heading>
    <main-content :dishesRef="dishesRef"></main-content>
    
  </div>
</template>

<script>
import Heading from "./components/Heading.vue";
import MainContent from "./components/MainContent.vue";
import { collection, getFirestore } from "firebase/firestore"; // Импорт необходимых функций Firestore

export default {
  components: {
    Heading,
    MainContent,
  },
  data() {
    return {
      dishesRef: collection(getFirestore(), "dishes"), // Создание dishesRef
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
  color: black;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
}
.container {
  max-width: 1160px;
  margin-right: auto;
  margin-left: auto;
}
title {
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
