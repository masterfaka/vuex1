<template>
  <div id="app">
    <img width="25rem" src="./assets/logo.png">
    <Lista></Lista>
    <!--HellowWorld></HellowWorld --> 
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
