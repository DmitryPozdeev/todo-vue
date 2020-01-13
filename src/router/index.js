import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ShowToDoTopic from "../components/ShowToDoTopic";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/todos/categories',
    name: 'categories',
    component: Category,
    children: [
      {
        path: '/c_:category_id/t_:topic_id',
        name: 'Show topics',
        component: ShowToDoTopic
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
