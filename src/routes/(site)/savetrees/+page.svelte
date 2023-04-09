<script>
    import Center from "../../../components/Center.svelte";
    import rec9 from "../../../imgs/Rectangle9.png";
    import rec10 from "../../../imgs/Rectangle10.png";
    import rec11 from "../../../imgs/Rectangle11.png";
    import rec12 from "../../../imgs/Rectangle12.png";
    import rec13 from "../../../imgs/Rectangle13.png";

    /*
    -inside this page I have some text and a component called Text
    -this component attempts to center anything found inside it's tags
    -components like this can be reused across your site making them useful
    -feel free to edit this component to make it better fit your needs
    */
  </script>
  
  <section id="latest">
    <ul>
      <li class="tree-items">
        <article>
          <img src={rec9} alt="rec">
          <div class="tree-items-container">
            <h2>
                HELP TREES
            </h2>
            <a href="https://www.greenamerica.org/save-trees" class="btn">Learn More</a>
          </div>
        </article>
      </li>
      <li class="tree-items">
        <article>
          <img src={rec10} alt="rec">
          <h2>
            HELP TREES
        </h2>
        <a href="https://shop.arborday.org/nursery?_gl=1*glm8yg*_ga*MTUyNDQxNDQwMi4xNjgwOTk4MTE5*_ga_S539C3X6HH*MTY4MTA2MzE2OC41LjEuMTY4MTA2MzQ4Mi42MC4wLjA." class="btn">Learn More</a>
        </article>
        </li>
        <li class="tree-items">
            <article>
              <img src= {rec11} alt="rec">
              <div class="tree-items-container">
                <h2>
                    HELP TREES
                </h2>
                <a href="https://www.edenprojects.org/" class="btn">Learn More</a>
              </div>
            </article>
            </li>
            <li class="tree-items">
                <article>
                  <img src={rec12} alt="rec">
                  <div class="tree-items-container">
                    <h2>
                        HELP TREES
                    </h2>
                    <a href="https://trees.org/" class="btn">Learn More</a>
                  </div>
                </article>
                </li>
            </ul>

</section>
    <section id="latest-section">
        <ul>
            <li class="tree-items">
                <article>
                    <img src={rec12} alt="rec">
                    <div class="tree-items-container">
                      <h2>
                          HELP TREES
                      </h2>
                      <a href="https://www.internationaltreefoundation.org/" class="btn">Learn More</a>
                    </div>
                  </article>
            </li>
            <li class="tree-items">
                <article>
                  <img src={rec13} alt="rec">
                  <div class="tree-items-container">
                    <h2>
                        HELP TREES
                    </h2>
                    <a href="https://www.treepeople.org/" class="btn">Learn More</a>
                  </div>
                </article>
            </li>
            <li class="tree-items">
                <article>
                  <img src={rec10} alt="rec">
                  <div class="tree-items-container">
                    <h2>
                        HELP TREES
                    </h2>
                    <a href="https://onetreeplanted.org/" class="btn">Learn More</a>
                  </div>
                </article>
            </li>
            <li class="tree-items">
                <article>
                  <img src={rec11} alt="rec">
                  <div class="tree-items-container">
                    <h2>
                        HELP TREES
                    </h2>
                    <a href="https://treeswaterpeople.org/" class="btn">Learn More</a>
                  </div>
                </article>
            </li>
        </ul>
    </section>



<style>
   #latest {
    display: flex;
    padding: 10rem 5rem 5;
    width: 30%;
    /* top right bottom left  */
    margin: 3rem 3rem 2rem 1em ;

}
   #latest ul {
   display: flex;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    gap: 1rem;
    margin: 0;
    white-space: pre-wrap;
    list-style: none;
    
   }
   #latest-section {
    display: flex;
    padding: 5rem 4rem 5;
    width: 30%;
    /* top right bottom left  */
    margin: 3rem 3rem 2rem 1rem ;
   }

   #latest-section ul {
   display: flex;
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    gap: 1rem;
    margin: 0;
    white-space: pre-wrap;
    list-style: none;
    
   }
  
   .tree-items {
    background-color: #D9D9D9;
    border-radius: 10px;
    border: #0d4d0f solid 5px;
    overflow: hidden;
    padding-bottom: 10px;
   }
    .tree-items img {
    height: 10rem ;
    width: 20rem;
    /* height: 100%; */
     object-fit: cover;
    }
    .tree-item h2 {
    margin: 0 0 1rem 0;
    color: #fff;
    }

    .tree-items-container{
        padding: 0.5rem;
        text-align: left;
    }
    .btn {
    background-color: #3C6255;
    color: white;
    /* border radius can be left in px  */
    border-radius: 4px;
    border: solid 1px #0d4d0f;
    padding: 0.5rem 1.5rem;
    transition: all 0.3s ease;
}

    .btn:hover {
        background-color: #0d4d0f;
        color: white;
        box-shadow: 2px 2px 5px #888888;
        transform: scale(1.1);
        
    }

  
</style>