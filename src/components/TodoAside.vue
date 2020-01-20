<template>
	<div id="left-side-panel">
		<div class="fixed">
			<button class="add_category_button"
			        v-on:click="openModal"/>
			<Modal title="Add new" v-if="modalShow" v-bind:show="modalShow" @emit-close="updateModalStatus">
				<label for="add_selection">
					<select id="add_selection" v-model="selectedOption">
						<option v-for="option in options"
						        v-bind:value="option.value">
							{{ option.text }}
						</option>
					</select>
				</label>
				<div v-if="selectedOption === 'category'">
					<label for="name">
						<input id="name_of_category"
						       class="modal__field"
						       type="text"
						       placeholder="Name of category"
						       v-model="newCategoryTitle">
						<button class="done_button"
						        v-on:click="addNewCategory">Create
						</button>
					</label>
				</div>
				<div v-else-if="selectedOption === 'topic'">
					<label for="category_selection">
						<select id="category_selection" v-model="selectedCategory">
							<option v-for="option in chooseCategoryOptions" v-bind:value="option.id">
								{{ option.title }}
							</option>
						</select>
					</label>
					<label for="name">
						<input id="name"
						       class="modal__field"
						       type="text"
						       placeholder="Name of topic"
						       v-model="newTopicTitle">
					</label>
					<button class="done_button"
					        v-on:click="addNewTopic">Create
					</button>
				</div>
			</Modal>
			<ul class="todo-category" v-for="todoCategory in todo.todoCategories" :key="todoCategory.id">
				<li>
					<h2 class="category__title">{{ todoCategory.title }}</h2>
					<ol class="category__topics">
						<li v-for="todoTopic in todoCategory.topics">
							<router-link
									:to="{
								name: 'Show topics',
								params: {
									category_id: todoCategory.id,
									topic_id: todoTopic.id
								}
							}">
								{{ todoTopic.title }}
							</router-link>

						</li>
					</ol>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
	import ShowToDoTopic from "../views/TodosPage/TheShowTopic";
	import Modal from "./Modal";
	import {mapState} from 'vuex';

	export default {
		name: "TodoAside",
		components: {Modal, ShowToDoTopic},
		computed: {
			...mapState(['todo'])
		},
		data() {
			return {
				selectedOption: 'category',
				options: [
					{text: 'New Category', value: 'category'},
					{text: 'New Topic', value: 'topic'},
				],
				newCategoryTitle: '',
				newTopicTitle: '',
				selectedCategory: 1,
				chooseCategoryOptions: this.categoryOptions(),
				modalShow: false
			}
		},
		methods: {
			openModal() {
				this.modalShow = !this.modalShow;
				this.$store.commit('changeModalActivation', true);
			},
			updateModalStatus(event, value) {
				this.modalShow = value;
			},
			addNewCategory() {
				if (this.newCategoryTitle) {
					this.$store.commit('newCategory', this.newCategoryTitle);
					this.$store.dispatch('updateLocalStorage');
					this.$store.commit('changeModalActivation', false);
					this.newCategoryTitle = '';
					this.updateModalStatus();
				}
			},
			categoryOptions() {
				return this.$store.getters.categoryOptions;
			},
			addNewTopic() {
				let selectedCategory = this.selectedCategory,
					newTopicTitle = this.newTopicTitle;
				if (newTopicTitle) {
					this.$store.commit({
						type: 'newTopic',
						selectedCategory: selectedCategory,
						newTopicTitle: newTopicTitle
					});
					this.$store.dispatch('updateLocalStorage');
					this.$store.commit('changeModalActivation', false);
					this.newTopicTitle = '';
					this.updateModalStatus();
				}

			}
		}

	}
</script>

<style lang="scss">
	@import "../assets/style/variables";

	.fixed {
		position: fixed;
	}

	#left-side-panel {
		z-index: 1;
		min-width: 290px;
		min-height: 100%;
		position: relative;
		top: 0;
		background-color: #F7F8FC;
		padding-left: 41px;
		padding-top: 70px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
		overflow-y: scroll;
		box-sizing: border-box;

		.add_category_button {
			position: relative;
			width: 45px;
			height: 29px;
			top: -40px;
			left: 180px;
			box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
			border: 2px solid #FE605B;
			box-sizing: border-box;
			border-radius: 25px;
			cursor: pointer;

			&:before {
				content: '\271A';
				white-space: pre;
				width: 20px;
				height: 100%;
				color: $red;
			}
		}
		.todo-category {
			list-style-type: circle;
			list-style-position: outside;
			li{
				text-decoration: none;
			}
			.category__title {

			}
			.category__topics {
				list-style-type: none;
				padding: 0;
				font-size: 14px;
				margin: 20px 0;
				li {
					padding-bottom: 15px;

					.router-link-active {
						color: #59A4F4;
					}
				}
				li:last-child {
					border-bottom: none;
					padding-bottom: 0;
				}
			}
		}
	}
</style>
