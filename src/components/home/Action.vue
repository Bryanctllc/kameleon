<template>
  <div class="columns is-centered">
    <div class="column is-10 py-6" id="container">
      <div class="columns is-centered is-vcentered">
        <div class="column is-5">
          <p class="is-size-2 has-text-weight-bold">Rejoignez-nous !</p>
          <p class="is-size-4 mb-6">
            Téléchargez l'application et prenez part à cette aventure avec nous
            !
          </p>
          <div class="columns stores">
            <div class="column store google">
              <div class="container">
                <modale :revele="revele" :toggleModale="toggleModale"></modale>
                <div v-on:click="toggleModale" class="btn btn-success action">
                  Google Play
                </div>
              </div>
            </div>
            <div class="column store apple">
              <div class="container">
                <modale :revele="revele" :toggleModale="toggleModale"></modale>
                <div v-on:click="toggleModale" class="btn btn-success action">
                  Apple Store
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-5 has-text-centered">
          <img
            id="roundedimg"
            src="@/assets/img/producteur.png"
            alt="producteur avec son panier de fruits"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modale from "./Modale";

export default {
  name: "Action",
  props: {
    msg: String,
  },
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: Modale,
  },
  methods: {
    toggleModale: function() {
      this.revele = !this.revele;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a,
p {
  color: #ffffff;
}

#roundedimg {
  border-radius: 25px;
}

.Neumorphism {
  width: 385px;
  height: 90px;
  background: #92c3be;
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  box-shadow: -5px -5px 20px #51929c, 4px 7px 9px #12444d;
  border-radius: 98px;
}

#container {
  background: #2d6b75;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 41px;
}

.action {
  width: 11em;
  height: 3.5em;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: inline-block;
  overflow: hidden;
  text-indent: -1000em;
}

.apple .action {
  background-image: url(../../assets/img/dl-appstore.png);
}

.google .action {
  background-image: url(../../assets/img/dl-google.png);
}

.store {
  display: inline-block;
}

.stores {
  list-style: none;
}

@media (max-width: 769px) {
  .stores {
    text-align: center!important;
  }
}

</style>
