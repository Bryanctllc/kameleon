<template>
<div class="columns is-centered" id="anchor">
  <div class="column is-10">
<nav class="navbar is-10" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="../../assets/img/logo-site.png" alt="Logo La Halte Mitoyenne">
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarHome">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" id="navbarHome">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-size-5">
            A propos
          </a>
          <a class="button is-size-5" href="https://kameleon-equipe.systeme.io/blog-lahaltemitoyenne" target="_blank">
            Blog
          </a>
          <a class="button stylebtn is-size-5">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</div>
</div>
</template>

<script>
export default {
  setup() {
    document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
  },
}
</script>

<style>
.navbar {
  background-color: inherit;
}
.button{
  align-items: center;
  font-weight: bold;
    color: black;
    border-color: transparent;
    background-color: inherit;
}

.button:hover{
  border-color: transparent;
  color: black;
}

.navbar-item img {
    max-height: 4rem;
}

.stylebtn{
  background: #F0F0F3;
border: 1px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 20px #DFDFDF;
border-radius: 35px;
}

.stylebtn:hover{
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: black;
}


@media (max-width: 1023px) {
  .button{
    padding-right: 10px;
    padding-left: 10px;
  }
  .stylebtn {
    background: none;
border: none;
box-shadow: none;
  }
  .stylebtn:hover{
  border: none;
  color: black;
}
}

#navbarHome{
  background-color: #F0F0F3;
}
</style>