<template>
    <footer class="footer py-6">
      <div class="columns is-centered">
        <div class="column is-10 is-vcentered">
          <div class="columns is-centered is-justify-content-space-between is-vcentered">
            <div class="column is-3">
                <a href="mailto:Lahalte.mitoyenne@gmail.com" class="maillink"><p class="has-text-centered is-size-5" id="underlin">Lahalte.mitoyenne@gmail.com</p></a>
            </div>
            <div class="column is-3">
                <div>
                  <img src="../../assets/logo-lhm-bleu.png" alt="Logo La Halte Mitoyenne">
                </div>
            </div>
            <div class="column is-3">
              <div class="columns is-justify-content-space-between is-vcentered">
                <div class="column">
                    <span class="icon">
                      <a href="https://www.facebook.com/Lahaltemitoyenne" target="_blank"><i class="fab fa-facebook carotte"></i></a>
                    </span>
                </div>
                <div class="column">
                    <span class="icon">
                      <a href="https://twitter.com/haltemitoyenne" target="_blank"><i class="fab fa-twitter carotte"></i></a>
                    </span>
                </div>
                <div class="column">
                    <span class="icon">
                      <a href="https://www.instagram.com/la_halte_mitoyenne/" target="_blank"><i class="fab fa-instagram carotte"></i></a>
                    </span>
                </div>
              </div>
            </div>
          </div>
          <p class="has-text-centered">Politique de confidentialité</p>
          <p class="has-text-centered">Politique de gestion des cookies</p>
          <p class="has-text-centered">©La Halte Mitoyenne 2021. Tous droits réservés</p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#underlin{
  text-decoration: underline;
}

footer{
  background-color: #2D6B75 !important;
  color: white;
}

.carotte{
  font-size: 3em;
  text-decoration: none;
  color: white;
}

.maillink{
  color: white;
}
</style>