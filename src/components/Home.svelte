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
  
<Center>
   
        <section class="welcome-container">
          <div class="hero-content">
            <img class = "g" src="src/routes/(site)/trees/g.png" alt="">
            <p>INSPIRING PEOPLE TO PLANT, NURTURE, LEARN, AND SAVE TREES</p>
            <div class="text-1"> INSPIRING PEOPLE TO PLANT, NURTURE, LEARN, AND SAVE TREES.</div> <br>
            <div class="container">
            </div>
          </div>
         
               <!-- <div class="text-2"> Welcome to FullyHacks 2023</div> <br> -->
               <!-- make picture show -->
             
               <!-- <div class="subtitle">   🔹 California State University, Fullerton 🔸  </div> -->
             </section>     
</Center>



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

  .hero-content p {
    align-items: right;
  }
  .text-1 {
    display: flex;
    flex-direction: column;
      font-size: 5rem;
      font-weight: 200;
      color:rgb(0, 0, 0);
      /* font-family: 'Courier New', Courier, monospace; */
  }
  .g{
    float: left;
    /* padding-top: 5px; */
    position: relative;
    margin: 0 5rem 10rem 0;
  margin-left: auto;
  margin-right: 0;
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