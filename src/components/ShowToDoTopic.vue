<template>
	<div id="todo-topics">
		<div>
			<div id="top-topics-panel">
				<label id="search-field">
					<input type="text" placeholder="Search Here">
				</label>
				<button class="add-new-button">Add new</button>
			</div>
			<div>
				<h2>Fitness</h2>
			</div>
			<div>
				<ul>
					<li><router-link>All Todo's</router-link></li>
					<li><a>Upcoming</a></li>
					<li><a>Completed</a></li>
					<li><a>Others</a></li>
				</ul>
			</div>
			<router-view />
		</div>

	</div>
</template>

<script>
	export default {
		name: "ShowToDoTopic"
	}
</script>

<style lang="scss">
	@import '../style/variables.scss';
	#top-topics-panel {
		display: flex;
		.add-new-button {
			background-color: $red;
			border: 1px solid $border-red;
		}

	}
</style>
