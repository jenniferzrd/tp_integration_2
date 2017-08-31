<template lang="html">
  <div class="grid">
    <!-- <h1> Contact </h1> -->
    <div class="a">
      a
    </div>
    <div class="b">
      b
    </div>
    <div class="c">
      c
    </div>
    <div class="d">
      d
    </div>
    <div class="e">
      e
    </div>
    <div class="f">
      f
    </div>
    <div class="g">
      g
    </div>
    <div class="h">
      h
    </div>
  </div>
</template>

<script>

export default {
    //   ready () {
    //     $('#my_elem').on('mousewheel', function(event) {
    //         console.log(event.deltaX, event.deltaY, event.deltaFactor);
    //     });
    // }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
  position: relative;
  top: 0;
  left: 0;
}
.grid div {
  // background-color: blue;
  border: 2px solid red;
  background: url('../../assets/logo.png') no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
