<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-5">
      <p class="is-size-1 is-uppercase has-text-weight-bold mb-5">
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
    <div class="column is-5">
      <figure class="image is-square">
        <img id="roundedimg" src="../assets/Marche.jpeg" alt="" />
      </figure>

    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: black;
}

#roundedimg {
  border-radius: 25px;
}

.Neumorphism {
  background: #f0f0f3;
  border: 5px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 20px #aeaec0;
  border-radius: 98px;
}
</style>
