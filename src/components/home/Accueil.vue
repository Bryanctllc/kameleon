<template>
    <div class="columns is-centered is-vcentered">
    <div class="column is-5">
      <p class="is-size-1 is-uppercase has-text-weight-bold mb-5" id="yaya">
        Les meilleurs près de chez vous !
      </p>
      <p class="is-size-4">
        Une envie de consommer des produits locaux ? La halte mitoyenne fait le
        lien entre les champs d’à coté et votre assiette.
      </p>
      <p class="is-size-4 mt-5">Mangez français, mangez mieux !</p>
      <a
        class="button mt-6 Neumorphism is-size-3"
        href="https://www.instagram.com/la_halte_mitoyenne/"
        target="_blank"
        ><b>Nous suivre sur les réseaux</b></a
      >
    </div>
    <div class="column is-5" id="display">
      <figure class="image is-square">
        <img id="roundedimg" src="@/assets/Marche.jpeg" alt="" />
      </figure>

    </div>
  </div>
</template>


<style scoped>
a {
  color: black;
}

#roundedimg {
  border-radius: 25px;
}

.Neumorphism {
  background: #F0F0F3;
border: 2px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -5px -5px 20px #F0F0F3, 4px 7px 9px #DEDEDE;
border-radius: 98px;
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