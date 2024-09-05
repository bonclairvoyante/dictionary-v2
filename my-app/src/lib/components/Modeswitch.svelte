<script lang="ts">
	import { toggleMode } from 'mode-watcher';
</script>

<button on:click={toggleMode}>
	<input
		class="relative w-[2.8rem] h-6 bg-gray-100 checked:bg-none checked:bg-none border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent dark:focus:border-purple-500 focus:ring-zinc-500 focus:outline-none appearance-none dark:bg-purple-500

before:inline-block before:size-5 before:bg-white checked:before:bg-zinc-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200

after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto"
		type="checkbox"
		id="darkSwitch"
	/>
</button>
