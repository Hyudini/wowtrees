<script>
    import Center from "../../../components/Center.svelte";
    import weirdshape1 from "../../../imgs/weirdshape1.png";
    import adam from "../../../imgs/adam.png";
    import jo from "../../../imgs/jo.png";
    import ola from "../../../imgs/ola.png";
    import weirdshape2 from "../../../imgs/Group 3.png";
    import ourvision from "../../../imgs/Our Vision.png";



    /*
    -inside this page I have some text and a component called Text
    -this component attempts to center anything found inside it's tags
    -components like this can be reused across your site making them useful
    -feel free to edit this component to make it better fit your needs
    */
  </script>


    <!-- <div class="sadge"> -->
    <div class="sadge">
        <div class="topist">
            <img alt="weirdshape" src={weirdshape2}/>
        </div>
        <br/>
        <div class="huh">
            <div class="ourvision">
                <img alt="vision" src={ourvision}/>
                <br/>
                We support the movement of making our planet a save place for future generations to live. Through us we will educate young people and give them the opportunities to make an impact by saving trees affected by different social crisis.
            </div>
            <br/>
            <div class= "team"> 
                Our Team
                <div class="pics">
                    <img alt="adam" src={adam}/>
                        <ul>Developer</ul>
                    <img alt="jo" src={jo}/>
                        <ul>Developer</ul>

                    <img alt="ola" src={ola}/>
                        <ul>UI/UX Designer/Developer</ul>

                </div>
            </div> 
        </div>
    </div>

<style>
    .sadge{
        display: flex;
    }
    .huh{
        display:flex;
        width:fit-content;  
    }
    .topist{
        max-width: 25rem;
        position:fixed;
        /* padding-right:2000px ; */
        margin: auto;
        box-sizing: border-box;
        /* display: flex; */
        align-items: center;
        height: 100%;
    }
    
    .ourvision{
        text-align: right;
        font-family: 'Lucida Sans';
        /* padding-top: 400px;
        padding-right: 200px; */
        width: 70%;
        padding-left: 500px;
        font-size: 50px;
    }
    img[alt~="weirdshape"] {
        padding: .2rem;
        background-position:left;
    }
    .team{
        color: #000000;
        font-size: 30px;
        font-weight: 500;
        margin-left: -15px;
    }
    .pics{
        align-items: right;
        width: 100%;
    }
</style>