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
</style>
