import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AppHome.vue'
import TermsConditions from '@/views/TermsConditions.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),

// })

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/terms',
    component: TermsConditions
  },
  {
    path: '/privacy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-primary'
})

export default router
