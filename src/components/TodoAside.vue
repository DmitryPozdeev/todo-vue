<template>
	<div id="left-side-panel" >
		<button class="add_category_button" v-on:click="changeModalStatus"/>
		<Modal title="Add new" v-if="todo.modalShow">
			<label for="add_selection">
				<select id="add_selection" v-model="selected_option">
					<option v-for="option in options" v-bind:value="option.value">
						{{ option.text }}
					</option>
				</select>
			</label>
			<div v-if="selected_option === 'category'">
				<label for="name">
					<input id="name_of_category" class="modal__field" type="text" placeholder="Name of category" v-model="new_category_title">
					<button id="done_button" v-on:click="addNewCategory()">Create</button>
				</label>
			</div>
			<div v-else-if="selected_option === 'topic'">
				<label for="name">
					<input id="name" class="modal__field" type="text" placeholder="Name of category" >
				</label>
			</div>

		</Modal>
		<ul class="todo-category" v-for="todoCategory in todo.todoCategories" :key="todoCategory.id">
			<li>
				<h2 class="category__title">{{ todoCategory.title }}</h2>
				<ol class="category__topics">
					<li v-for="todoTopic in todoCategory.topics"
					    @click="$store.commit('changeActive',
            {category_id: todoCategory.id, topic_id: todoTopic.id})">
						{{ todoTopic.title }}
					</li>
				</ol>
			</li>

		</ul>
	</div>
</template>

<script>
	import ShowToDoTopic from "./ShowToDoTopic";
	import Modal from "./Modal";
	import {mapState} from 'vuex';
	export default {
		name: "TodoAside",
		components: {Modal, ShowToDoTopic },
		computed: {
			...mapState(['todo'])
		},
		data() {
			return {
				selected_option: 'category',
				options: [
					{ text: 'New Category', value: 'category' },
					{ text: 'New Topic', value: 'topic' },
				],
				new_category_title: ''
			}
		},
		methods: {
			changeModalStatus () {
				this.$store.commit('changeModalStatus');
			},
			addNewCategory () {
				this.$store.commit('newCategory', this.new_category_title);
				this.changeModalStatus();
			}

		}

	}
</script>

<style lang="scss">
	@import "../style/variables";
	#left-side-panel {
		width: 290px;
		height: 100%;
		position: fixed;
		top: 0;
		background-color: #F7F8FC;
		padding-left: 41px;
		padding-top: 70px;
		.add_category_button {
			position: relative;
			width: 45px;
			height: 29px;
			top: -40px;
			left: 210px;
			box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
			border: 2px solid #FE605B;
			box-sizing: border-box;
			border-radius: 25px;
			&:before{
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
				}
				li:last-child {
					border-bottom: none;
					padding-bottom: 0;
				}
			}
		}
	}
</style>
