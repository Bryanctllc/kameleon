<template>
<Accueil class="mb-6"></Accueil>
<Chiffres class="my-6"></Chiffres>
<Apport class="my-6"></Apport>
<!-- <Trust></Trust> -->
<Action class="my-6"></Action>
<Form class="my-6"></Form>
</template>

<script>
import Accueil from '@/components/home/Accueil.vue';
import Chiffres from '@/components/home/Chiffres.vue';
import Apport from '@/components/home/Apport.vue';
// import Trust from '@/components/home/Trust.vue';
import Action from '@/components/home/Action.vue';
import Form from '@/components/home/Form.vue';


export default {
  components: {
  Accueil,
  Chiffres,
  Apport,
  // Trust,
  Action,
  Form
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
