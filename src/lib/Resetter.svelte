<script>
	import { count } from '../../src/stores';

	function reset() {
		count.set(0);
	}
</script>

<button on:click={reset}> reset </button>
