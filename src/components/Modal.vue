<template>
	<transition name="fade" mode="out-in">
		<div class="modal">
			<div class="overflow" @click="emitClose"></div>
			<div class="modal-block" :style="styles">
				<div class="modal-header">
					<h3 class="modal-title">{{ title }}</h3>
					<button class="close" @click="emitClose">&times;</button>
				</div>
				<div class="modal-content">
					<!--suppress CheckTagEmptyBody -->
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
    export default {
    	name: 'modal',
	    props: {
		    title: {
			    default: ''
		    },
		    styles: {
    			default: 'width: 435px; height: 360px'
		    }
	    },
	    methods: {
    		emitClose () {
			    this.$store.commit('changeModalStatus')
		    }
	    }
    }
</script>

<style lang="scss" >
	.fade-enter-active, .fade-leave-active {
		transition: all 0.2s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;

		.overflow {
			height: 100vh;
			width: 100vw;
			background-color: rgba(0, 0, 0, .25);
		}

		.modal-block {
			box-sizing: border-box;
			background-color: #fff;
			position: absolute;
			top: 150px;
			width: 100%;
			left: 50%;
			transform: translateX(-50%);
			padding: 25px 30px;
			border-radius: 25px;
			box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);

			.modal-header {
				margin-bottom: 15px;

				.modal-title {
					font-weight: bold;
					font-size: 20px;
					line-height: 24px;
					color: #19A459;
				}

				.close {
					position: absolute;
					top: 6px;
					right: 15px;
					width: 40px;
					height: 40px;
					min-width: 40px;
					font-size: 24px;
					font-weight: 700;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: transparent;
					border: none;
					cursor: pointer;
				}
			}

			.modal-content {
				display: flex;
				flex-direction: column;
				justify-content: start;
				height: 100%;
				padding: 10px 0 0 0;

				select {
					cursor: pointer;
					-webkit-appearance: none;
					padding: 0.65em 2.5em 0.55em 0.75em;
					font: 400 12px/1.3 sans-serif;
					margin-bottom: 30px;
				}

				.done_button {
					position: absolute;
					left: 35px;
					bottom: 25px;
					float: left;
					width: 120px;
					height: 45px;
					background: #FFFFFF;
					border: 1px solid #FF5F5A;
					box-sizing: border-box;
					border-radius: 25px;
					font-weight: 600;
					font-size: 16px;
					line-height: 20px;
					color: #FF5F5A;
					cursor: pointer;
				}
				.modal__field {
					width: 375px;
					height: 40px;
					font-weight: 500;
					font-size: 16px;
					line-height: 20px;
					border: 1px solid #CFCFCF;
					border-radius: 25px;
					padding: 0.65em 2.5em 0.55em 0.75em;
					box-sizing: border-box;
				}
				select, option {
					width: 375px;
					height: 40px;
					font-weight: 500;
					font-size: 16px;
					line-height: 20px;
					border: 1px solid #CFCFCF;
					box-sizing: border-box;
					border-radius: 25px;
				}
			}
		}
	}
</style>
