<template>
  <div class="container">
    <div class="card mishdw">
      <router-link to="/">
        <button class="btn btn-warning">Home</button>
      </router-link>

      <div class="card">
        <h4>Galeria</h4>
        <Foto />
      </div>
    </div>
  </div>
</template>

<script>
import Foto from "@/components/Foto5";
export default {
  name: "Galeria",
  components: {
    Foto
  }
};
</script>

<style scoped>
.mishdw {
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>