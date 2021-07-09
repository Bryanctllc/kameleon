<template>
  <Header class="mb-6"></Header>
  <router-view></router-view>
  <Footer class="mt-6"></Footer>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
   url(./assets/font/Roboto/Roboto-Regular.ttf) format("truetype");
}

body{
  color: black;
  background-color: #F0F0F3;
  font-family: "Roboto", Helvetica, Arial;
}
.columns {
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;
}
</style>
