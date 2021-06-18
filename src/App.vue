<template>
  <Header class="my-4"></Header>
  <HelloWorld class="my-6"></HelloWorld>
  <Apport class="my-6"></Apport>
  <Trust class="my-6"></Trust>
  <Action class="my-6"></Action>
  <Form class="my-6"></Form>
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

export default {
  name: 'App',
  components: {
    Header, Footer, HelloWorld, Apport, Action, Form, Trust
  }
}
</script>

<style>

</style>
