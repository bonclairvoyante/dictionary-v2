<script lang="ts">
	import SearchIcon from "./SearchIcon.svelte";
    let word = '';
	let empty = false;
</script>

<section>
	<div class="flex justify-center items-center pt-32">
		<form
			on:submit={(e) => {
				if (!word) {
					e.preventDefault();
					empty = true;
				}
			}}
			action="/{word}"
			class="relative p-3 w-full max-w-lg text-base"
		>
			<!-- Use CSS for form validation -->
			<div class=" space-y-3">
				<!-- Floating Input -->
				<div class="relative">
					<input
						type="text"
						id="hs-floating-input-text"
						class="peer p-5 block w-full rounded-lg text-sm bg-zinc-200 dark:bg-neutral-600 placeholder:text-transparent disabled:pointer-events-none border border-transparent hover:border-purple-500 focus-within:border-purple-500
    focus:pb-4
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
						placeholder="Search Word" required
                        bind:value={word}
					/>
					<label
						for="hs-floating-input-text"
						class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] text-zinc-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
						>Search Word</label
					>
				</div>

				<button type="submit" class="absolute right-4 focus:pb-4 top-4 w-6 h-8">
					<SearchIcon />
				</button>
			</div>
		</form>
	</div>
</section>


