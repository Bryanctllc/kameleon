<template>
    <footer class="footer py-6">
      <div class="columns is-centered">
        <div class="column is-10 is-vcentered has-text-centered">
          <div class="columns is-centered is-justify-content-space-around is-vcentered">
            <div class="column is-3">
                <a href="mailto:Lahalte.mitoyenne@gmail.com" class="linkfooter"><p class="has-text-centered is-size-5 is-italic has-text-weight-light">lahalte.mitoyenne@gmail.com</p></a>
            </div>
            <div class="column is-3">
                <div>
                  <img class="logofooter" src="../../assets/img/logo-lhm-bleu.png" alt="Logo La Halte Mitoyenne">
                </div>
            </div>
            <div class="column is-3">
              <div class="columns is-justify-content-space-between is-vcentered is-mobile">
                <div class="column">
                    <span class="icon">
                      <a href="https://www.facebook.com/Lahaltemitoyenne" rel="noreferrer" target="_blank"><i class="fab fa-facebook carotte"></i></a>
                    </span>
                </div>
                <div class="column">
                    <span class="icon">
                      <a href="https://twitter.com/haltemitoyenne" rel="noreferrer" target="_blank"><i class="fab fa-twitter carotte"></i></a>
                    </span>
                </div>
                <div class="column">
                    <span class="icon">
                      <a href="https://www.instagram.com/la_halte_mitoyenne/" rel="noreferrer" target="_blank"><i class="fab fa-instagram carotte"></i></a>
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-centered is-justify-content-space-around is-vcentered has-text-centered">
            <div class="column">
          <router-link to="legal#anchor" class="linkfooter is-size-6 has-text-weight-light">Mentions Légales</router-link>
          </div>
          <div >
           <p class="is-size-6 has-text-weight-light">©La Halte Mitoyenne 2021. Tous droits réservés</p>
          </div>
          <div class="column">
         
           
          <router-link to="confidentialite#anchor" class="linkfooter is-size-6 has-text-weight-light">Politique de confidentialité</router-link>
          </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
footer{
  background-color: #2D6B75 !important;
  color: white;
}

.carotte{
  font-size: 3em;
  color: white;
}

.linkfooter{
  color: white;
}

.logofooter{
  height: 8rem;
}
</style>