import { createRouter, createWebHashHistory } from 'vue-router'
import WeakIdentify from '@/views/WeakIdentify'
import LoadControl from '@/views/LoadControl'


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

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
