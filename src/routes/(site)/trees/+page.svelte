<script lang="ts">
    import Center from "../../../components/Center.svelte";
    import growth from "../../../imgs/growth.png";
    import treesbg from "../../../imgs/Treespage1.png";

    // import { onMount } from 'svelte';
    // // import axios from 'axios';
    // let searchTerm = '';
    // let results: any[] = [];
    // // let results = [];
    // const options = {
    //   headers: {
    //     Authorization: 'GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0',
    //     'X-RapidAPI-Key': '9da831380emshb347c50d8eb3dfdp1572bejsncd79f183eb82',
    //     'X-RapidAPI-Host': 'plants2.p.rapidapi.com'
    //   }
    // };

    // async function searchPlants(searchTerm: string) {
    //     try {
    //         const url = new URL('https://plants2.p.rapidapi.com/api/plants');
    //         url.searchParams.set('CN',searchTerm);
    //         const response = await fetch(url,options);
           
    //         const plants = await response.json();
    //         console.log(plants);
    //         const results = plants.map(plant => {
    //         return {
    //             commonName: plant.common_name,
    //             scientificName: plant.scientific_name
    //         };
    //         });
    //         return results;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // onMount(async () => {
    //   results = await searchPlants(searchTerm);
    // });

  </script>
  

  <section>
    <div class="trees">
      <img src={treesbg} alt="tree">
      <div class="box">
        <h1>THE TREE GUIDE</h1>
        <p>
            We support the movement of making our planet a save place for future generations to live. 
            Through us we will educate young people and give them the opportunities to make an 
            impact by saving trees affected by different social crisis 
        </p>
        <a href="https://en.wikipedia.org/wiki/Category:Trees"><button > Search for Trees </button> </a>

        <!-- <button>SEARCH FOR TREES</button> -->
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
        color: rgba(0, 0, 0, 0.698);
        padding: 0;
        font-size: 1.5rem;
        

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
.box:hover {
      background-color: #ffffff8d;
      color: rgb(9, 1, 1);
      box-shadow: 2px 2px 5px #888888;
    }

.box button:hover {
    background-color: #0d4d0f;
    color: white;
    box-shadow: 2px 2px 5px #888888;
    transform: scale(1.1);
  }
    /*  */

   
</style>