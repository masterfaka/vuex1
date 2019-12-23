<template>
    <div  class="container card box-shadow-lg bg-white rounded">
        <h2>Galeria</h2>
        <h4>
            $route.params.NombreParametro(:id): {{$route.params.id}}
        </h4>
        
        <nav>
            <router-link to="/">BackHome</router-link>
        </nav>
        <Foto/>
    </div>

</template>

<script>
/*Como ice export Default puedo llamarlo como kiero*/
import Foto from '@/components/Foto'
    export default {
        name:'RDinamica',
        components:{
            Foto
        }
    }
</script>

<style lang="scss" scoped>

</style>