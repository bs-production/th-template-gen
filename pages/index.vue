<template>
  <div>
  <v-row justify="center" align="center" class="mt-10">
    <v-col cols="12" sm="8" md="3">

       <v-row no-gutters>
          <v-col cols="1">
              <v-icon>{{ icons.header }}</v-icon>
          </v-col>
          <v-col cols="11" class="pl-2">
              <h5>Header</h5>
          </v-col>
        </v-row>

        <v-select
          :items="dropDownHeaders"
          v-model="headerSelected"
          label="Please select"
          solo
        ></v-select>
    </v-col>
    <v-col cols="12" sm="8" md="3">
       <v-row no-gutters>
          <v-col cols="1">
              <v-icon>{{ icons.mm }}</v-icon>
          </v-col>
          <v-col cols="11" class="pl-2">
             <h5>Main Message</h5>
          </v-col>
        </v-row>
      
        <v-select
          :items="dropDownMainMessages"
          v-model="mainMessageSelected"
          label="Please select"
          solo
        ></v-select>
      </v-col>
          <v-col cols="12" sm="8" md="3">
            <v-row no-gutters>
              <v-col cols="1">
                   <v-icon>{{ icons.services }}</v-icon>
              </v-col>
              <v-col cols="11" class="pl-2">
                  <h5>Services</h5>
              </v-col>
            </v-row>
        <v-select
          :items="dropDownServices"
          v-model="servicesSelected"
          label="Please select"
          solo
        ></v-select>
      </v-col>
          <v-col cols="12" sm="8" md="3">
            <v-row no-gutters>
              <v-col cols="1">
                  <v-icon>{{ icons.footer }}</v-icon>
              </v-col>
              <v-col cols="11" class="pl-2">
                  <h5>Footer</h5>
              </v-col>
            </v-row>
        <v-select
          :items="dropDownFooters"
          v-model="footerSelected"
          label="Please select"
          solo
        ></v-select>
      </v-col>
  </v-row>
  <div v-if="headerSelected || mainMessageSelected || servicesSelected || footerSelected">
  <v-row justify="center" align="center">
    <v-col class="mb-5 output-box" cols="12" sm="8" md="12">
        <div v-if="headerSelected == 'A'">
          <classic-header/>
        </div>
        <div v-if="headerSelected == 'B'">
          <condensed-header/>
        </div>
        <div v-if="headerSelected == 'C'">
          <narrow-header/>
        </div>
        <div v-if="headerSelected == 'D'">
          <slim-header/>
        </div>
        <div v-if="mainMessageSelected == 'A'">
          <span v-html="classicMainMessageHTML"></span>
        <div id="tiny">{{tinySlider}}</div>
        </div>
        <div v-if="servicesSelected == 'A'">
          <span v-html="classicServicesHTML"></span>
        </div>
        <h2>[content]</h2>
        <div v-if="footerSelected == 'A'">
          <classic-footer/>
        </div>
    </v-col>
  </v-row>
  <v-row justify="center" align="center"> 
    <v-card>
      <v-tabs
        v-model="tab"
        dark
        centered
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item >
          <v-card flat>
            <v-card-text>
                <div class="text-center">
                  <v-btn
                    dark
                    @click="copyHTML"
                  >
                    Copy HTML
                  </v-btn>
              
                  <v-snackbar
                    v-model="snackbar"
                    :timeout="timeout"
                    right
                    top
                  >
                    <div class="snack-text">{{ text }}</div>
                  </v-snackbar>
                </div>
               <pre>
                  <code id="html">
                    {{topHTML}}
                    <div v-if="headerSelected === 'A' || 'B' || 'C' || 'D'">
                        {{classicHeaderHTML}}
                    </div>
                    <div v-if="mainMessageSelected === 'A'">
                        {{classicMainMessageHTML}}
                    </div>
                    <div v-if="servicesSelected === 'A'">
                        {{classicServicesHTML}}
                    </div>
                     [content]
                    <div v-if="footerSelected === 'A'">
                      {{classicFooterHTML}}
                    </div>
                    {{bottomHTML}}
                  </code>
                </pre>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item  >
          <v-card flat>
            <v-card-text>
               <div class="text-center">
                  <v-btn
                    dark
                    @click="copyCSS"
                  >
                    Copy CSS
                  </v-btn>
              
                  <v-snackbar
                    v-model="snackbarCSS"
                    :timeout="timeout"
                    right
                    top
                  >
                    <div class="snack-text">{{ textCSS }}</div>
                  </v-snackbar>
                </div>
              <pre>
                <code id="css">
                  {{templateCSS}}
                  <div v-if="headerSelected == 'A'">
                      {{classicHeaderCSS}}
                  </div>
                  <div v-if="headerSelected == 'B'">
                      {{condensedHeaderCSS}}
                  </div>
                  <div v-if="headerSelected == 'C'">
                      {{narrowHeaderCSS}}
                  </div>
                  <div v-if="headerSelected == 'D'">
                      {{slimHeaderCSS}}
                  </div>

                  <div v-if="mainMessageSelected == 'A'">
                      {{classicMainMessageCSS}}
                  </div>
                  <div v-if="servicesSelected == 'A'">
                      {{classicServicesCSS}}
                  </div>
                  <div v-if="footerSelected == 'A'">
                    {{classicFooterCSS}}
                  </div>
                </code>
              </pre>
            </v-card-text>
          </v-card>
        </v-tab-item>
        
      </v-tabs-items>
    </v-card>
  </v-row>  
  </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import TreehouseLogoWhite from '~/components/logos/TreehouseLogo.vue'
import ClassicHeader from '~/components/headers/ClassicHeader.vue'
import CondensedHeader from '~/components/headers/CondensedHeader.vue'
import ClassicMainMessage from '~/components/main-messages/ClassicMainMessage.vue'
import ClassicServices from '~/components/services/ClassicServices.vue'
import ClassicFooter from '~/components/footers/ClassicFooter.vue'
const formatter = require('html-formatter');
const cssbeautify = require('cssbeautify');

export default {
    data: () => ({
      headerSelected: '',
      mainMessageSelected:'',
      servicesSelected:'',
      footerSelected: '',
      topHTML: '',
      classicHeaderHTML: '',
      classicMainMessageHTML: '',
      classicMainMessageJS: '',
      classicServicesHTML: '',
      classicFooterHTML: '',
      bottomHTML: '',
      templateCSS: '',
      classicHeaderCSS: '',
      condensedHeaderCSS: '',
      narrowHeaderCSS: '',
      slimHeaderCSS: '',
      classicMainMessageCSS: '',
      classicServicesCSS: '',
      classicFooterCSS: '',
      tinyScript: "let slider=tns({container:'#main-message',items:1,mouseDrag:true,controlsText:['',''],autoplay:false,autoplayHoverPause:true,autoplayButtonOutput:false});",
      dropDownHeaders: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
      dropDownMainMessages: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
      dropDownServices: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
      dropDownFooters: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
      tab: null,
      items: [
        { tab: 'Borders'},
        { tab: 'Template CSS'}
      ],
      icons: {
        header: 'mdi-page-layout-header',
        mm: 'mdi-page-layout-body',
        services: 'mdi-view-grid-outline',
        footer: 'mdi-page-layout-footer'
    },
      snackbar: false,
      text: 'HTML Copied',
      timeout: 2000,
      snackbarCSS: false,
      textCSS: 'CSS Copied'
    }),
    components: {
      TreehouseLogoWhite,
      ClassicHeader,
      CondensedHeader,
      ClassicMainMessage,
      ClassicServices,
      ClassicFooter
    },
  computed: {
    ...mapState(["footers", "headers", "templatebody", "mainmessages","services"]),
    tinySlider: function () {
      let v = this.tinyScript;
      
      setTimeout(function () {
        let mmId = document.getElementById('tiny');
        let script = document.createElement("script");
        let inlineCode = document.createTextNode(v);
        script.appendChild(inlineCode);
        console.log(script);
        mmId.appendChild(script); 
      }, 500);
    }
  },
  created() {
    this.topHTML = formatter.render(this.templatebody[0].html);
    this.bottomHTML = formatter.render(this.templatebody[1].html);
    this.classicHeaderHTML = formatter.render(this.headers[0].html);
    this.classicMainMessageHTML = formatter.render(this.mainmessages[0].html);
    this.classicServicesHTML = formatter.render(this.services[0].html);
    this.classicFooterHTML = formatter.render(this.footers[0].html);

    this.templateCSS = cssbeautify(this.templatebody[2].css);
    this.classicHeaderCSS = cssbeautify(this.headers[0].css);
    this.condensedHeaderCSS = cssbeautify(this.headers[1].css);
    this.narrowHeaderCSS = cssbeautify(this.headers[2].css);
    this.slimHeaderCSS = cssbeautify(this.headers[3].css);
    this.classicMainMessageCSS = cssbeautify(this.mainmessages[0].css);
    this.classicServicesCSS = cssbeautify(this.services[0].css);
    this.classicFooterCSS = cssbeautify(this.footers[0].css);
  },
  mounted() {

  }, 
  methods: {
    copyHTML: function () {
      var decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
      };
      let htmlEscaped = document.querySelector('#html').innerHTML;
      this.$copyText(decodeHTML((htmlEscaped))).then(function (e) {
     
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
      this.snackbar = true;
    },
    copyCSS: function () {
      this.$copyText(document.querySelector('#css').innerHTML).then(function (e) {
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
      this.snackbarCSS = true;
    }
  }
};
</script>
<style>
.theme--dark.v-application {
    background: #473f3d;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #73aa4a;
    z-index: 1000;
}
.theme--dark.v-card {
    background-color: #1e1e1e;
    color: #FFFFFF;
}
.theme--dark.v-input {
  z-index: 100;
}
.v-application a {
    color: inherit;
}
.v-application .primary--text {
    color: #fff !important;
    caret-color: #fff !important;
}
.v-card__text {
  padding-top: 40px;
  padding-bottom: 0;
}
.output-box {
  border-radius: 10px;
  background: #fff;
  color:#000;
}
.output-box h2 {
  text-align: center;
  margin-bottom: 50px;
}

[type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus, textarea:focus,input:disabled, input[readonly], textarea:disabled, textarea[readonly] {
  border: initial;
  background-color: initial;
}
.v-application .mb-5  {
    margin-bottom: 60px !important;
}
.v-application code {
    display: block;
    overflow-x: auto;
    padding: 15px;
    background: #282c34;
    color:#98c379;
    max-height: 900px;
    border: none;
}
.v-application .primary--text {
    color: #fff !important;
    caret-color: #fff !important;
}
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color:#73aa4a;
}
.v-main__wrap {
  background-image: url(~assets/img/treehouse-logo-white.svg);
  background-position: center;
  background-size: 35%;
}
.snack-text {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: #73aa4a;
  text-transform: uppercase;
}

/* Scroll bar */
/* width */
code::-webkit-scrollbar {
  width: 15px;
  background: rgb(59, 59, 59);
}

/* Track */
code::-webkit-scrollbar-track {
  background: rgb(59, 59, 59);
}

/* Handle */
code::-webkit-scrollbar-thumb {
  background: #73aa4a; 
  border-radius: 15px;
}
#footer-links #social-footer-icons > a > svg, #social-footer-icons > a > svg {
    max-height: 22px;
    max-width: 25px;
    display: inline;
    margin: auto;
}
#header-btn a {
    color: #fff !important;
}
</style>
