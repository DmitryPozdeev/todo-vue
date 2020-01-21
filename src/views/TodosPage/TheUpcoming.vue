<template>
	<todos-displaying v-bind:filteredUsers="filteredUsers"/>
</template>

<script>
	import TodosDisplaying from "../../components/TodosDisplaying";

	export default {
		name: "TheUpcoming",
		components: {TodosDisplaying},
		props: {
			search: {
				default: ''
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

	}
</script>
