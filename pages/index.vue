<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="4">
      <h5>Choose a header</h5>
        <v-select
          :items="dropDownHeaders"
          v-model="headerSelected"
          label="Please select"
          solo
        ></v-select>
    </v-col>
        <v-col cols="12" sm="8" md="4">
      <h5>Choose a footer</h5>
        <v-select
          :items="dropDownFooters"
          v-model="footerSelected"
          label="Please select"
          solo
        ></v-select>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
    <h3>Viewer</h3>
    <v-col class="mb-5 output-box" cols="12" sm="8" md="12">
        <div v-if="headerSelected == 'A'">
          <classic-header/>
        </div>
        <div v-if="footerSelected == 'A'">
          <classic-footer/>
        </div>
        <div v-else-if="headerSelected == 'B'">
          <condensed-header/>
        </div>
        <div v-else-if="headerSelected == 'C'">
          <narrow-header/>
        </div>
        <div v-else-if="headerSelected == 'D'">
          <slim-header/>
        </div>
    </v-col>
  </v-row>
  <v-row justify="center" align="center">   
      <h3>HTML</h3>

    <v-col class="mb-5 output-box code" cols="12" sm="8" md="12">

         <!-- <code v-highlight="topHTML" class="html"></code>
         <code v-highlight="bottomHTML" class="html"></code> -->


      <pre>
        <code v-highlight class="html">
          {{topHTML}}
            [content]
          {{bottomHTML}}
         </code>
      </pre>
        <div v-if="headerSelected == 'A'">
       
            {{headers[3].html}}
        
        </div>
      
  
       
        <div v-if="footerSelected == 'A'">
        
            {{footers[0].html}}
     
        </div>
        <div v-else-if="headerSelected == 'B'">
          <condensed-header/>
        </div>
        <div v-else-if="headerSelected == 'C'">
          <narrow-header/>
        </div>
        <div v-else-if="headerSelected == 'D'">
          <slim-header/>
        </div>
    
           
      
    </v-col>
  </v-row>
  <v-row justify="center" align="center">
      <h3>CSS</h3>
    <v-col class="output-box code" cols="12" sm="8" md="12">
      
            {{templatebody[0].css}}
      
        <div v-if="headerSelected == 'A'">
       
            {{headers[3].css}}
        
        </div>
        <div v-if="footerSelected == 'A'">
       
            {{footers[0].css}}
       
        </div>

    </v-col>
  </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClassicHeader from '~/components/headers/ClassicHeader.vue'
import ClassicFooter from '~/components/footers/ClassicFooter.vue'
const formatter = require('html-formatter');

export default {
    data: () => ({
      headerSelected: '',
      footerSelected: '',
      topHTML: '',
      bottomHTML: '',
      dropDownHeaders: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
      dropDownFooters: [{ text: 'Classic', value: 'A' }, { text: 'Condensed', value: 'B' },{ text: 'Narrow', value: 'C' }, { text: 'Slim', value: 'D' }],
    }),
    components: {
      ClassicHeader,
      ClassicFooter
    },
  computed: {
    ...mapState(["footers", "headers", "templatebody"])
  },
  created() {
    this.topHTML = formatter.render(this.templatebody[1].html);
    this.bottomHTML = formatter.render(this.templatebody[2].html);
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
.v-application a {
    color: inherit;
}
  .output-box {
    border-radius: 10px;
    background: #fff;
    color:#000;
  }
  .output-box.code {
    background: #282c34;
    }
  code {
    border: none;
  }
[type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus, textarea:focus,input:disabled, input[readonly], textarea:disabled, textarea[readonly] {
  border: initial;
  background-color: initial;
}
.v-application code {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282c34;
    color: #abb2bf;
}
pre {
  /* overflow-x:scroll;  */
}
</style>
