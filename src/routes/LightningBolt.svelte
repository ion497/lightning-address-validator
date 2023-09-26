<script lang="ts">  
	import { onMount } from 'svelte';
	import { createScene } from '$lib/LightningBoltScene';

	let el:HTMLCanvasElement;

	onMount(() => {
		createScene(el);
	});
</script>

<canvas bind:this={el} />