import { HomePage } from 'pages/home'
import DefaultLayout from '../layout/default.vue'
import AuthLayout from '../layout/auth.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { AuthPage } from 'pages/auth'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        { component: HomePage, path: '/', },
      ],
    },
    {
      component: AuthLayout,
      path: '/auth',
      children: [
        { component: AuthPage, path: '', },
      ],
    },
  ],
})
