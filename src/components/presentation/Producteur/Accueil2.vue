<template>
    <div class="columns is-centered is-vcentered" id="producteur">
    <div class="column is-4">
      <p class="is-size-3 has-text-weight-bold mb-5" id="yaya">
        Pour vous nos merveilleux producteurs locaux !
      </p>
      <p class="is-size-5">
        Vous n'allez pas être décu !
      </p>
    </div>
    <div class="column is-5" id="display">
      <figure class="image">
        <img id="roundedimg" src="@/assets/img/Producteur-2.png" alt="Producteur dans un champ" />
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