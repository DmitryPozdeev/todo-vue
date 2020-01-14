const state = {
	modalShow: false,
	todoCategories: [
		{
			title: "Personal",
			id: 1,
			topics: [
				{
					title: "Fitness",
					id: 1,
					isActive: false,
					todos: [
						{
							title: "Title",
							status: "ToDo",
							body: "Lorem ipsum"
						}
					]
				},
				{
					title: "Language",
					id: 2,
					isActive: false,
					todos: [
						{
							title: "Title",
							status: "ToDo",
							body: "Lorem ipsum"
						}
					]
				}
			]
		},
		{
			title: "Finance",
			id: 2,
			topics: [
				{
					title: "Stocks",
					id: 1,
					isActive: false,
					todos: [
						{
							title: "Title",
							status: "ToDo",
							body: "Lorem ipsum"
						}
					]
				},
				{
					title: "Job",
					id: 2,
					isActive: false,
					todos: [
						{
							title: "Title",
							status: "ToDo",
							body: "Lorem ipsum"
						}
					]
				}
			]
		}
	]
};
const mutations = {
	newCategory(state, categoryName) {
		state.todoCategories.push({
			title: categoryName,
			id: state.todoCategories[state.todoCategories.length - 1].id + 1
		});
	},
	newTopic(state, payload) {
		state.todoCategories.find(el => el.id === payload.selectedCategory).topics.push({
			title: payload.newTopicTitle,
			id: state.todoCategories.find(el => el.id === payload.selectedCategory).topics[
			state.todoCategories.find(el => el.id === payload.selectedCategory).topics.length - 1
				].id + 1,
			isActive: false,
			todos: []
		});
	},
	changeModalStatus(state) {
		state.modalShow = !state.modalShow;
	}
};
const getters = {
	// showActiveTopics: (state, out) => {
	// 	state.todoCategories.forEach(el => {
	// 		out = el.topics.filter(el2 => el2.isActive)
	// 	});
	// 	if (out[0]){
	// 		return out = out[0]
	// 	}
	// 	return 0;
	// },
	findCategoryById(state, categoryId) {
		return state.todoCategories.find(el => el.id === categoryId)
	},
	isActive: state => {
		return state.modalShow;
	},
	categoryOptions(state) {
		return state.todoCategories;
	}
};
export default {
	state,
	mutations,
	getters
};
