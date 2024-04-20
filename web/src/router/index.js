import { createRouter, createWebHashHistory } from 'vue-router'
import WeakIdentify from '@/views/WeakIdentify'
import LoadControl from '@/views/LoadControl'
import ControlResults from '@/views/ControlResults.vue'

const routes = [
  {
    path: "/",
    name: "weakIdentify",
    component: WeakIdentify,

  },
  {
    path: "/loadControl/",
    name: "loadControl",
    component: LoadControl,
  },
  {
    path: "/results/",
    name: "results",
    component:ControlResults,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
