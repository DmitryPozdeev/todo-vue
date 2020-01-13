<template>
	<div id="app">
		<nav>
			<router-link to="/">
				<img class="profile-icon" src="./assets/profile_icon.png" alt="home">
			</router-link>
			<router-link to="/todos/categories/">
				ToDo
			</router-link>
		</nav>
		<router-view/>

	</div>
</template>

<script>
	export default {
		name: "App",

	}
</script>

<style lang="scss">
	@import "./style/variables";

	#app {
		padding-left: 90px;
	}
	nav{
		position: fixed;
		width: 90px;
		height: 100%;
		background-color: $blue;
		top: 0;
		left: 0;
		overflow-x: hidden;
		padding-top: 20px !important;
		display: flex;
		flex-direction: column;
		align-items: center;
		.profile-icon {
			margin: 0 auto;
			width: 50px;
			height: 50px;
			border: 1px solid $green;
			border-radius: 25px;
		}
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
	}
	#main {
		margin-left: 90px;
	}
</style>
