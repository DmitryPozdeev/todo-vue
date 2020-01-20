import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import ShowToDoTopic from "../views/TodosPage/TheShowTopic";
import TheAllTodos from "../views/TodosPage/TheAllTodos";
import TheUpcoming from "../views/TodosPage/TheUpcoming";
import TheCompleted from "../views/TodosPage/TheCompleted";
import TheOthers from "../views/TodosPage/TheOthers";

Vue.use(VueRouter);

const routes = [
	// {
	//   path: '*',
	//   redirect: '/todo_categories'
	// },
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/todo_categories',
		name: 'categories',
		component: Category,
		children: [
			{
				path: '/category_:category_id/topic_:topic_id',
				name: 'Show topics',
				component: ShowToDoTopic,
				redirect: '/category_:category_id/topic_:topic_id/all-todos',
				children: [
					{
						name: 'All todos',
						path: '/category_:category_id/topic_:topic_id/all-todos',
						component: TheAllTodos
					},
					{
						name: 'Upcoming',
						path: '/category_:category_id/topic_:topic_id/upcoming',
						component: TheUpcoming
					},
					{
						name: 'Completed',
						path: '/category_:category_id/topic_:topic_id/completed',
						component: TheCompleted
					},
					{
						name: 'Others',
						path: '/category_:category_id/topic_:topic_id/others',
						component: TheOthers
					}
				]
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
