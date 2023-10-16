<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.scss';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style lang="scss">
	.layout {
		display: grid;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
