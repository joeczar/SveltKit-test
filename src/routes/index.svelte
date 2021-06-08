<script>
	import { count } from '../lib/stores';
	import Incrementer from '$lib/Incrementer.svelte';
	import Decrementer from '$lib/Decrementer.svelte';
	import Resetter from '$lib/Resetter.svelte';

	let count_value;

	const unsubscribe = count.subscribe((value) => {
		count_value = value;
	});
</script>

<div class="counter flex-col justify-center">
	<h1>The count is {count_value}</h1>

	<Incrementer />
	<Decrementer />
	<Resetter />
</div>
