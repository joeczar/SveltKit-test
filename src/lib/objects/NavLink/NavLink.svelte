<script lang="ts">
	export let url: string;
	export let text: string;
</script>

<li>
	<a
		class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
		href={url}>{text}</a
	>
</li>
