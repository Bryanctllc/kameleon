<template>
    <div class="columns is-centered is-vcentered">
    <div class="column is-5">
      <p class="is-size-3 is-uppercase has-text-weight-bold mb-5" id="yaya">
        Les meilleurs près de chez vous !
      </p>
      <p class="is-size-5">
        Une envie de consommer des produits locaux ? La halte mitoyenne fait le
        lien entre les champs d’à coté et votre assiette.
      </p>
      <p class="is-size-5 mt-5">Mangez français, mangez mieux !</p>
      <a
        class="button mt-6 Neumorphism is-size-4"
        href="https://www.instagram.com/la_halte_mitoyenne/"
        target="_blank"
        rel="noreferrer"
        ><b>Nous suivre sur les réseaux</b></a
      >
    </div>
    <div class="column is-5" id="display">
      <figure class="image">
        <img id="roundedimg" src="@/assets/img/etal-marche.png" alt="légumes au marché" />
      </figure>

    </div>
  </div>
</template>


<style scoped>
a {
  color: black;
}

.Neumorphism {
  background: #F0F0F3;
border: 2px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -5px -5px 20px #F0F0F3, 4px 7px 9px #DEDEDE;
border-radius: 98px;
padding: 8px 18px;
}

.image{
  max-width: 50rem;
}

@media (max-width: 769px) {
  #display{
    display: none;
  }
  #yaya{
    text-transform: none !important;
  }
}
</style>