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
		let todos = state.todoCategories.find(el => el.id === payload.selectedCategory).topics
			.find(el => el.id === payload.selectedTopic).todos;
		todos.lastTodoId += 1;
		todos.push({
			body: payload.todoBody,
			id: todos.lastTodoId,
			status: 'ToDo'
		});
		state.todoCategories.find(el => el.id === payload.selectedCategory).topics
			.find(el => el.id === payload.selectedTopic).todos = todos;
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
