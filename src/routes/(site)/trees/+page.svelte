<script>
    import Center from "../../../components/Center.svelte";
    /*
    -inside this page I have some text and a component called Text
    -this component attempts to center anything found inside it's tags
    -components like this can be reused across your site making them useful
    -feel free to edit this component to make it better fit your needs
    */
  </script>
  

  <section>
    <div class="trees">
      <img src="src/routes/(site)/trees/Treespage1.png" alt="">
      <div class="box">
        <h1>THE TREE GUIDE</h1>
        <p>
            We support the movement of making our planet a save place for future generations to live. 
            Through us we will educate young people and give them the opportunities to make an 
            impact by saving trees affected by different social crisis 
        </p>
        <button>SEARCH FOR TREES</button>
      </div>
    </div>
  </section>



<style>
    .trees{
    position: relative;
    font-size: x-large;
    font-weight: 500;
    }

    .box {
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.282);
        padding: 30px;
        text-align: center;
		width: 300px;
		border: 1px solid #3C6255;
		border-radius: 2px;
        background: rgba(255, 255, 255, 0.328);
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 5em;
		margin: 2 0 1em 0;
	}
    .box h1 {
        font-size: 2em;
        text-align: center;
    }


    
    .box p {
        color: #ffffffb2;
        padding: 0;
        font-size: 1rem;
        

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
    /*  */

   
</style>