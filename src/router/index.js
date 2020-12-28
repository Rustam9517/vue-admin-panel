import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from "@/views/Posts";
import Drafts from "@/views/Drafts";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/drafts',
    name: 'Drafts',
    component: Drafts
  },
]

const router = new VueRouter({
  routes
})

export default router
