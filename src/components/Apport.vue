<template>
  <div class="columns is-centered">
    <div class="column is-10" id="container">
      <p class="is-size-2 has-text-weight-bold my-5 has-text-centered">Qu'est ce que ça apporte ?</p>
        <div class="columns is-centered my-5">
            <div class="column">
                <div class="column image">
                    <img class="rounded" src="../assets/imgrounded1.jpg">
                </div>
                <p class="is-size-3 has-text-weight-bold mb-5 has-text-centered">Pour les producteurs :</p>
                <p class="is-size-5 has-text-centered">Besoin de trouver de nouvelles opportunitées pour vendre vos produits ? Nous sommes là pour vous aider à vendre vos productions au plus près de chez vous. Un accès direct aux étals de marché de votre région.</p>
            </div>
            <div class="column">
              <div class="column image">
                    <img class="rounded" src="../assets/imgrounded2.jpg">
                </div>
                <p class="is-size-3 has-text-weight-bold mb-5 has-text-centered">Pour les mairies :</p>
                <p class="is-size-5 has-text-centered">Marre de ne trouver que des tomates d’espagne sur vos marchés ?
                Proposez les produits locaux à vos concitoyens et remplissez les étals de vos marchés des délices de nos régions.</p>
            </div>
            <div class="column">
                <div class="column image">
                    <img class="rounded" src="../assets/imgrounded3.jpg">
                </div>
                <p class="is-size-3 has-text-weight-bold mb-5 has-text-centered">Pour le consommateur :</p>
                <p class="is-size-5 has-text-centered">Une envie de découvrir les ressources locales des agriculteurs environnant ? 
                Les prix des produits locaux vous freine dans vos achats ?
                Grace à nous, accumulez des points et profitez de réduction sur vos marchés locaux.
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

.Neumorphism{
  Width: 385px;
  Height:  90px;
  background: #F0F0F3;
  border: 5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 20px #AEAEC0;
  border-radius: 98px;
}

#container{
  background: #F0F0F3;
box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4);
border-radius: 16px;
}

.rounded{
    border-radius: 50%;
}
</style>
