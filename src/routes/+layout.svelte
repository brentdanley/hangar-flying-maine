<script lang="ts">
	import '../app.scss';
</script>

<div class="layout">
	<!-- header -->

	<main>
		<slot />
	</main>
	<!-- footer -->
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
