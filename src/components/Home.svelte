<script>
        import Center from "./Center.svelte";
        import grow from "../imgs/growth.png";

    /*
    -inside this page I have some text and a component called Text
    -this component tries to center anything found inside it's tags
    -components like this can be reused across your site
    -feel free to edit this component to make it better fit your needs
    */
  </script>
  

  
  <section class="welcome-container">
    <div class="dispic">
      <img alt="grow" src={grow}/>
    </div>
    <div class="text-2"> INSPIRING PEOPLE TO PLANT, NURTURE, LEARN, AND SAVE TREES. </div> <br>
  </section>     



<style>


    .welcome-container {
      display:flex;
      position: relative;
      align-items: center;
      max-width: fit-content;
      line-height: 2rem;
      margin: 0;
      top: 4rem;
      padding:0;
      
  }
 
  .dispic{
    max-height: 500px;
  }
 .text-2{
  font-size: 4rem;  
  font-style: italic;
  font-weight: 200;
  line-height: 3rem;
  color:rgb(0, 0, 0);
  align-content: center;
 }    
 
  .subtitle {
     font-size: 1.8rem;
    font-weight: 200;
    color:rgb(0, 0, 0);
    
  }
</style>