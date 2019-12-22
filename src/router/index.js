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
      component: ()=> import(/* webpackChunkName: "Ruta1" */'@/views/Ruta1') 
    }
  ]
})
