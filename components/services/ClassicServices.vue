<template>
 <section id="services">
                    <div class="grid-container">
                        <h1>Basement Problems?</h1>
                        <h2>We have the Solution</h2>
                        <div id="srv-grid">
                            <div class="service-item srv1">
                                <a href="/roof-replacement.html" title="Roof Replacement in Greater Front Range, Louisville, Parker, Arvada" alt="Roof Replacement in Greater Front Range, Louisville, Parker, Arvada">
                                    <div class="srv-icon"></div>
                                    <div class="srv-text">
                                        <p class="service-title">Basement Waterproofing</p>
                                        <p>We have the most effective solutions for wet basements.</p>
                                    </div>
                                </a>
                            </div>
                        
                            <div class="service-item srv2">
                                <a href="/roof-repair.html" title="Roof Repair in Greater Front Range, Louisville, Parker, Arvada" alt="Roof Repair in Greater Front Range, Louisville, Parker, Arvada">
                                    <div class="srv-icon"></div>
                                    <div class="srv-text">
                                        <p class="service-title">Crawl Space Repair</p>
                                        <p>We have the most effective solutions for wet basements.</p>
                                    </div>
                                </a>
                            </div>
                        
                            <div class="service-item srv3">
                                <a href="/commercial-roofing.html" title="Metal Roofing in Greater Front Range, Louisville, Parker, Arvada" alt="Metal Roofs in Greater Front Range, Louisville, Parker, Arvada">
                                    <div class="srv-icon"></div>
                                    <div class="srv-text">
                                        <p class="service-title">Sump Pump Installation</p>
                                        <p>We have the most effective solutions for wet basements.</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div id="srv-grid">
                          <div class="service-item srv4">
                              <a href="/roof-replacement.html" title="Roof Replacement in Greater Front Range, Louisville, Parker, Arvada" alt="Roof Replacement in Greater Front Range, Louisville, Parker, Arvada">
                                  <div class="srv-icon"></div>
                                  <div class="srv-text">
                                      <p class="service-title">Foundation Repair</p>
                                      <p>We have the most effective solutions for wet basements.</p>
                                  </div>
                              </a>
                          </div>
                      
                          <div class="service-item srv5">
                              <a href="/roof-repair.html" title="Roof Repair in Greater Front Range, Louisville, Parker, Arvada" alt="Roof Repair in Greater Front Range, Louisville, Parker, Arvada">
                                  <div class="srv-icon"></div>
                                  <div class="srv-text">
                                      <p class="service-title">Basement Finishing</p>
                                      <p>We have the most effective solutions for wet basements.</p>
                                  </div>
                              </a>
                          </div>
                      
                          <div class="service-item srv6">
                              <a href="/commercial-roofing.html" title="Metal Roofing in Greater Front Range, Louisville, Parker, Arvada" alt="Metal Roofs in Greater Front Range, Louisville, Parker, Arvada">
                                  <div class="srv-icon"></div>
                                  <div class="srv-text">
                                      <p class="service-title">Mold Problems</p>
                                      <p>We have the most effective solutions for wet basements.</p>
                                  </div>
                              </a>
                          </div>
                      </div>
                    </div>
                </section>
</template>

<script>
export default {

}
</script>

<style>
:root {
    /* Site colors */
    --primary-color:#19303e;
    --secondary-color:#399bb6;
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
/* Services */
    #services {
        padding:3rem 0;
        font-family:var(--site-spec-font);
        text-align:center;
    }
    #services h1 {
        color:var(--primary-color);
        font-size:2.5rem;
        font-weight:900;
        line-height:24px;
         
    }
    #services h2 {
        color:var(--secondary-color);
        font-style:italic;
        font-size:2rem;
    }
    #srv-grid {
        margin-top:40px;
        display:grid;
        grid-gap:1rem;
        grid-template-columns:repeat(3,
         1fr);
    }
    .service-item {
        text-align:center;
        position:relative;
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        overflow:hidden;
        height:210px;
        border-radius:5px;
        min-width:200px;
    }
    .service-item:before {
        content:'';
        position:absolute;
        bottom:-160px;
        left:0;
        height:210px;
        width:100%;
        background:-webkit-linear-gradient(top left,
         var(--secondary-color),
         var(--primary-color));
        background:linear-gradient(to bottom right,
         var(--secondary-color),
         var(--primary-color));
        opacity:0.9;
        transition:all 0.3s ease-out;
    }
    .service-item:hover:before {
        bottom:0;
        opacity:0.8;
    }
    .srv1 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/basement_waterproofing_service.jpg');
    }
    .srv2 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/crawl_space_installation_service.jpg');
    }
    .srv3 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/basement_installation_service.jpg');
    }
    .srv4 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/foundation_repair_service.jpg');
    }
    .srv5 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/basement_finishing_service.jpg');
    }
    .srv6 {
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/mold_service.jpg');
    }
    .srv-icon {
        position:absolute;
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/727/sass-logo.png');
        background-repeat:no-repeat;
        background-position:center;
        background-size:110px;
        width:100%;
        height:100px;
        top:20%;
        opacity:0.4;
        transition:all .3s ease-in-out;
    }
    .service-item:hover .srv-icon {
        opacity:0.7;
        top:5%;
    }
    .srv-text {
        position:relative;
        margin-top:170px;
        transition:all .3s ease-out;
    }
    .service-item:hover .srv-text {
        margin-top:105px;
    }
    .srv-text p {
        margin-bottom:0;
        font-size:14px;
        line-height:16px;
        color:#eee;
        padding:0 8px;
    }
    .srv-text p.service-title {
        font-size:18px;
        margin:0 auto 10px;
        line-height:30px;
        color:#fff;
        font-weight:bold;
    }
    #home-reviews {
        background-image:var(--reviews-homepage-bkg);
        background-size:cover;
    }
    #before-after {
        background-color:var(--primary-color);
    }
    #before-after a {
        color:var(--secondary-color);
    }
    #before-after .more-assets {
        font-family:var(--base-font);
        text-align:center;
        text-transform:uppercase;
        letter-spacing:1px;
        font-style:14px;
        font-weight:400;
        margin-top:0.5rem;
    }
    #home-reviews > div > h2 ,
    #before-after > div > h2 {
        font-weight:var(--site-spec-font);
        color:#fff;
        text-align:center;
        font-size:32px;
        font-weight:900;
    }
    #reviews-slider-ow .tns-ovh {
        margin:0 40px;
    }
    #reviews-slider-ow + p.more-assets {
        text-align:center;
        text-transform:uppercase;
        letter-spacing:1px;
        font-family:var(--base-font);
        font-style:14px;
        font-weight:400;
        margin-top:0.5rem;
    }
    .review_tile {
        text-align:center;
        height:200px;
        padding:2rem 1rem;
        box-shadow:0 2px 8px rgba(0,
        0,
        0,
        0.2);
        background:#fff;
        margin:1rem 0.5rem;
        border-radius:5px;
    }
    .review_customer,
    .review_location_date {
         display:inline;
    }
    /* Honest section */
    #honest {
        background-color:var(--tertiary-color);
    }
    .honest-sec h2 {
        font-family:var(--site-spec-font);
        font-size:36px;
        font-weight:bold;
        color:var(--primary-color);
        margin:0;
        line-height:38px;
    }
    .honest-sec h3 {
        font-family:var(--site-spec-font);
        font-size:28px;
        font-style:italic;
        color:var(--primary-color);
        margin-bottom:25px;
    }
    .honest-sec img {
        max-height:400px;
    }
    .service-link {
        position:relative;
        z-index:0;
        margin-bottom:25px;
        transition:all .3s ease-in-out;
    }
    /* .service-link:hover {
        transform:scale(1.06);
    }
    .service-link:hover h3 {
        color:#000;
        font-weight:600;
    }
    */
    .service-link img {
        width:100px;
    }
    .service-link:last-of-type {
        margin-bottom:0px;
    }
    .service-link p {
        padding:8px 15px;
        position:absolute;
        z-index:-1;
        left:20px;
        top:calc(50% - 2px);
        padding-left:30px;
        transform:translateY(-50%);
        font-size:20px;
        font-family:var(--base-font);
        transition:all .3s ease-in-out;
        color:#000;
    }
    .klaus-check {
        height:35px;
        width:35px;
        border-radius:50%;
        background:var(--secondary-color);
        background-image:url('https://cdn.treehouseinternetgroup.com/cms_images/2721/check-white.svg');
        background-size:23px;
        background-repeat:no-repeat;
        background-position:center;
    }
    .beer-slider {
        border-radius:5px;
    }
    .before-after-slides {
        margin:23px;
    }
    @media screen and (max-width:640px) {
        .honest-sec-text {
            margin:20px auto;
        }
        .beer-slider {
            margin:10px auto;
        }
        #srv-grid {
            display:block;
        }
    }
</style>