<script lang="ts">
  import { api } from "$lib/services/api";

  type Props = { name: string; url: string };

  let { name, url }: Props = $props();
  let locationData = $state(getResidentsData());

  async function getResidentsData() {
    const locationResponse = await api.getLocation(url);
    let tmpCharacters = [];

    for (const resident of locationResponse.residents) {
      const responseCharacter = await api.getSingleCharacter(resident);
      tmpCharacters.push(responseCharacter);
    }

    return {
      ...locationResponse,
      residents: tmpCharacters,
    };
  }

  const skeletonList = Array.from({ length: 32 });
</script>

<h4 class="mb-2 text-xl font-bold">Location details of {name}</h4>

<section class="flex flex-col gap-4">
  <h5 class="text-center text-xl font-bold">Residents</h5>
  <ul class="grid grid-cols-4 gap-4">
    {#await locationData}
      {#each skeletonList as _}
        <span class="aspect-square size-full rounded-full bg-gray-200"></span>
      {/each}
    {:then locationData}
      {#each locationData.residents as r}
        <li>
          <a href="/characters/{r.id}">
            <img
              class="aspect-square size-full rounded-full bg-gray-200"
              src={r.image}
              alt={r.name}
            />
          </a>
        </li>
      {/each}
    {/await}
  </ul>
</section>
