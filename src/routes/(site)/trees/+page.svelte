<script>
    import { onMount } from "svelte";
    import { apiData, drinkNames } from './store.js';
    
    const options = {
	method: 'GET',
	headers: {
		Authorization: 'GKZOHNZj0xP65kk0BAE2Tl9LGagm0pfD3DFNxAEEZcMQBhRZVDco8vbNJdnwwCo0',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'plants2.p.rapidapi.com'
	}
    };

    onMount(async () => {
        fetch('https://plants2.p.rapidapi.com/api/plants?id=63ef4eb7476230641c4c0d62', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    });
    </script>
    
    <div class="trees">
        <h1>Trees</h1>
        <p>
            <input id="commonname">
            <br/>
            <button id="submit">submit</button>
        </p>
        <ul>
        {#each $drinkNames as drinkName}
            <li>{drinkName}</li>
        {/each}
        </ul>
    </div>


<style>
    .trees{
    color: #000000;
    font-size: x-large;
    font-weight: 500;
    }
</style>