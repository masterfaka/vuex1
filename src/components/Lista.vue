<template>
    <div class="container card box-shadow-lg bg-white rounded">
        <h3>lista funcionaL Vuex</h3>

    <ul class="list-group hoverable">
        <li v-for="(item, indice) in arrayOrdenado" 
            :key="item.indice"
            @click="aumentar(indice)"
             class="list-group-item d-flex justify-content-between align-items-center"
             >
            [{{indice}}]--{{item.nombre}}
          <span class="badge badge-primary badge-pill">
              {{item.cant}}</span>
            
        </li>
    </ul>
    <button class="btn btn-info"
     @click="reiniciarFrutas">Reiniciar Contadores</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'Lista',
        computed:{
            /*aki mer traigo desde vuex*/
            ...mapState(['frutas']), 
            arrayOrdenado(){
                return this.frutas.sort((a,b)=>a.cant- b.cant)
            }
        }, 
        methods:{
            /*a pesar de ke se le pasa el state
            aki se invoca sin; salvo demas args*/
            ...mapMutations(['aumentar', 'reiniciarFrutas'])
        }
    }
</script>

<style lang="scss" scoped>

</style>