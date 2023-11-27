<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import '../app.scss';
	import Banner from '../components/banner.svelte';
</script>

<div class="layout">
	<Header />

	<main>
		<Banner />
		<div class="content-container">
			<slot />
		</div>
	</main>

	<Footer />
</div>

<style lang="scss">
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
