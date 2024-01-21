<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import airports from '$data/ne_airports.geojson?url';

	let map: mapboxgl.Map;

	onMount(async () => {
		mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/satellite-v9',
			center: [-70.309303, 43.646198],
			zoom: 8
		});

		map.on('load', () => {
			map.addSource('airports', {
				type: 'geojson',
				data: airports
			});

			map.addLayer({
				id: 'airports',
				type: 'circle',
				source: 'airports',
				paint: {
					'circle-radius': 5,
					'circle-color': [
						'match',
						['to-string', ['get', 'ishome']],
						'true',
						'#ff00ff', // color for home airports
						'false',
						'#8cc63f', // color for other airports
						'#fff' // default color for other airports
					]
				},
				interactive: true
			});

			map.addLayer({
				id: 'airport-labels',
				type: 'symbol',
				source: 'airports',
				layout: {
					'text-field': ['get', 'identifier'],
					'text-font': ['Open Sans Regular'],
					'text-size': 12,
					'text-anchor': 'left',
					'text-offset': [0.7, 0]
				},

				paint: {
					'text-color': '#fff'
				}
			});
		});

		map.on('click', 'airports', (e) => {
			const features = map.queryRenderedFeatures(e.point, {
				layers: ['airports']
			});
			if (features && features.length > 0) {
				const airport = features[0];

				if (map) {
					map.getCanvas().style.cursor = 'pointer';

					const popup = new mapboxgl.Popup({ closeOnMove: false })
						.setLngLat(airport.geometry.coordinates)
						.setHTML(
							`<p class="popup">${airport.properties.name} (${airport.properties.identifier})</p>`
						)
						.addTo(map);

					map.flyTo({
						center: airport.geometry.coordinates,
						zoom: 10
					});
				}
			}
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
</script>

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<h1>Our Airports</h1>

<div class="map-container">
	<div id="map" class="map" />
</div>

<p>
	Welcome to our interactive map, a dynamic visual guide showcasing airports in and around Maine,
	with a special focus on those our members call home. This map is more than just a navigation aid;
	it's a community canvas, illustrating the places that connect us in our shared passion for
	aviation. Each pinpoint on this map is not just a location – it's a story, a journey, a part of
	our collective flying experience.
</p>

<p>
	If your home airport isn't highlighted yet, or if there's any update you'd like to share, we
	encourage you to let us know. Your contributions help make this map a richer and more accurate
	reflection of our vibrant community. Please feel free to update your airport information or reach
	out to me directly at <a href="mailto:brent@hangarflyingmaine.com">brent@hangarflyingmaine.com</a
	>. Together, we're not just charting airports; we're charting our connections to each other and
	the skies we love to explore.
</p>

<section class="map-key">
	<h5>Airport Map Key</h5>
	<div class="key-item">
		<div class="key-item-color home-airport" />
		<div class="key-item-label">Home airport</div>
	</div>
	<div class="key-item">
		<div class="key-item-color other-airport" />
		<div class="key-item-label">Other airport</div>
	</div>
</section>

<style lang="scss">
	.map-container {
		width: 100%;
		.map {
			width: 100%;
			aspect-ratio: 4/3;
			margin-top: 10px;
			border-radius: 5px;
			border: 1px solid #ccc;
			box-shadow: 0 0 5px #ccc;
			background: #fff;
			cursor: pointer;
			transition: all 0.3s;
			position: relative;
		}
	}

	.map-key {
		.key-item {
			display: flex;
			align-items: center;
			justify-content: left;
			margin-bottom: 10px;
			gap: 10px;

			.key-item-color {
				height: 15px;
				width: 15px;
				border-radius: 50%;

				&.home-airport {
					background: #ff00ff;
				}
				&.other-airport {
					background: #8cc63f;
				}
			}
		}
	}
</style>
