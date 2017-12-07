import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './views/App.vue'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

Vue.use(VueRouter)

var routes = [
  	{ path: '/app', component: App },
  	{ path: '/users', component: Users },
  	{ path: '/home', component: Home }
	];

var router = new VueRouter({
	routes,
	mode: 'history'
});


new Vue({
  el: '#app',
  router: router
})
