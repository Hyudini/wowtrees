
<script>
  import { onMount } from "svelte";

  // Show mobile icon and display menu
  let showMobileMenu = false;
  // List of navigation items, add more here if you make more pages :D
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Trees", href: "/trees" },
    { label: "About", href: "/about" },
    { label: "SaveTrees", href: "/savetrees"}

  ];

  // Mobile menu click event handler
  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  // Media match query handler
  const mediaQueryHandler = (/** @type {{ matches: any; }} */ e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 767px)");

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="inner">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
    <div class="title"><p>WOWTREES</p></div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
:root {
  --navheight: 50px;     /* navbar-list.mobile*/

}
  nav {
    background-color: #94B49F;
    font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height: var(--navheight);
  }

  .inner {
    max-width: 25rem;
    padding: 15px 60px ;
    
    /* padding-left: 20px;
    padding-right: 20px; */
    margin: 0 5rem 5rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  } 

  .title {
    text-align: left;
    padding-right: 20px;
    padding-left: 20px
    
  }
  .title p {
    display: flex;
    padding: 10px;
    font-size: 1.5rem;
    align-items: flex-end;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #94B49F;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: #8d8a8a9d;
    position: fixed;
    display: block;
    height: calc(100% - var(--navheight));
    bottom: 0;
    left: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
   
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #94B49F;
;
  }

  .navbar-list a {
    
    color: #000000;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: large;
    font-weight: 500;

  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>