<template>
  <div class="columns is-centered">
    <div class="column is-10 py-6" id="container">
      <div class="columns is-justify-content-space-evenly mb-6">
          <div class="column is-5">
            <figure class="image is-5by4">
              <img id="roundedimg" class="is-fullwidth" src="../assets/Marche.jpeg" alt="">
              </figure>
          </div>
          <div class="column is-5">
              <h2 class="is-size-2 has-text-weight-bold mb-5">89 % !</h2>
              <p class="is-size-4">Plus de 89% des gens sont intéressés soutiernnent l’idée d’une plateforme mettant en avant les produits locaux ainsi que leurs producteurs pour aider à mieux consommer local.</p>
          </div>
      </div>
      <div class="columns is-justify-content-space-evenly">
          <div class="column is-5">
              <h2 class="is-size-2 has-text-weight-bold mb-5">94 % !</h2>
              <p class="is-size-4">Plus de 94% des gens interrogés sont intéressé par une plateforme  permettant d’obtenir des réductions,ainsi qu’une fidélisation parmi les producteurs locaux de leur marchés.</p>
          </div>
          <div class="column is-5">
            <figure class="image is-5by4">
              <img id="roundedimg" src="../assets/Marche.jpeg" alt="">
              </figure>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container{
  background: #F0F0F3;
box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.4);
border-radius: 16px;
}

#roundedimg{
  border-radius: 25px;
  object-fit: cover;
}

</style>
