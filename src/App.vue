<template>
  <Header></Header>
  <HelloWorld class="section"></HelloWorld>
  <Chiffres class="section"></Chiffres>
  <Apport class="section"></Apport>
  <Trust class="section"></Trust>
  <Action class="section"></Action>
  <Form class="section"></Form>
  <Footer class="mt-6"></Footer>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import HelloWorld from './components/HelloWorld.vue'
import Apport from './components/Apport.vue'
import Action from './components/Action.vue'
import Form from './components/Form.vue'
import Trust from './components/Trust.vue'
import Chiffres from './components/Chiffres.vue'

export default {
  name: 'App',
  components: {
    Header, Footer, HelloWorld, Apport, Action, Form, Trust, Chiffres
  }
}
</script>

<style>
body{
  color: black;
  background-color: #E5E5E5;
}

</style>
