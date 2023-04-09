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
  <div>
   <img class="hero-content" src="src/routes/(site)/trees/g.png" alt="">
  </div>

  <section class="welcome-container">
    <div class="text-container">
      
      <div class="text-1"> INSPIRING PEOPLE TO PLANT, NURTURE, LEARN, AND SAVE TREES.</div>
      <div class="box"> <a href="https://www.ecosia.org/"><button > Join Campaign </button> </a></div>
    </div>
</section>
 

<style>
  .welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -100px;
  margin-left: 6rem;
  white-space: pre-line; 
}

.text-container {
  display: grid;
  width: 540px;
  grid-template-columns: 120px -1000px 120px;
  align-items: start;
  justify-content: right;
}

.hero-content {
  position: fixed; 
  left:0px;
  top:5px;
  width:35%;
}

/* .welcome-container {
      position: relative;
      max-width: fit-content;
      line-height: 4rem;
      margin: 0;
      top: 10rem;
      padding:0;
      
  } 
  */
  .text-1 {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 200;
  color: rgb(0, 0, 0);
  justify-content: center; /* Center vertically */
  align-items: flex-end; /* Align to the right */
  height: 100%; /* Set height to 100% to take up full height of parent */
  font-family:  'Lucida Sans';
}
button {
  transition: all 0.3s ease;
}
.box button {
  background-color: #3C6255;
  color: #fff;
  border: 3px solid #15362B;
  border-radius: 5px; /* changed from 25rem to 25px */
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}
.box button:hover {
  background-color: #0d4d0f;
  color: white;
  box-shadow: 2px 2px 5px #888888;
  transform: scale(1.1);
}

  .g {
    float: left;
    margin-top: -50px;
    /* vertical-align: top; */
    position: relative;
    margin: 0 10rem 10rem 0;
    margin-left: auto;
    margin-right: 0;
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