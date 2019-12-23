<template>
  <div class="hello">
    <h3>Foto:</h3>
    <h4>
            $route.params.NombreParametro(:id): {{$route.params.id}}
        </h4>
    <nav>
        <router-link to="/">BackHome</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  components:{
   
  },
  data () {
    return {
      
    }
  },
  /*EL STATE DE VUEX SE importa EN COMPUTED*/ 
  computed:{
    
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
h1, h2 {
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
a {
  color: #42b983;
}
</style>
