<script>
  import Main from "../components/Main.svelte";
  import Sliders from "../components/Sliders.svelte";
  import Events from "../components/Events.svelte";
  import NavBar from "../components/NavBar.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>

<NavBar />
<Main>

  <Sliders />
  <Events />
</Main>
