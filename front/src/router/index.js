
import Vue from 'vue'
import * as VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import UserPost from '../views/UserPost.vue'
import UserCreate from '../views/UserCreate.vue'
import UserProfil from '../views/UserProfil.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/allpost',
    name: 'AllPost',
    component: UserPost
  },
  {
    path: '/create',
    name: 'Create',
    component: UserCreate
  },
  {
    path: '/profil',
    name: 'Profil',
    component: UserProfil
  }
]

const router = new VueRouter({
  mode: 'history',
  base:process.env.BASE_URL,
  routes
})

export default router

