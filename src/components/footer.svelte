<script lang="ts">
	import * as config from '$lib/config';
</script>

<!-- Footer -->
<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		text-align: center;
		background-color: var(--dark-font);
		color: var(--light-font);
	}
</style>
