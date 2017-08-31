<template lang="html">
  <table class="tabler">
    <!-- EL tablor de testimony -->
    <thead>
      <tr>
        <th>Id</th>
        <th>Nom client</th>
        <th>Nom projet</th>
        <th>Message</th>
        <th>Status</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in testimonies">
        <td class="id"> {{ t.id }}</td>
        <td> {{ t.name_client }}</td>
        <td> {{ t.name_project }}</td>
        <td> {{ t.message }}</td>
        <td class="published">
          <div @click="updateTestimonyStatus(t.id)" :class="{ 'is-on' : t.published === 1}">
          </div>
        </td>
        <td class="delete" @click="deleteTestimony(t.id)">
          <span>X</span>
        </td>

      </tr>
    </tbody>
  </table>
  <!-- <button type="button" name="button" id="publier"> Publier </button>
  <button type="button" name="button" id="depublier"> Depublier </button>
  <button type="button" name="button" id="supprimer"> Supprimer </button> -->

</template>

<script>
import { eventBus } from "../../main";
export default {
  created() {
    this.getTestimonies((res) => {
      this.testimonies = res;
      // console.log(this.testimonies);
    });
    eventBus.$on("testimonyPosted", () => {
      this.getTestimonies((res) => {
        this.testimonies = res;
        console.log(res);
    })});

  },
  data() {
    return {
      testimonies: null
    }
  },
  methods: {
    updateTestimonyStatus(id) {
      const url = "http://localhost:3333/put/testimony/" + id;
      const req = new XMLHttpRequest();
      const vue = this;

      req.open('PUT', url);
      req.setRequestHeader('Content-Type', 'application/json');
      req.onload = function() {
        const res = JSON.parse(this.response);
        // console.log(res.data);
        vue.getTestimonies((res => {
          vue.testimonies = res;
        }))
      };
      req.send();
    },
    deleteTestimony(id) {
      // console.log(e);
      // const id =
      // Number(e.target.parentElement.querySelector('.id').textContent);
      // id (!id) return;
      const url = "http://localhost:3333/delete/testimony/" + id;
      const req = new XMLHttpRequest();
      const vue = this;
      // vue va me permettre l'affichage en direct au lieu de réactualiser
      req.open('DELETE', url);
      req.setRequestHeader('Content-Type', 'application/json');
      req.onload = function() {
        const res = JSON.parse(this.response);
        console.log(res.data);
        if (res.error) return;
        vue.getTestimonies((res => {
          vue.testimonies = res;
        }))
      };
      req.send();
    },
    getTestimonies(clbk) {
      const url = "http://localhost:3333/get/testimonies";
      const req = new XMLHttpRequest();

      req.open('GET', url);
      req.setRequestHeader('Content-Type', 'application/json');
      req.onload = function() {
        const res = JSON.parse(this.response);
        // console.log(res.data);
        clbk(res.data);

      };
      req.send();
    }
  }
}
</script>

<style lang="css" scoped>
.tabler {
  margin: 20px auto 40px;
}

table, th, td {
  border: 1px solid;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
}

td.delete:hover .icon {
  color: firebrick;
}

td.delete {
  cursor: pointer;
}

td .icon {
  pointer-events: none;
}

.published {
  display: flex;
  justify-content: center;
  align-items: center;
}

.published div {
  display: block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: firebrick;
  cursor: pointer;
  margin: auto;
}
.published div.is-on {
  background: forestgreen;
}
</style>
