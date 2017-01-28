import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter);

import Index from './components/home/index.vue';
import Camera from './components/camera/index.vue';
import Book from './components/Book/index.vue';
import Article from './components/article/index.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Index },
    { path: '/article', component: Article },
    { path: '/camera', component: Camera },
    { path: '/book', component: Book },
    { path: '/*', component: Index },
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
