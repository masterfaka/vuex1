import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ruta1',
      name: 'Ruta1',
      component: () => import(/* webpackChunkName: "Ruta1" */'@/views/Ruta1')
    },
    {
      path: '/rDinamica/:id',
      name: 'RDinamica',
      component: () => import(/* webpackChunkName: "RDinamica" */'@/views/RDinamica')
    },
    {
      path: '/galeria/:id',
      name: 'galeria',
      component: () => import(/* webpackChunkName: "galeria" */'@/views/Galeria')
    }
  ]
})
