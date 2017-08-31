<template lang="html">
  <section class="admin">
  <h1> ADMIN </h1>
  <testimony-form></testimony-form>
  <testimony-tabler></testimony-tabler>
  <testimony-display></testimony-display>

</section>

</template>

<script>
import TestimonyForm from "../testimony/Form.vue";
import TestimonyTabler from "../testimony/Tabler.vue";
import TestimonyDisplay from "../testimony/TestDisplay.vue"

export default {
  components: {
    TestimonyTabler,
    TestimonyForm,
    TestimonyDisplay
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>
