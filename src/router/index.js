import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Gallery from '@/views/Gallery.vue'
import Indoor from '@/views/Indoor.vue'
import Outdoor from '@/views/Outdoor.vue'
import Product from '@/views/Product.vue'
import Security from '@/views/Security.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/indoor',
    name: 'Indoor',
    component: Indoor
  },
  {
    path: '/outdoor',
    name: 'Outdoor',
    component: Outdoor
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
