<script>
	import { count } from '../../src/stores';

	function increment() {
		count.update((n) => n + 1);
	}
</script>

<button on:click={increment}> + </button>
