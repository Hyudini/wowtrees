<script lang="ts">
    import { onMount } from 'svelte';
    import axios from 'axios';
    let searchTerm = '';
    let results: any[] = [];
    // let results = [];
    async function searchPlants(searchTerm: string) {
        try {
            const response = await axios.get('https://trefle.io/api/v1/plants', {
            params: {
                q: searchTerm,
                token: '9da831380emshb347c50d8eb3dfdp1572bejsncd79f183eb82'
            }
            });
            const plants = response.data.data;
            const results = plants.map(plant => {
            return {
                commonName: plant.common_name,
                scientificName: plant.scientific_name
            };
            });
            return results;
        } catch (error) {
            console.error(error);
        }
    }

    onMount(async () => {
      results = await searchPlants(searchTerm);
    });
  </script>
  <form on:submit|preventDefault={async () => {
    results = await searchPlants(searchTerm);
  }}>
    <label for="searchTerm">Search:</label>
    <input type="text" id="searchTerm" bind:value={searchTerm}>
    <button type="submit">Go</button>
  </form>
  {#if results.length > 0}
  <ul>
    {#each results as result}
      <li>
        <h3>{result.commonName}</h3>
        <p>{result.scientificName}</p>
      </li>
    {/each}
  </ul>
{/if}

