<template>
  <div>
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
                    absolute
                    right
                    top
                  >
                    {{ text }}
                  </v-snackbar>
                </div>
               <pre>
                  <code id="html">
                    {{templateHTML}}
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
                    Copy Template CSS
                  </v-btn>
              
                  <v-snackbar
                    v-model="snackbarCSS"
                    :timeout="timeout"
                    absolute
                    right
                    top
                  >
                    {{ textCSS }}
                  </v-snackbar>
                </div>
              <pre>
                <code id="css">
                  {{templateCSS}}
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
                    @click="copyInlineCSS"
                  >
                    Copy Inline CSS
                  </v-btn>
              
                  <v-snackbar
                    v-model="snackbarInlineCSS"
                    :timeout="timeout"
                    absolute
                    right
                    top
                  >
                    {{ textInlineCSS }}
                  </v-snackbar>
                </div>
              <pre>
                <code id="css">
                  {{inlineCSS}}
                </code>
              </pre>
            </v-card-text>
          </v-card>
        </v-tab-item>
        
      </v-tabs-items>
    </v-card>
  </v-row>  
  </div>
</template>

<script>
import { mapState } from "vuex";
const formatter = require('html-formatter');
const cssbeautify = require('cssbeautify');

export default {
    data: () => ({
      templateHTML: '',
      templateCSS: '',
      inlineCSS: '',
      tab: null,
      items: [
        { tab: 'Borders'},
        { tab: 'Template CSS'},
        { tab: 'Inline CSS'}
      ],
      snackbar: false,
      text: 'HTML Copied',
      timeout: 2000,
      snackbarCSS: false,
      textCSS: 'CSS Copied',
      snackbarInlineCSS: false,
      textInlineCSS: 'Inline CSS Copied'
    }),
  computed: {
    ...mapState(["junkluggers"])
  },
  created() {
    this.templateHTML = formatter.render(this.junkluggers[0].html);
    this.templateCSS = cssbeautify(this.junkluggers[0].css);
    this.inlineCSS = cssbeautify(this.junkluggers[0].inline);
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
    },
    copyInlineCSS: function () {
      this.$copyText(document.querySelector('#css').innerHTML).then(function (e) {
        console.log(e)
      }, function (e) {
        alert('Can not copy')
        console.log(e)
      })
      this.snackbarInlineCSS = true;
    },
  }
};
</script>

<style>
.theme--dark.v-application {
    background: #473f3d;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #73aa4a;
}
.theme--dark.v-card {

}
.v-application a {
    color: inherit;
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
.code {
  border: none;
  padding: 0;
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
}
.v-application .primary--text {
    color: #fff !important;
    caret-color: #fff !important;
}
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color:#73aa4a;
}
</style>
