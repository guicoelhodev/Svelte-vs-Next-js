<script lang="ts">
  import { api } from "$lib/services/api/index.js";
  import EpisodeList from "./EpisodeList.svelte";

  let { data } = $props();

  let characterData = $state(
    api.getSingleCharacter(`${api.endpoint}/character/${data.id}`),
  );
</script>

<div class="h-screen grid grid-cols-2 grid-rows-[12rem,1fr] flex-1 gap-4">
  <section class="border p-4 flex bg-white rounded-md">
    {#await characterData}
      <div class="flex self-center">
        <span class="w-32 h-32 aspect-square bg-neutral-200 rounded-full"
        ></span>
      </div>
    {:then c}
      <div class="flex flex-1 gap-4">
        <article class="self-center aspect-square">
          <img
            src={c.image}
            alt={c.image}
            class="w-32 aspect-square rounded-full"
          />
        </article>

        <section class="flex-1">
          <article
            class="flex-1 grid grid-cols-[repeat(auto-fit,minmax(1fr,10rem))]"
          >
            <div class="flex gap-2">
              <h2 class="text-2xl font-bold">{c.name}</h2>
            </div>
          </article>

          <article>
            <span>Gender: {c.gender}</span>
          </article>
        </section>
      </div>
    {:catch err}
      <p>{err.message}</p>
    {/await}
  </section>

  <section class="flex-1 bg-white p-4 rounded-md row-span-2 border">
    {#await characterData then c}
      <EpisodeList episdodesUrlLink={c.episode} />
    {/await}
  </section>
  <section class="bg-white p-4 rounded-md border">
    <article>1.2</article>
    <article>1.3</article>
  </section>
</div>
