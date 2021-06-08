<script lang="ts">
	import type { Theme } from 'src/global';
	import type { Writable } from 'svelte/store';
	import { Hamburger } from '../objects/hamburger';
	import NavLinkList from '../objects/NavLinkList';
	import NavLink from '../objects/NavLink';

	export let theme: Writable<Theme>;
</script>

<nav id="header" class="base w-full z-30top-10 py-1 bg-white shadow-lg border-b border-blue-400">
	<div class="w-full flex items-center justify-between mt-0 px-6 py-2">
		<Hamburger />

		<div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
			<NavLinkList>
				<NavLink url="/about" text="About" />
			</NavLinkList>
		</div>

		<div
			class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
			id="nav-content"
		>
			<div class="auth flex items-center w-full md:w-full">
				<h1>Theme: {$theme}</h1>

				<button on:click={() => theme.set('light')}> light </button>
				<button on:click={() => theme.set('dark')}> dark </button>

				<button
					class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
					>Sign in</button
				>
				<button
					class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
					>Sign up</button
				>
			</div>
		</div>
	</div>
</nav>
