<template>
  <div class="columns is-centered">
    <div class="column is-10 py-6" id="container">
      <div class="columns is-justify-content-space-evenly mt-5">
        <div class="column is-3 has-text-centered">
          <p class="is-size-4 has-text-weight-bold">1. Prenez contact</p>
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/img/Icon-tel.png"
              alt="Icone d'un telephone"
            />
          </div>
          <p class="is-size-5 has-text-justified">
            Prenez contact avec nous via le formulaire et nous vous répondrons
            dans les plus brefs délais pour vous mettre en relation avec de
            nombreux producteurs locaux !
          </p>
        </div>
        <div class="column is-3 has-text-centered">
          <p class="is-size-4 has-text-weight-bold">2. On vous met en relation</p>
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/img/Icon-envl.png"
              alt="Icone d'un telephone"
            />
          </div>
          <p class="is-size-5 has-text-justified">
            Nous vous mettrons en relation avec de nombreux producteurs pour que vous puissiez proposer de la variété sur vos marchés
          </p>
        </div>
        <div class="column is-3 has-text-centered">
          <p class="is-size-4 has-text-weight-bold">3. Vous en profitez</p>
          <div class="column image bigrounded">
            <img
              class="rounded"
              src="@/assets/img/Icon-thumb.png"
              alt="Icone d'un telephone"
            />
          </div>
          <p class="is-size-5 has-text-justified">
            Vos marchés seront variés et cela permettra de proposer des producteurs locaux variés et a des prix plus que raisonnables a vos concitoyens !
          </p>
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

.Neumorphism {
  background: #f0f0f3;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 20px #dfdfdf;
  border-radius: 35px;
  padding: 8px 18px;
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
