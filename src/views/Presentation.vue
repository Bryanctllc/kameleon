<template>
<Accueil1 class="mb-6"></Accueil1>
<Etapes1 class="mb-6"></Etapes1>
<div class="ligne_horizontal mb-6"></div>
<Accueil2 class="mb-6"></Accueil2>
<Etapes2 class="mb-6"></Etapes2>
<div class="ligne_horizontal mb-6"></div>
<Accueil3 class="mb-6"></Accueil3>
<Etapes3 class="mb-6"></Etapes3>
<div class="ligne_horizontal mb-6"></div>
<Form class="my-6"></Form>
<Action class="my-6"></Action>
</template>

<script>
import Accueil1 from '@/components/presentation/Mairie/Accueil1.vue';
import Etapes1 from '@/components/presentation/Mairie/Etapes1.vue';

import Accueil2 from '@/components/presentation/Producteur/Accueil2.vue';
import Etapes2 from '@/components/presentation/Producteur/Etapes2.vue';

import Accueil3 from '@/components/presentation/Consommateur/Accueil3.vue';
import Etapes3 from '@/components/presentation/Consommateur/Etapes3.vue';

import Form from '@/components/home/Form.vue';
import Action from '@/components/home/Action.vue';

export default {
  components: {
      Accueil1,
      Etapes1,
      Accueil2,
      Etapes2,
      Accueil3,
      Etapes3,
      Form,
      Action
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ligne_horizontal {
  display: flex;
  flex-direction: row;
}

.ligne_horizontal:before,
.ligne_horizontal:after {
  content: "";
  flex: 1 1;
  border-bottom: 2px solid #000;
  margin: auto 5% auto 5%;
}
</style>
