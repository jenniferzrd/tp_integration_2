<template>
  <div id="app">
    <nav-main></nav-main>
    <router-view></router-view>
  </div>
</template>

<script>

import NavMain from "./components/shared/Nav.vue";

export default {
  name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavMain
    }
}
</script>

<style lang="scss">
* {
margin: 0;
padding: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background-color: #1abc9c;
  min-height: 100vh;
  // margin: 0;
}
#app.contact {
  background-color: #e67e22;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.page {
  height: 150vh;
}

</style>
