import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/LoginView.vue')
const Register = () => import('../views/RegisterView.vue')
const Welcome = () => import('../views/WelcomeView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    
  ]
})

export default router
