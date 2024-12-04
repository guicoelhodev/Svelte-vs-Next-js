<script lang="ts">
  import { page } from "$app/stores";
  import { api } from "$lib/services/api/index.js";
  import EpisodeList from "./EpisodeList.svelte";
  import LocationDetails from "./LocationDetails.svelte";

  let id = $state($page.params.id);

  let characterData = $derived(
    api.getSingleCharacter(`${api.endpoint}/character/${id}`),
  );

  function handleIdCharacter(newId: string) {
    id = newId;
  }
</script>

<div class="h-screen grid grid-cols-2 grid-rows-[12rem,1fr] flex-1 gap-4">
  <section class="border p-4 flex bg-white rounded-md">
    {#await characterData}
      <div class="flex flex-1 gap-4">
        <article class="flex self-center">
          <span class="w-32 h-32 aspect-square bg-neutral-200 rounded-full"
          ></span>
        </article>

        <section class="flex flex-col flex-1 overflow-auto">
          <span class="h-8 rounded-md bg-neutral-200 w-full"></span>

          <ul class="flex flex-col gap-1 mt-4">
            <span class="h-4 rounded-md bg-neutral-200 w-full"></span>
            <span class="h-4 rounded-md bg-neutral-200 w-full"></span>
            <span class="h-4 rounded-md bg-neutral-200 w-full"></span>
          </ul>
        </section>
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

        <section class="flex-1 overflow-auto">
          <article
            class="flex-1 grid grid-cols-[repeat(auto-fit,minmax(1fr,10rem))]"
          >
            <div class="flex gap-2 items-center justify-between">
              <h2 class="text-2xl font-bold">{c.name}</h2>
              <a
                class="border border-green-600 text-green-600 p-2 rounded-full"
                aria-label="Go back"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"
                  /></svg
                >
              </a>
            </div>
          </article>

          <article class="flex flex-col pt-2">
            <span>gender: {c.gender}</span>
            <span>specie: {c.species}</span>
            <span>origin: {c.origin.name}</span>
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
    {#await characterData then c}
      <LocationDetails {...c.location} handleCharacterId={handleIdCharacter} />
    {/await}
  </section>
</div>
