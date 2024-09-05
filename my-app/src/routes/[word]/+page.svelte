<script lang="ts">
	import type { PageData } from '../$types';
	import Newwindow from '$lib/components/Newwindow.svelte';

	export let data: PageData;

	$: definition = data.definition[0];
	$: phonetic = definition.phonetics.find((p: any) => p.audio);

	const playAudio = () => {
		const audio = new Audio(phonetic.audio);
		audio.load();
		audio.play();
	};
</script>

<section class="sm:max-w-lg mt-6 sm:mt-11 mx-auto p-2">
	<div class="flex justify-between items-center">
		<div>
			<h1 class="text-[32px] sm:text-7xl font-bold sm:leading-[77px] mb-2" aria-label="word">
				{definition.word}
			</h1>

			<h2 class="text-2xl text-violet-500" aria-label="phonetic">{definition.phonetic ?? ''}</h2>
		</div>

		{#if phonetic}
			<button
				class="player h-12 w-12 sm:h-[75px] sm:w-[75px]
                    rounded-full
                    flex items-center justify-center
                    group
                    bg-purple-normal hover:bg-purple
                    transition-all duration-300"
				name="play"
				on:click={playAudio}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"
					><g
						class="group-hover:fill-white-100 transition-all duration-300"
						fill="#A445ED"
						fill-rule="evenodd"
						><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path d="M29 27v21l21-10.5z" /></g
					></svg
				>
			</button>
		{/if}
	</div>

	<ul>
		{#each definition.meanings as meaning}
			<li class="mt-8 sm:mt-10">
				<div
					class="py-3 flex items-center after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:after:border-neutral-600 italic text-lg sm:text-2xl font-bold mr-5"
					aria-label="part of speech"
				>
					{meaning.partOfSpeech}
				</div>

				<h4 class="text-white mt-4 mb-4 sm:mb-6 text-base sm:text-lg">Meaning</h4>

				<ul class="flex flex-col gap-3 ml-4 sm:ml-10 list-disc marker:text-purple-500 mb-4">
					{#each meaning.definitions as definition (definition.definition)}
						<li class="text-[15px] sm:text-lg">
							<span class="block" aria-label="definition">{definition.definition}</span>
							{#if definition.example}
								<span class="text-gray-400 mt-2 block" aria-label="example"
									>"{definition.example}"</span
								>
							{/if}
						</li>
					{/each}
				</ul>

				{#if meaning.synonyms}
					<div class="flex gap-6" aria-label="synonyms">
						<h4 class="text-white-400 text-base sm:text-lg">Synonyms</h4>
						<ul class="flex flex-wrap">
							{#each meaning.synonyms as synonym}
								<li aria-label="synonym">
									<a
										class="text-base sm:text-xl font-bold text-purple-500 cursor-pointer hover:underline hover:underline-offset-4 mr-2"
										href={synonym}>{synonym}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if meaning.antonyms}
					<div class="flex gap-6 mt-3" aria-label="antonyms">
						<h4 class="text-white-400 text-base sm:text-lg">Antonyms</h4>
						<ul class="flex flex-wrap">
							{#each meaning.antonyms as antonym}
								<li aria-label="antonym">
									<a
										class="text-base sm:text-xl font-bold text-purple-500 cursor-pointer hover:underline hover:underline-offset-4 mr-2"
										href={antonym}>{antonym}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</li>
		{/each}
	</ul>

	<hr class="h-0.5 bg-white-300 dark:bg-black-100 opacity-100 border-0 mt-8 sm:mt-10 mb-5" />
	<hr class="border-border mb-5 dark:border-border-dark mt-8 sm:mt-10 mb-5" />

	{#if definition.sourceUrls.length}
		<div class="flex flex-col sm:flex-row sm:mx-28" aria-label="source url">
			<h4 class="text-white-400 mb-1 sm:mr-6 underline underline-offset-2">Source</h4>
			<a
				href={definition.sourceUrls[0]}
				class="flex items-center underline underline-offset-2"
				target="_blank"
			>
				<span class="mr-2 text-sm text-black-200 dark:text-white-100 hover:underline"
					>{definition.sourceUrls[0]}</span
				>
				<Newwindow />
			</a>
		</div>
	{/if}
</section>
