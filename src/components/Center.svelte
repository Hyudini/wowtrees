<div class="text-center">
  <slot />
</div>

<section class="welcome-container">
  <div class="hero-content">
    <div class="text-container">
      <div class="text-1"> INSPIRING PEOPLE TO PLANT, NURTURE, LEARN, AND SAVE TREES.</div>
      
      <div class="box"> <a href="https://www.ecosia.org/"><button > Join Campaign </button> </a></div>
    </div>
  </div>
</section>
<style>
.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding:  10px;
}
  .welcome-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  text-align: right;
  margin-left: 20px;
}

.hero-content {
  
  align-items: center;
  justify-content: space-between;
  /* top right bottom left*/
  padding: -5rem 10rem 0rem 10rem;
  margin-top: -150px;
  margin-left: -100px;
  margin-right: 6rem;
  white-space: pre-line;
}


    
</style>


