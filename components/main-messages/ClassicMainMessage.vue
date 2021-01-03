<template>
<div>
  <div id="main-message">
        <div class="slide" style="background-image: url('https://cdn.treehouseinternetgroup.com/cms_images/727/sass-slide-1.jpg');">
            <div class="grid-container">
                <div class="main-text">
                    <p class="main-subtitle">WE ARE YOUR LOCAL EXPERT FOR</p>
                    <p class="main-title">Basement Waterproofing</p>
                    <a class="button large hvr-float" href="#">Schedule a Free Estimate</a>
                </div>
            </div>
        </div>
        <div class="slide" style="background-image: url('https://cdn.treehouseinternetgroup.com/cms_images/727/sass-slide-1.jpg');">
            <div class="grid-container">
                <div class="main-text">
                <p class="main-subtitle">WE ARE YOUR LOCAL EXPERT FOR</p>
                <p class="main-title">Basement Waterproofing</p>
                <a class="button large hvr-float" href="#">Schedule a Free Estimate</a>
                </div>
            </div>
        </div>
        <div class="slide" style="background-image: url('https://cdn.treehouseinternetgroup.com/cms_images/727/sass-slide-1.jpg');">
        <div class="grid-container">
            <div class="main-text">
                <p class="main-subtitle">WE ARE YOUR LOCAL EXPERT FOR</p>
                <p class="main-title">Basement Waterproofing</p>
                <a class="button large hvr-float" href="#">Schedule a Free Estimate</a>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>

export default {

}
</script>

<style>
:root {
    /* Site colors */
    --primary-color:#000;
    --secondary-color:#494949;
    --tertiary-color:#e0f7ff;
    --quaternary-color:#f9f9f9;
    /* Section backgrounds */
    --main-message-bkg-gradient:linear-gradient(to bottom,
     var(--secondary-color),
     hsl(0deg 0% 100% / 60%));
    --reviews-homepage-bkg:linear-gradient(to bottom,
     var(--secondary-color),
     hsl(0deg 0% 100% / 60%)),
     url('https://cdn.treehouseinternetgroup.com/cms_images/727/reviews-bkg.jpg');
    --about-us-silo-bkg:linear-gradient(to bottom,
     var(--secondary-color),
     hsl(0deg 0% 100% / 60%)),
     url('https://cdn.treehouseinternetgroup.com/cms_images/727/drypro-about-us-silo.jpg');
    /* Fonts */
    --base-font:'Noto Sans',
     sans-serif;
    --site-spec-font:'proxima-nova',
     sans-serif;
}
 /* ============================== Main Message ============================== */
    #main-message {
        height:500px;
        position:relative;
        overflow:hidden;
    }
    #main-message .slide {
        height:100%;
        width:100%;
        background-size:cover;
        background-position:center;
        position:relative;
    }
    #main-message .slide::before {
        content:'';
        display:block;
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0.6;
        background:var(--main-message-bkg-gradient);
    }
    #main-message .grid-container {
        text-align:center;
        /* -webkit-box-pack:start;
        -ms-flex-pack:start;
        justify-content:flex-start;
         */
    }
    .main-text {
        padding:3rem 4rem;
        background-color:var(--primary-color);
    }
    .main-text .button {
        background-color:var(--secondary-color);
    }
    .main-title,
    .main-subtitle {
        margin-bottom:0;
        color:#fff;
        text-shadow:1px 1px #000;
        font-size:20px;
    }
    .main-title {
        font-family:var(--site-spec-font);
        font-size:36px;
        font-weight:bold;
        margin-bottom:20px;
    }
    /* Main Message Slider */
    #main-message-ow .tns-nav {
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        z-index:10;
        padding:1rem 0;
    }
    #main-message-ow .tns-nav button {
        width:20px;
        height:20px;
        background-color:rgba(25,
        48,
        62,
        0.75);
        box-shadow:0 2px 8px rgba(25,
        48,
        62,
        0.75);
        position:relative;
        transition:background-color 0.25s;
    }
    #main-message-ow .tns-nav button.tns-nav-active {
        background-color:var(--secondary-color);
    }
    #main-message-ow .tns-nav button::before {
        content:'';
        position:absolute;
        width:18px;
        height:18px;
        top:50%;
        left:50%;
        transform:translate(-50%,
         -50%);
        background-color:#fff;
        opacity:0.3;
        border-radius:50%;
        z-index:-1;
        transition:all 0.5s cubic-bezier(.6,
         2,
         .6,
         1);
    }
    #main-message-ow .tns-nav button.tns-nav-active::before {
        width:26px;
        height:26px;
    }
    /* Slider Arrows */
    #main-message-ow .tns-controls button {
        width:50px;
        height:100%;
    }
    #main-message-ow .tns-controls button:hover {
        background-image:-webkit-linear-gradient(left,
         rgba(0,
        0,
        0,
        0.2),
         transparent);
        background-image:linear-gradient(to right,
         rgba(0,
        0,
        0,
        0.2),
         transparent);
    }
    #main-message-ow .tns-controls button::before {
        width:50px;
        height:50px;
        line-height:50px;
        font-size:35px;
        color:var(--secondary-color);
        background-color:var(--primary-color);
        border-radius:0 50px 50px 0;
    }
    /* Float */
    .hvr-float {
        display:inline-block;
        vertical-align:middle;
        -webkit-transform:perspective(1px) translateZ(0);
        transform:perspective(1px) translateZ(0);
        box-shadow:0 0 1px rgba(0,
         0,
         0,
         0);
        -webkit-transition-duration:0.3s;
        transition-duration:0.3s;
        -webkit-transition-property:transform;
        transition-property:transform;
        -webkit-transition-timing-function:ease-out;
        transition-timing-function:ease-out;
    }
    .hvr-float:hover,
     .hvr-float:focus,
     .hvr-float:active {
        -webkit-transform:translateY(-8px);
        transform:translateY(-8px);
    }
</style>