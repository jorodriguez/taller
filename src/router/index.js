import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Usuario from '@/components/Usuario'

Vue.use(Router)

//aqui deben de ir todas las rutas 

export default new Router({
  routes: [
    {path: '/',name: 'Login',component: Login },
    {path: '/usuario',name: 'Usuario',component: Usuario }
  ]
})
