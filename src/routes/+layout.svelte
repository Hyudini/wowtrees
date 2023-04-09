<script>
   
import NavBar from "../components/NavBar.svelte"; 
import Trees from "../components/Trees.svelte";
</script>
  
  <NavBar />
  <main class="nav">
    <slot />
    <trees />
  </main>

  <style>
    .nav
    {
      padding-top: 4rem;
    }
  </style>
  
