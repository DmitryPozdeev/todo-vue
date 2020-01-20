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
		name: "TheUpcoming",
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
					).filter(el => el.status.toString().toLowerCase() === 'todo');
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
