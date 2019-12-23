<template>
  <div class="hello">
    <h3>Foto:</h3>
    <p>$route....(:id): {{$route.params.id}}</p>
    <blockquote>
      <cite>
        la ruta de subcompone3nte es relativva a
        la ruta
        <strong>ACTUAL</strong>; asi se
        puede modificar el parametro de la ruta
        desde el
        <span>sub-hijo</span>
      </cite>
      |/+/|
      <p>
        <code>
          sino usar el bindeado a
          :to="{name:
          <i>'NombreRuta'</i>, params:{
          <i>idParam: valor|idValorState}}</i> "
        </code>¡¡¡OJo commillas!!!!!
      </p>
    </blockquote>
    <nav>
      <router-link to="0">
        <button class="btn btn-danger" @click="reiniciarG">reiniciarGaleria</button>
      </router-link>
      <router-link :to="{name:'galeria', params:{id: idFoto}}" @click.native="decreIdF">
        <button class="btn btn-warning"><< -</button>
      </router-link>
      <!--router-link :to="idFoto" -->
      <router-link :to="{name: 'galeria', params:{id: idFoto}}">
        <button class="btn btn-warning" @click="aumentarIdF">+ >></button>
      </router-link>
      <router-link to="/">
        <button class="btn btn-success">BackHome</button>
      </router-link>
    </nav>
    <p>
      para elementos Vue(pEj: router-link) se usa eventos
      <strong>"Nativos del navegador"</strong>:
      <i>@click.native</i> =/= @click
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Foto",
  components: {},
  data() {
    return {};
  },
  /*EL STATE DE VUEX SE importa EN COMPUTED*/

  computed: {
    ...mapState(["idFoto"])
  },
  methods: {
    /*cada item con sus comillas*/
    ...mapMutations(["aumentarIdF", "decreIdF", "reiniciarG"])
  }
};
/*
const store=new Vuex.Store({
  state:{
    mensaje:"Holamundo!"
  }
});
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a,
span {
  color: #42b983;
}
</style>
