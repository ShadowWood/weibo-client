import Vue from 'vue'
import VueMdl from 'vue-mdl'
import VueRouter from 'vue-router'
import Router from './router-config'
import App from './App'


/* eslint-disable no-new */
Vue.use(VueMdl)
Vue.use(VueRouter)

var app = Vue.extend(App)

var router = new VueRouter({
  'linkActiveClass': 'active'
})

Router(router)


router.start(app, '#app')
