<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { Sun, Moon } from 'lucide-svelte';
	
</script>

<button on:click={toggleMode}>
	{#if $mode === 'light'}
		<Sun class="size-4 text-slate-700" />
	{:else}
		<Moon class="size-4 text-slate-200" />
	{/if}
</button>
