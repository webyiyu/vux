// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import Hello from './components/Hello'
import Example from './components/Example'
import Scroll from './pages/Scroll'
import Person from './pages/Person'
import Demo from './pages/Demo'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
},
{
  path: '/hello',
  component: Hello
},
{
  path: '/Example',
  component: Example
},
{
  path: '/Scroll',
  component: Scroll
},
{
  path: '/Person',
  component: Person
},
{
  path: '/Demo',
  component: Demo
}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
