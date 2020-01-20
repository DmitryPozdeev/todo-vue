<template>
	<div id="right-side">
		<div id="todo-topics">
			<div id="top-topics-panel">
				<div class="search-add-panel">
					<label for="search-field">
						<input id="search-field" v-model="search" type="text" placeholder="Search Here">
					</label>
					<button class="add-new-button" v-on:click="openModal">Add new</button>
				</div>
				<div>
					<h2 id="topic-title">
						{{this.$store.getters.findCategoryById(
						this.$route.params.category_id,
						this.$route.params.topic_id).title}}
					</h2>
				</div>
				<div id="">
					<div id="todo-bar">
						<ul>
							<li>
								<router-link :to="{
							name: 'All todos',
							params: {
								category_id: this.$route.params.category_id,
								topic_id: this.$route.params.topic_id
							}
						}">All Todo's
								</router-link>
							</li>
							<li>
								<router-link :to="{
								name: 'Upcoming',
								params: {
									category_id: this.$route.params.category_id,
									topic_id: this.$route.params.topic_id
								}
							}">Upcoming
								</router-link>
							</li>
							<li>
								<router-link :to="{
								name: 'Completed',
								params: {
									category_id: this.$route.params.category_id,
									topic_id: this.$route.params.topic_id
								}
							}">Completed
								</router-link>
							</li>
							<li>
								<router-link :to="{
								name: 'Others',
								params: {
									category_id: this.$route.params.category_id,
									topic_id: this.$route.params.topic_id
								}
							}">Others
								</router-link>
							</li>
						</ul>
					</div>
				</div>


			</div>

		</div>
		<Modal title="Add new" styles="width: 435px; height: 300px" v-if="modalShow" v-bind:show="modalShow"
		       @emit-close="updateModalStatus">
			<label>
				<textarea :maxlength="max" v-model="todoBody" class="modal__textarea" placeholder="Todo...">
				</textarea>
			</label>
			<button class="done_button"
			        v-on:click="addNewTodo">Create
			</button>
			<div class="input-group-addon" v-text="(max - todoBody.length)"></div>
		</Modal>
		<router-view v-bind:search="search"/>
	</div>
</template>

<script>
	import Modal from "../../components/Modal";

	export default {
		name: "ShowToDoTopic",
		components: {Modal},
		data() {
			return {
				search: '',
				todoBody: '',
				max: 145,
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
			addNewTodo() {
				let selectedCategory = this.$route.params.category_id,
					selectedTopic = this.$route.params.topic_id,
					todoBody = this.todoBody;
				if (todoBody) {
					this.$store.commit({
						type: 'newTodo',
						selectedCategory: Number(selectedCategory),
						selectedTopic: Number(selectedTopic),
						todoBody: todoBody
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
	@import '../../assets/style/variables';

	a {
		text-decoration: none;
		color: inherit;
	}

	#right-side {
		position: relative;
		width: 100%;
	}

	.input-group-addon {
		font-size: 12px;
		display: flex;
		justify-content: end;
		color: #CFCFCF;
	}

	#todo-topics {
		/*padding-left: 332px;*/
		display: flex;
	}

	#top-topics-panel {

		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		height: 260px;
		width: 100%;

		#todo-bar {
			.router-link-exact-active {
				border-bottom: 2px solid red;
				padding-bottom: 18px;
			}
		}

		ul {
			display: flex;
			justify-content: left;
			padding-bottom: 20px;

			li {
				list-style-type: none;
				font-weight: 500;
				font-size: 18px;
				margin-left: 45px;
			}

			border-bottom: 1px solid #CFCFCF;
		}

		#topic-title {
			font-weight: bold;
			font-size: 32px;
			line-height: 39px;
			padding: 40px;
		}

		.search-add-panel {
			display: flex;
			justify-content: space-between;
			padding-left: 40px;
			padding-right: 35px;

			.add-new-button {
				background-color: $red;
				border: 1px solid $border-red;
				width: 170px;
				height: 40px;
				box-sizing: border-box;
				border-radius: 25px;
				font-weight: 500;
				font-size: 18px;
				line-height: 22px;
				color: white;
				box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
				font-style: normal;
				cursor: pointer;
			}
		}

		#search-field {
			width: 515px;
			height: 40px;
			background: #FFFFFF;
			border: 1.5px solid #CFCFCF;
			box-sizing: border-box;
			border-radius: 25px;
			font-weight: 500;
			font-size: 16px;
			padding-left: 45px;
			box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

			&::placeholder {
				color: #CFCFCF;
			}

		}
	}
</style>
