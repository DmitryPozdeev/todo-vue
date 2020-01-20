<template>
	<div id="all-todo-list" v-if="">
		<div class="todo-block" v-for="todoEl in filteredUsers">
			<h2 class="todo-block__status" v-bind:style="{color: getStatus(todoEl.status)}">{{todoEl.status}}</h2>
			<p class="todo-block__text-body">{{todoEl.body}}</p>
			<button class="todo-block__button">Mark as</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AllTodos",
		props: {
			search: {
				default: ''
			}
		},
		data() {
			return {
				color: 'green'
			}
		},
		computed: {
			filteredUsers() {
				const s = this.$props.search.toLowerCase();

				return this.$store.getters.findCategoryById(
					this.$route.params.category_id,
					this.$route.params.topic_id).todos
					.filter(el =>
						el.body.toString().toLowerCase().includes(s)
					);
			}
		},
		methods: {
			getStatus(status) {
				if (status === 'ToDo') {
					return 'green'
				} else if (status === 'Done') {
					return 'red'
				} else {
					return 'blue'
				}
			}
		}
	}
</script>

<style lang="scss">
	#all-todo-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 25px 15px 25px 25px;

		.todo-block {
			margin-bottom: 20px;
			width: 300px;
			height: 250px;
			box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
			background: #FFFFFF;
			border: 1px solid #CFCFCF;
			box-sizing: border-box;
			border-radius: 25px;
			padding: 25px;
			position: relative;

			.todo-block__status {
				font-weight: bold;
				font-size: 18px;
				line-height: 22px;
			}

			.todo-block__text-body {
				padding-top: 15px;
				font-weight: normal;
				font-size: 15px;
				line-height: 18px;
				word-wrap: break-word;
			}

			.todo-block__button {
				position: absolute;
				width: 140px;
				height: 45px;
				left: 18px;
				bottom: 18px;

				background: #FFFFFF;
				border: 1px solid #FF5F5A;
				box-sizing: border-box;
				border-radius: 25px;
				font-weight: 600;
				font-size: 16px;
				line-height: 20px;
				color: #FF5F5A;

			}
		}
	}
</style>
