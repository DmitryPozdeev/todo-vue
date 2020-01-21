<template>
	<todos-displaying v-bind:filteredUsers="filteredUsers"/>
</template>

<script>
	import TodosDisplaying from "../../components/TodosDisplaying";

	export default {
		name: "AllCompleted",
		props: {
			search: {
				default: ''
			}
		},
		components: {
			TodosDisplaying
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
					).filter(el => el.status.toString().toLowerCase() === 'done');
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

<style>

</style>
