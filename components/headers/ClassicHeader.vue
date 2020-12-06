<template>
  <div>
    <header id="header">
                <div class="grid-container">
                    <div id="header-grid">
                        <div id="logo">
                            <a href="/">
                                <img src="https://cdn.treehouseinternetgroup.com/cms_images/727/sass-logo-200px.png" alt="">
                            </a>
                        </div>
                        <div id="menu-icon-wrap">
                            <a class="menu-icon" data-pushbar-target="mobile-nav">
                                <span></span><span></span><span></span>
                            </a>
                        </div>
                        <div id="header-service-area">
                            <p>Serving Greater New Haven &amp; Western CT<span class="show-for-large">, Wolcott, Cheshire, Prospect, Naugatuck</span></p>
                        </div>
                        <div id="phone-wrap">
                            <div class="opensign"><span>open</span></div>
                            <div id="phone">1-800-640-1500</div>
                        </div>
                        <div id="header-btn"><a class="button">Contact Us Online</a></div>
                        <div id="nav-bar">
                            <div id="nav-menu">
                            <div class="nav-item has-dropdown">
                                <a href="#" class="super-toggle">Services</a>
                                <ul class="super-content">
                                <li><a href="#0">One</a></li>
                                <li><a href="#0">Two</a></li>
                                <li><a href="#0">Three</a></li>
                                </ul>
                            </div>
                            <div class="nav-item has-dropdown">
                                <a href="#0" class="super-toggle">About Us</a>
                                <ul class="super-content"><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/refer-give-to-get.html">Refer - Give To Get</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/fix-it-to-list-it-realtor-division.html">Fix It To List It Realtor Division</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/qa.html">Q&amp;A</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/testimonials.html">Testimonials</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/news-and-events.html">Blog</a></li><li class="active expanded ancestor "><a href="https://www.connecticutbasementsystems.com/about-us/meet-the-team.html">Meet The Team</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/reviews.html">Reviews</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/career-opportunities.html">Career Opportunities</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/before-after.html">Before &amp; After</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/photo-gallery.html">Photo Gallery</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/financing.html">Financing</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/awards.html">Company Awards</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/service.html">Service Department</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/case-studies.html">Case Studies</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/press-release.html">Press Release</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/affiliations.html">Affiliations</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/pro-partners.html">Pro Partners</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/technical-papers.html">Technical Papers</a></li><li class=""><a href="https://www.connecticutbasementsystems.com/about-us/videos.html">Videos</a></li></ul>
                            </div>
                            <div class="nav-item"><a href="#0">Our Work</a></div>
                            <div class="nav-item"><a href="#0">Service Area</a></div>
                            <div class="nav-item"><a href="#0">Free Estimate</a></div>
                            </div>
                        </div>
                    </div><!-- /#header-grid -->
                </div>
            </header>
  </div>
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
}
/* ==================== Header Layout ==================== */
#header {
    background-color:#fff;
    color: var(--secondary-color);
    padding-top: .75rem;
}
#nav-bar {
    background-color: #fff;
}
#phone-wrap .opensign {
    background: var(--secondary-color);
}
.button {
    background-color: var(--secondary-color);
}
/* Logo */
#logo {
    grid-area: head-logo;
}
/* Service Area */
#header-service-area {
    grid-area: head-service;
}
#header-service-area p {
    font-size:14px;
    text-align: right;
}

/* Phone & button boxes */
#phone-wrap {
    grid-area: head-phone;
    text-align: center;
}
#phone {
    font-size: 20px;
}
#phone-wrap .opensign span {
    font: 400 14px/100% sans-serif;
}

#header-btn {
    grid-area: head-button;
    text-align: right;
}
@media screen and (min-width:520px) {
    #phone-wrap {
        text-align: right;
    }
}
@media screen and (min-width:768px) {
    #phone {
        font-size: 32px;
    }
}
/*  Navigation  */
#menu-icon-wrap {
    grid-area: head-icon;
    text-align: right;
}
#nav-bar {
    grid-area: head-nav;
}

/* Grid Settings */
#header-grid {
    display:grid;
    align-items: center;
    grid-template-columns: 2fr 2fr 2fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    grid-template-areas:
        "head-logo head-logo head-logo head-icon"
        "head-phone head-phone head-phone head-phone";
}
@media screen and (max-width: 1024px) {
    #header-service-area, #nav-bar, #header-btn {
        display: none;
    }
}
@media screen and (min-width: 520px) {
    #header-grid {
        grid-template-areas:
            "head-logo head-phone head-phone head-icon";
    }
}
@media screen and (min-width: 1025px) {
    #menu-icon-wrap { display: none; }
    #header-grid {
        grid-template-areas:
            "head-logo head-service head-service head-service"
            "head-logo head-phone head-phone head-phone"
            "head-logo . head-button head-button"
            "head-nav head-nav head-nav head-nav";
    }
    #header.fixed-head #header-grid {
        grid-template-areas:
            "head-logo head-phone head-phone head-button"
            "head-nav head-nav head-nav head-nav";
    }
    #header.fixed-head #logo svg {
        height: 50px;
        width: auto;
    }
    #header.fixed-head #header-service-area {
        display: none;
    }
}
</style>