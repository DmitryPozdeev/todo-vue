<template>
	<div id="main-section">
		<TodoAside/>
		<router-view/>
	</div>

</template>
<script>
	import TodoAside from "../components/TodoAside";

	export default {
		components: {TodoAside}
	}
</script>
<style scoped>
	#main-section {
		display: flex;
		min-height: 100vh;
	}
</style>
