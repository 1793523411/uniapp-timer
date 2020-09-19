import Vue from 'vue'
import App from './App'

import home from './pages/home/home.vue'
Vue.component('home',home)
import chart from './pages/chart/chart.vue'
Vue.component('chart',chart)
import anylize from './pages/anylize/anylize.vue'
Vue.component('anylize',anylize)


import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



