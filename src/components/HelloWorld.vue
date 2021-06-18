<template>
  <div class="columns is-centered is-vcentered" id="element">
    <div class="column is-5">
      <p class="is-size-1 is-uppercase has-text-weight-bold mb-5">Les meilleurs près de chez vous !</p>
      <p class="is-size-4">Une envie de consommer des produits locaux ? La halte mitoyenne fait le lien entre les champs d’à coté et votre assiette.</p>
      <p class="is-size-4 mt-5">Mangez français, mangez mieux !</p>
      <a class="button my-6 Neumorphism is-size-5" href="https://www.instagram.com/la_halte_mitoyenne/" target="_blank"><b>Nous suivre sur les réseaux</b></a>
    </div>
    <div class="column is-5"><img id="roundedimg" src="../assets/img1.jpg" alt=""></div>
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

#roundedimg{
  border-radius: 25px;
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

#element{
  margin: 40px 0px 40px 0px;
}
</style>
