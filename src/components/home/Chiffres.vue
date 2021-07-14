<template>
  <div class="columns is-centered">
    <div class="column is-10 py-6" id="container">
      <div class="columns is-justify-content-space-evenly mb-6 is-vcentered">
        <div class="column is-5">
          <figure class="image">
            <img
              id="roundedimg"
              class="is-fullwidth"
              src="@/assets/img/produits-marche.png"
              alt=""
            />
          </figure>
        </div>
        <div class="column is-5">
          <h2 class="is-size-2 has-text-weight-bold mb-5">
            Intéressés à 89 % !
          </h2>
          <p class="is-size-5">
            Plus de 89% des interrogés sont intéressés à soutenir l’idée d’une
            plateforme mettant en avant les produits locaux ainsi que leurs
            producteurs pour aider à mieux consommer local.
          </p>
        </div>
      </div>
      <div class="columns is-justify-content-space-evenly is-vcentered">
        <div class="column is-5">
          <h2 class="is-size-2 has-text-weight-bold mb-5">Fidèles à 94 % !</h2>
          <p class="is-size-5">
            Plus de 94% des interrogés se disent près à être fidèles à un
            commerçant local au travers d’un système de réductions à points.
          </p>
        </div>
        <div class="column is-5">
          <figure class="image">
            <img id="roundedimg" src="@/assets/img/rue-marche.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 16px;
}

#roundedimg {
  border-radius: 25px;
  object-fit: cover;
}

.image {
  max-width: 50rem;
}
</style>
