<script>
   
import NavBar from "../components/NavBar.svelte"; 
import Footer from "../components/Footer.svelte";
</script>
  
  <NavBar />
  <main class="nav">
    <slot />
    <Footer/>
  </main>

  <style>
    .nav
    {
      padding-top: 4rem;
    }
  </style>
  
