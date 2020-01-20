<template>
	<div id="app" v-scroll-lock="this.$store.state.todo.isModalActive">
		<nav>
			<router-link to="/">
				<img class="profile-icon" src="./assets/profile_icon.png" alt="home">
			</router-link>
			<router-link id="todo-link" to="/todo_categories/">
				<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
				     xmlns:xlink="http://www.w3.org/1999/xlink">
					<rect width="50" height="50" rx="5" fill="url(#pattern0)"/>
					<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image0" transform="scale(0.0078125)"/>
						</pattern>
						<image id="image0" width="128" height="128"
						       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTI4IgogICB0aWZmOkltYWdlV2lkdGg9IjEyOCIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyOCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjEyOCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIw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"/>
					</defs>
				</svg>
			</router-link>
		</nav>
		<router-view/>

	</div>
</template>

<script>
	export default {
		name: "App",
		methods: {}
	}
</script>

<style lang="scss">
	@import "assets/style/variables";

	.overflow {
		overflow: hidden;
	}

	#app {
		overflow-x: hidden;
		padding-left: 90px;
		font-size: 18px;
	}

	nav {
		z-index: 1;
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

		#todo-link {
			.router-exact-active {
				box-shadow: 0 4px 4px rgba(89, 164, 244, 0.25);
			}
		}

		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
	}

	#main {
		margin-left: 90px;
	}

	@media only screen and (max-width: 1200px) {
		nav {
			width: 80px;

			.profile-icon {
				width: 45px;
				height: 45px;
			}
		}
		#main {
			margin-left: 80px;
		}
	}
</style>
