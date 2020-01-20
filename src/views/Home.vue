<template>
	<div id="home">
	</div>
</template>

<script>
	import ShowToDoTopic from "./TodosPage/TheShowTopic";
	import {mapState} from "vuex";

	export default {
		name: 'home',
		components: {
			ShowToDoTopic
		},
		computed: mapState(["isTodoTopicActive"]),
	}
</script>
<style lang="scss">
	#home {
		display: flex;
	}
</style>
