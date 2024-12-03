<script lang="ts">
	import Character from './Character.svelte';

	let { data } = $props();

	let characters = $state(data.results);
</script>

<ul
	class="grid w-full grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4 rounded-md border p-4 md:grid-cols-2 lg:grid-cols-3"
>
	{#each characters as character}
		<Character {...character} />
	{/each}
</ul>
