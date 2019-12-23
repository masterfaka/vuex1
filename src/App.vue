<template>
  <div id="app" >
    <img width="25rem" src="./assets/logo.png">
    <Lista></Lista>
    <!--HellowWorld></HellowWorld --> 
    <nav  class="navbar nav box-shadow-lg bg-white rounded">
      <li><router-link to="/Ruta1">Ruta1</router-link></li>
      
       <router-link :to="{name:'RDinamica', params:{id}}">Galeria|FOTO nº:
         <input v-model="id" :min="1" :max="10"></number-input></router-link>  
        </li>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import HellowWorld from './components/HelloWorld';
import Lista from './components/Lista'
/*!!Se importa Store aki y se autoinyecta a
todos los hijos automaticamente*/

export default {
  name: 'App', 
  components:{
    HellowWorld, 
    Lista
  }, 
  data(){
    return {
      id:2
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
