<template>
  <div>
    <header
      id="header"
      style="
        box-shadow: rgb(34, 34, 34) 0px -52px inset,
          rgba(0, 0, 0, 0.2) 0px 2px 10px;
      "
    >
      <div class="grid-container">
        <div id="header-grid">
          <div id="logo">
            <a href="/">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 286 102.02"
              >
                <defs>
                  <style>
                    .cls-1 {
                      font-size: 47px;
                      font-family: Helvetica-Light, Helvetica;
                      font-weight: 300;
                    }
                    .cls-2 {
                      font-size: 45px;
                      font-family: Helvetica-Bold, Helvetica;
                      font-weight: 700;
                    }
                    .cls-3 {
                      letter-spacing: -0.07em;
                    }
                  </style>
                </defs>
                <text class="cls-1" transform="translate(79.78 40.37)">
                  CUSTOM
                  <tspan class="cls-2">
                    <tspan class="cls-3" x="2.1" y="40">T</tspan>
                    <tspan x="26.27" y="40">emplate</tspan>
                  </tspan>
                </text>
                <path
                  d="M55.11,18V50.89H88V18H55.11M14,92H46.89V59.11H14V92m0-74V50.89H46.89V18H14M55.11,71.44H67.44V59.11h8.23V71.44H88v8.23H75.67V92H67.44V79.67H55.11Z"
                  transform="translate(-14 -11.6)"
                />
              </svg>
            </a>
          </div>
          <div id="menu-icon-wrap">
            <a class="menu-icon" data-pushbar-target="mobile-nav">
              <span></span><span></span><span></span>
            </a>
          </div>
          <div id="header-service-area">
            <p>
              Serving Greater New Haven &amp; Western CT<span
                class="show-for-large"
                >, Wolcott, Cheshire, Prospect, Naugatuck</span
              >
            </p>
          </div>
          <div id="phone-wrap">
            <div class="opensign"><span>open</span></div>
            <div id="phone">1-800-640-1500</div>
          </div>
          <div id="header-btn"><a class="button">Contact Us Online</a></div>
          <div id="nav-bar">
            <!-- SUPER NAV TOOL - Main Menu -->
            <nav id="nav-menu">
              <div class="nav-item has-dropdown mega">
                <a href="#"><span>Services</span></a>
                <ul class="dropdown">
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/roof-repair.html"
                      >Roof Repair</a
                    >
                    <ul class="submenu">
                      <li>
                        <a
                          href="http://devtest151.basementsite.com/roof-repair/roof-leak-repair.html"
                          >Roof Leak Repair</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://devtest151.basementsite.com/roof-repair/emergency-roof-repair.html"
                          >Emergency Repair</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://devtest151.basementsite.com/roof-repair/hail-damage-roof-repair.html"
                          >Hail Damage Repair</a
                        >
                      </li>
                    </ul>
                </li>
                </ul>
              </div>
              <div class="nav-item has-dropdown">
                <a href="#"><span>Our Work</span></a>
                <ul class="dropdown">
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/about-us/case-studies.html"
                      >Case Studies</a
                    >
                    <ul class="submenu"></ul>
                  </li>
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/about-us/videos.html"
                      >Videos</a
                    >
                    <ul class="submenu"></ul>
                  </li>
                </ul>
              </div>
              <div class="nav-item has-dropdown">
                <a href="http://devtest151.basementsite.com/about-us.html"
                  ><span>About Us</span></a
                >
                <ul class="dropdown">
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/about-us/press-release.html"
                      >Press Release</a
                    >
                    <ul class="submenu"></ul>
                  </li>
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/about-us/news-and-events.html"
                      >Blog</a
                    >
                    <ul class="submenu"></ul>
                  </li>
                  <li>
                    <a
                      href="http://devtest151.basementsite.com/about-us/our-story.html"
                      >Our Story</a
                    >
                    <ul class="submenu"></ul>
                  </li>
                </ul>
              </div>
              <div class="nav-item">
                <a href="http://devtest151.basementsite.com/service-area.html"
                  >Service Area</a
                >
              </div>
              <div class="nav-item quote">
                <a href="http://devtest151.basementsite.com/free-estimate.html"
                  >Free Estimate</a
                >
              </div>
            </nav>
            <!-- END SUPER NAV TOOL -->
          </div>
        </div>
        <!-- /#header-grid -->
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
:root {
  /* Site colors */
  --primary-color: #000;
  --secondary-color: #494949;
  --tertiary-color: #fff;
}
/* ==================== Header Layout ==================== */
/* Logo */
#header {
  background-color: #fff;
  color: var(--secondary-color);
  padding-top: 0.75rem;
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
  font-size: 14px;
  text-align: right;
}
/* Contact Bar */
#header-btn {
  grid-area: head-button;
  text-align: right;
  margin-bottom: 0.5rem;
}
#header-btn a {
  padding: 5px 10px;
  text-align: center;
  color: #fff;
  max-width: 160px;
  margin: 0;
}

#phone { 
  display: inline-block;
  line-height: 1;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  vertical-align: middle;
}
#phone-wrap .opensign {
  display: inline-block;
  background: var(--secondary-color);
  border-radius: 3px;
  padding: 7px;
  vertical-align: middle;
}
#phone-wrap .opensign span {
  font-family: inherit;
  text-transform: uppercase;
  display: block;
  color: var(--tertiary-color);
}
/* Phone & button boxes */
#phone-wrap {
  grid-area: head-phone;
  text-align: center;
}

#phone-wrap .opensign span {
  font: 400 14px/100% sans-serif;
}
@media screen and (min-width: 520px) {
  #phone-wrap {
    text-align: right;
  }
}
@media screen and (min-width: 768px) {
  #phone {
    font-size: 18px;
    margin: 0 16px 0 5px;
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
.nav-item a {
  color: var(--secondary-color);
}
.nav-item > a:hover {
  background-color: var(--secondary-color);
  color: var(--tertiary-color);
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "head-logo head-service head-service head-phone"
            "head-logo head-nav head-nav head-nav";
    }
    #logo svg, #logo img {
        height: 90px;
        width: auto;
    }
    #header-btn {
        display: none;
    }
}
</style>