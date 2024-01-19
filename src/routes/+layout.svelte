<script lang="ts">
	import Navigation from '../components/MobileNavigation.svelte';
	import Header from '../components/H.svelte';
	import Footer from '../components/F.svelte';
	import '../app.scss';
	import Banner from '../components/banner.svelte';
</script>

<Navigation />
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
