<template lang="html">

  <div class="wrap">
    <button id="up" @click="doScroll($event)" data-cible="#macible">
      Scroll down
    </button>
      <div class="page">
        <h1> Home </h1>
        <!-- <h1> {{ title }}</h1> -->
        <!-- <pipo :content="contentPipo"></pipo>
        <pipo :content="warning"></pipo>
        <pipo :content="success"></pipo> -->
      </div>

      <button @click="doScroll($event)" data-cible="#up">scroll up</button>
        <div id="macible" class="page">
          lorem
        </div>
      <temoignage></temoignage>
    </div>
  </template>

  <script>

  import Temoignage from "../testimony/Temoignages.vue";

  export default {
    methods: {
      doScroll(e){
        const sCSS = e.target.getAttribute("data-cible");
        const cible = this.$el.querySelector(sCSS);
        smoothscroll(cible, 500);
      }
    },
    components: {
      Temoignage
    }
  }
  </script>

  <style lang="css">
      /*.wrap {
        position: absolute;
        top: 0;
        left: 0;
      }*/
  </style>
