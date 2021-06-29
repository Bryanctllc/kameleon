<template>
<div class="columns is-centered">
  <div class="column is-10">
<nav class="navbar is-10" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://lahaltemitoyenne.fr">
      <img src="../../assets/logo-lhm.png">
    </a>

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
          <a class="special button is-size-5">
            A propos
          </a>
          <a class="special button is-size-5" href="https://kameleon-equipe.systeme.io/blog-lahaltemitoyenne" target="_blank">
            Blog
          </a>
          <a class="special button stylebtn is-size-5">
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
.special{
  align-items: center;
  font-weight: bold;
    color: black;
    transition-duration: 0.5s;
    border-color: transparent;
    
}

.special:hover{
  transform: translateY(-4px);
  border-color: transparent;
  color: black;
}

.navbar-item img {
    max-height: 3.5rem;
}

.stylebtn{
  background: #92C3BE;
border: 3px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -10px -10px 30px #FFFFFF, 10px 10px 20px #AEAEC0;
border-radius: 34px;
}

.stylebtn:hover{
  transform: translateY(-4px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: black;
}

</style>