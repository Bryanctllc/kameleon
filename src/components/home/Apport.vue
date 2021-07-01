<template>
  <div class="columns is-centered">
    <div class="column is-11">
      <div class="columns">
        <div class="column">
          <p
            class="
              is-size-2
              has-text-weight-bold
              my-5
              has-text-centered
              ligne_horizontal
            "
          >
            VOUS ÊTES
          </p>
        </div>
      </div>
      <div class="columns is-justify-content-space-evenly mt-5">
        <div class="column is-3 has-text-centered">
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/Producteur.jpeg"
              alt="Image agriculteur"
            />
          </div>
          <p class="is-size-3 has-text-weight-bold my-5">Un producteur :</p>
          <p class="is-size-5 has-text-justified">
            Besoin de trouver de nouvelles opportunités pour vendre vos produits
            ? Nous sommes là pour vous aider à vendre vos productions au plus
            près de chez vous. Un accès direct aux étals des marchés de votre
            région.
          </p>
          <a class="button my-6 Neumorphism is-size-4" href="#">En savoir +</a>
        </div>
        <div class="column is-3 has-text-centered">
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/Mairie.jpeg"
              alt="image d'une Mairie"
            />
          </div>
          <p class="is-size-3 has-text-weight-bold my-5">Une mairie :</p>
          <p class="is-size-5 has-text-justified">
            Marre de ne trouver que des tomates d’espagne sur vos marchés ?
            Proposez les produits locaux à vos concitoyens et remplissez les
            étals de vos marchés des délices de nos régions.
          </p>
          <a class="button my-6 Neumorphism is-size-4" href="#">En savoir +</a>
        </div>
        <div class="column is-3 has-text-centered">
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/Consommateur.jpeg"
              alt="Image de personnes échangeant dans un marché"
            />
          </div>
          <p class="is-size-3 has-text-weight-bold my-5">Un consommateur :</p>
          <p class="is-size-5 has-text-justified">
            Une envie de découvrir les ressources locales des agriculteurs
            environnant ? Les prix des produits locaux vous freinent dans vos
            achats ? Grace à nous, accumulez des points et profitez de réduction
            sur vos marchés locaux.
          </p>
          <a class="button my-6 Neumorphism is-size-4" href="">En savoir +</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Neumorphism {
  background: #f0f0f3;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 20px #dfdfdf;
  border-radius: 35px;
}

#container {
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
}

.rounded {
  border-radius: 50%;
  height: 14em;
  width: 14em;
  object-fit: cover;
}

.bigrounded {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}

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
