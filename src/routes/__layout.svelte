<!--  src/routes/$layout.svelte -->
<script lang="ts">
	import '../tailwind.css';
	import { theme } from '../lib/stores';
	import { onDestroy } from 'svelte';
	import { browser } from '$app/env';

	import { onMount } from 'svelte';
	import Nav from '$lib/nav/nav.svelte';
	import type { Theme } from 'src/global';

	const unsubscribe = theme.subscribe(function (value) {
		console.log('unsubscribe');
		if (browser) {
			console.log('unsubscribe browser');
			localStorage.setItem('theme', value);
		}
	});

	onMount(() => {
		console.log($theme);
	});
	// $: theme;

	onDestroy(unsubscribe);
</script>

<div class={$theme + ` site-wrapper h-screen flex-col items-center`}>
	<header>
		<Nav {theme} />
	</header>
	<main class="base flex-col items-center h-full">
		<slot />
	</main>
</div>
