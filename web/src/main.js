import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

import Echarts from "vue-echarts"
import * as echarts from "echarts"

const app = createApp(App);
 
app.component("v-chart", Echarts);
 
app.config.globalProperties.$echarts = echarts;

app.use(store).use(router).mount('#app');
