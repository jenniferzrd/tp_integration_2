<template lang="html">
  <nav>
      <ul>
          <router-link tag="li" exact active-class="is-active" :to="{ name: 'home', params: {} }">
              home
          </router-link>
          <router-link tag="li" :to="{ name: 'about', params: {} }">
              about
          </router-link>
          <router-link tag="li" :to="{ name: 'contact', params: {} }">
              contact
          </router-link>
          <router-link tag="li" :to="{ name: 'admin', params: {} }">
              admin
          </router-link>
      </ul>
  </nav>
</template>

<script>

export default {
}
</script>

<style lang="scss">

//
// nav a {
//     color: $text !important;
// }
</style>
