<script>
  import EventCard from "./EventCard.svelte";

  import { onMount } from "svelte";
  let events = [];
  //let url = "https://noticias-eventos.herokuapp.com/eventos";
  let url = "http://localhost:3000/eventos";

  onMount(async () => {
    const response = await fetch(url);
    events = await response.json();
  });
</script>

<style>
  .Events {
    margin: 0 15% 0 15%;
  }
  .Events-container {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="Events">
  <div class="Events-container">

    {#each events as item}
      <div>
        <EventCard {...item} />
      </div>
    {:else}
      <p>Loading...</p>
    {/each}

  </div>
</div>
