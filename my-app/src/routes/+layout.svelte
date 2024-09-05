<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});
	
</script>

<ModeWatcher />
<Header />
<SearchInput />
<slot />