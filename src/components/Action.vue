<template>
  <div class="columns is-centered is-vcentered" id="element">
    <div class="column is-5">
      <p class="is-size-2 has-text-weight-bold">Passez à l'action !</p>
      <p class="is-size-2 has-text-weight-bold mb-6">On a besoin de vous !</p>
      <p class="is-size-4 mb-6">Participez vous aussi à la création de notre projet, pour que nous puissons tous profiter de la richesse de notre terroire. Répondez anonyment à notre questionnaire pour nous aidez dans notre voyage !</p>
      <a class="button my-6 Neumorphism is-size-5" href="https://docs.google.com/forms/d/e/1FAIpQLSflqDOydqhNRAJSJlebqkUk_0t0v88H1DeqIjylmN9uwcqe-w/viewform?usp=sf_link" target="_blank"><b>Répondre au questionnaire</b></a>
    </div>
    <div class="column is-5">
        <img id="roundedimg" src="../assets/img2-2.jpg" alt="">
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
  color: #ffffff;
}

#roundedimg{
  border-radius: 25px;
}

.Neumorphism{
  Width: 385px;
  Height:  90px;
  background: rgba(239, 96, 70, 0.72);
border: 3px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
box-shadow: -5px -5px 20px #FF6D62, 4px 7px 9px #B03018;
border-radius: 98px;
}

#element{
  padding: 40px 0px 40px 0px;
  background: #EF6046;
}
</style>
