<template lang="html">
    <div class="display-testimonies">
      <h1>Slider</h1>
      <ul class="list">
        <li class="item" v-for="t in testimonies">

          <div class="client">{{ t.name_client }}</div>

          <div class="project" v-if="t.name_project"> {{ t.name_project }} </div>

          <blockquote class="message"> {{ t.message }} </blockquote>

        </li>
      </ul>
      <p v-if="!blockPrev" @click="moveSlide('prev')" class="icon prev"> Prev </p>
      <p v-if="!blockNext" @click="moveSlide('next')" class="icon next"> Next </p>
    </div>

  <!-- boucle v for que seuls les true soient affiché
  utilisé une method
  et dans une liste  -->


</template>

<script>

export default {
  created() {

    this.createLi((res) => {
      this.testimonies = res;
      this.blockNext = this.testimonies.length === 1;
    });
  },
  mounted() {
    this.slider = this.$el.querySelector(".list");
  },
  // ici on inscruste le code avec mounted
  data() {
    return {
      blockPrev: true,
      blockNext: false,
      testimonies: null,
      current: 1,
      slider: null,
      step:0,
    }
  },
  methods: {
    createLi(clbk) {
      const url = "http://localhost:3333/get/testimonies/published";
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function() {
        const res = JSON.parse(this.response);
        console.log(res.data);
        clbk(res.data);
      };
      xhr.send();
    },
    moveSlide(dir) {
      if (dir === "next" && this.current < this.testimonies.length) {
        this.step = -(this.current * 100);
        this.current += 1;
      } else if (dir === "prev" && this.current > 1) {
        this.step += 100;
        this.current -= 1;
      } else  {
        return;
      }

      if (this.current === 1) {
        this.blockPrev = true;
      } else {
        this.blockPrev = false;
      }
      if(this.current >= this.testimonies.length) {
        this.blockNext = true;
      } else {
        this.blockNext = false;
      }
      this.slider.style.transform = `translate(${this.step}%)`;
    },
  }
}
</script>

<style lang="css">
/*.display {
  border: 1px solid;
  border-collapse: collapse;
}

li {
  padding: 10px;
  list-style: none;
}*/

.display-testimonies {
  height: 220px;
  width: 60vw;
  min-width: 300px;
  min-height: 500px;
  border: 1px solid white;
  margin: 20px auto 20px;
  overflow: hidden;
  position: relative;
}

.list {
display: flex;
height: 100%;
transform: translateX(0);
transition: transform 0.5s ease-in-out;
}

.item {
  height: 100%;
  flex: 0 0 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon {
  position: absolute;
  top: calc(50% - 8px);
  z-index: 1;
  cursor: pointer;
}

.icon:hover {
  color:darkorange;
}

.icon.next{
  right: 1%;
}

.icon.prev {
  left: 1%;
}

.message {
  font-style: italic;
}
</style>
