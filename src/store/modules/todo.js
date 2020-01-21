const state = {
	isModalActive: false,
	todoCategories: JSON.parse(localStorage.getItem('todoCategories')) || [],
	lastCategoryId: Number(localStorage.getItem('lastCategoryId')) || 0
};
const mutations = {
	changeModalActivation(state, newState) {
		state.isModalActive = newState;
	},
	newCategory(state, categoryName) {
		state.lastCategoryId += 1;
		state.todoCategories.push({
			title: categoryName,
			id: state.lastCategoryId,
			lastTopicId: 0,
			topics: []
		});
	},
	newTopic(state, payload) {
		state.todoCategories.find(el => el.id === payload.selectedCategory).lastTopicId += 1;
		state.todoCategories.find(el => el.id === payload.selectedCategory).topics.push({
			title: payload.newTopicTitle,
			id: state.todoCategories.find(el => el.id === payload.selectedCategory).lastTopicId,
			todos: [],
			lastTodoId: 0
		});
	},
	newTodo(state, payload) {
		let topic = state.todoCategories.find(el => el.id === payload.selectedCategory).topics
			.find(el => el.id === payload.selectedTopic);
		topic.lastTodoId += 1;
		topic.todos.push({
			body: payload.todoBody,
			id: topic.lastTodoId,
			status: 'ToDo'
		});
		state.todoCategories.find(el => el.id === payload.selectedCategory).topics
			.find(el => el.id === payload.selectedTopic).todos = topic.todos;
	},
	removeTodo(state, payload) {
		let todoId_ = payload.todoId;
		let todos = state.todoCategories.find(el => el.id === payload.selectedCategory).topics
			.find(el => el.id === payload.selectedTopic).todos;
		todos.splice(this.getters.getTodoPosition(todoId_, todos), 1);
		this.dispatch('updateLocalStorage');
	}
};
const getters = {
	findCategoryById: state => (categoryId, topicId) => {
		categoryId = Number(categoryId);
		topicId = Number(topicId);
		return state.todoCategories.find(el => el.id === categoryId).topics.find(el => el.id === topicId)
	},
	categoryOptions(state) {
		return state.todoCategories;
	},
	getTodoPosition: state => (todoId, todos) => {
		let idx = 0,
			l = todos.length;
		for (idx; todos[idx] && todos[idx].id !== todoId; idx++) {
		}
		return idx === l ? -1 : idx;
	}
};
const actions = {
	updateLocalStorage(context) {
		let tc = context.state.todoCategories;
		localStorage.setItem('todoCategories', JSON.stringify(tc));
		localStorage.setItem('lastCategoryId', context.state.lastCategoryId);
	}
};
export default {
	state,
	mutations,
	getters,
	actions
};
