<script lang="ts">
	import Logo from './Logo.svelte';
	import Fontselector from './Fontselector.svelte';

	import Moon from './Moon.svelte';
	import Lightswitch from './Lightswitch.svelte';
</script>

<nav class="relative flex justify-between items-center md:px-32 md:m-10 m-5">
	<Logo />
	<div class="flex gap-x-2 md:gap-x-4 items-center">
		<Fontselector />

		<Lightswitch />
		<Moon />
	</div>
</nav>
