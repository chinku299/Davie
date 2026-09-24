import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Delivery made for you' } },
  {
    path: '/track',
    name: 'track',
    component: () => import('../features/tracking/TrackView.vue'),
    meta: { title: 'Evri | Track a parcel' }
  },
  {
    path: '/send',
    name: 'send',
    component: () => import('../features/sending/SendView.vue'),
    meta: { title: 'Evri | Send Parcel' }
  },
  {
    path: '/prices',
    name: 'prices',
    component: () => import('../features/sending/PricesView.vue'),
    meta: { title: 'Evri | Sizes and prices' }
  },
  {
    path: '/overseas',
    name: 'overseas',
    component: () => import('../features/sending/OverseasView.vue'),
    meta: { title: 'Evri | Sending overseas' }
  },
  {
    path: '/returns',
    name: 'returns',
    component: () => import('../features/returns/ReturnsView.vue'),
    meta: { title: 'Evri | Send something back' }
  },
  {
    path: '/receive',
    name: 'receive',
    component: () => import('../features/tracking/ReceiveView.vue'),
    meta: { title: 'Evri | Receiving a parcel' }
  },
  {
    path: '/network',
    name: 'network',
    component: () => import('../features/locations/NetworkView.vue'),
    meta: { title: 'Evri | Drop-off points' }
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/BusinessView.vue'),
    meta: { title: 'Evri | Business accounts' }
  },
  {
    path: '/restrictions',
    name: 'restrictions',
    component: () => import('../features/sending/RestrictionsView.vue'),
    meta: { title: 'Evri | What we cannot carry' }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/HelpView.vue'),
    meta: { title: 'Evri | Help centre' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Evri | Contact us' }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../views/SignInView.vue'),
    meta: { title: 'Evri | Sign in' }
  },

  ...['privacy', 'cookies', 'terms', 'accessibility'].map((docId) => ({
    path: '/' + docId,
    name: docId,
    component: () => import('../views/LegalView.vue'),
    props: { docId },
    meta: { title: `Evri | ${docId.charAt(0).toUpperCase() + docId.slice(1)}` }
  })),

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Evri | Page not found' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, saved) => saved || { top: 0 }
})

router.afterEach((to) => {
  document.title = to.meta.title ? to.meta.title : 'Evri | Send Parcel'
})

export default router
