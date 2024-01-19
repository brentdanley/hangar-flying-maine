<!-- Navigation.svelte -->
<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.route.id;
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}

	const menuItems = [
		{ label: 'History', link: '/history' },
		{ label: 'Sign Up', link: '/signup' },
		{ label: 'Events', link: '/events' }
	];
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
	/>
</svelte:head>

<button class="hamburger" on:click={toggleMenu}>
	<i class="fas fa-bars" />
</button>

<nav class="menu{isOpen ? ' open' : ''}">
	<button class="close" on:click={closeMenu}><i class="fas fa-times" /></button>
	<ul class="links">
		{#each menuItems as item}
			<li class="menu-item{path === item.link ? ' active' : ''}">
				<a href={item.link} on:click={closeMenu}>{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<!-- Overlay -->
<div
	class="overlay{isOpen ? ' open' : ''}"
	on:click={closeMenu}
	on:keydown={closeMenu}
	role="button"
	tabindex="0"
/>

<style lang="scss">
	.hamburger {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		background-color: transparent;
		border: none;
		color: var(--light-green);
		font-size: 4rem;
		font-weight: bold;
		z-index: 9999;
		border-radius: 50%;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.menu {
		position: fixed;
		top: 0;
		width: 300px;
		height: 100vh;
		transform: translateX(-100%);
		transition: transform 0.4s ease-in-out;
		background-color: var(--light-green);
		z-index: 999;

		&.open {
			transform: translateX(0);
		}

		.close {
			position: absolute;
			top: 0.3rem;
			right: 0.3rem;
			background-color: transparent;
			border: none;
			color: var(--dark-font);
			font-size: 2rem;
			z-index: 9999;
			border-radius: 50%;
		}

		.links {
			display: flex;
			flex-direction: column;

			.menu-item {
				list-style-type: none;
				margin: 1rem 0;
				color: var(--dark-font);
				font-weight: bold;

				a {
					color: inherit;
					text-decoration: none;
				}

				&.active {
					color: red;
				}
			}
		}

		@media (min-width: 768px) {
			display: none;
		}
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		visibility: hidden;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		z-index: 998;
	}

	.overlay.open {
		visibility: visible;
		opacity: 1;
	}
</style>
