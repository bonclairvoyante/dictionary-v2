<script lang="ts">
	import { slide } from 'svelte/transition';
	import Arrowdown from './Arrowdown.svelte';
	let isOpen = false;

	function clickHandler() {
		isOpen = !isOpen;
	}
</script>

<button on:click={clickHandler}>Fonts </button>
<Arrowdown />
<hr class="h-6 w-[1px] bg-zinc-300 dark:bg-zinc-100" />
{#if isOpen}
	<ul transition:slide class="list-none block absolute top-12 flex flex-col gap-2">
		<button class="hover:bg-zinc-200 rounded-lg px-1">Sans</button>
		<button class="hover:bg-zinc-200 rounded-lg px-1">Sans-Serif</button>
		<button class="hover:bg-zinc-200 rounded-lg px-1">Mono</button>
	</ul>
{/if}
