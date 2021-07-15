<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale button btn-danger">X</div>
      <h2>L'application est en cours de développement</h2>
      <p>Pour ne pas manquer sa sortie inscrivez vous a notre newsletter</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Modale",
  props: ["revele", "toggleModale"]
};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 41px;
}

.overlay {
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f0f0f3;
  border-radius: 16px;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
  margin: 0.75rem;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>