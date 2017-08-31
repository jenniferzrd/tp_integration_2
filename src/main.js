/*jshint esversion: 6 */

import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from "./routes";

// import $ from 'jquery';
// window.$ =$;

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history", // remove the # from the SPA's urls
    routes // same as routes: routes

});

export const eventBus = new Vue ({
  methods: {
    testimonyPosted() {
      console.log("even dispatched !");
      this.$emit("testimonyPosted");
    }
  }
});

new Vue({

  el: '#app',
  router: router,
  render: h => h(App)

});

// var express = require('express');
// var app = express.createServer();
//
// app.use(require('browserify')({
//     require : [ 'jquery-browserify', 'jquery-mousewheel' ]
// }));
