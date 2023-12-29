<!-- Navigation.svelte -->
<script lang="ts">
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<button on:click={toggleMenu}>
	<!-- Add your hamburger menu icon here -->
</button>

{#if isOpen}
	<nav class="menu {isOpen ? 'open' : ''}">
		<button class="close" on:click={() => (isOpen = false)}>X</button>
		<ul class="links">
			<li class="menu-item">
				<a href="/history">History</a>
			</li>
			<li class="menu-item">
				<a href="/signup">Sign Up</a>
			</li>
			<li class="menu-item">
				<a href="/events">Events</a>
			</li>
		</ul>
	</nav>
{/if}

<style lang="scss">
	.menu {
		transform: translateX(100%);
		transition: transform 2.7s ease-out;

		&.open {
			transform: translateX(0);
		}

		.close {
			position: absolute;
			top: 0;
			right: 0;
		}

		.links {
			display: flex;

			.menu-item {
				list-style-type: none;
				margin: 0 1rem;
				color: white;

				a {
					color: inherit;
					text-decoration: none;
				}
			}
		}
	}
</style>
