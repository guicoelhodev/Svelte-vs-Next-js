<script lang="ts">
  import { api } from "$lib/services/api";

  type TProps = {
    episdodesUrlLink: string[];
  };

  let props: TProps = $props();

  async function getEpisodesResponse() {
    let tmpEpisodesFetch = [];
    for (let episode of props.episdodesUrlLink) {
      const result = await api.getEpisode(episode);
      tmpEpisodesFetch.push(result);
    }
    return tmpEpisodesFetch;
  }

  let episodesResponse = $state(getEpisodesResponse());
</script>

<h4 class="mb-2 text-xl font-bold">Episodes</h4>

<ul class="flex flex-col gap-4 overflow-auto">
  {#await episodesResponse then epList}
    {#each epList as ep}
      <li class="border p-2 rounded-md text-sm">
        <article class="flex gap-2 justify-between items-start">
          <p class="text-base">Episode: {ep.name}</p>
          <p class="text-xs bg-green-700 text-white p-1 rounded-md">
            {ep.episode}
          </p>
        </article>
        <p>Air date: {ep.air_date}</p>
      </li>
    {/each}
  {/await}
</ul>
