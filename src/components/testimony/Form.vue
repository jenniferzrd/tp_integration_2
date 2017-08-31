<template lang="html">
  <form class="form">
    <h1> Je suis le form de testimony </h1>
    Signez le livre d'or
    <br>
    <label for="name_client"> Votre nom </label>
    <input type="text" id="name_client">
    <hr>
    <label for="name_project"> Le nom du projet </label>
    <input type="text" id="name_project">
    <textarea id="message"></textarea>
    <hr>
    <button class="btn" @click="submitForm($event)"> témoigner </button>
  </form>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {

    }
  },
  methods: {
    checkForm() {
      const fields = this.$el.querySelectorAll("[required]");
      let errors = 0;
      fields.forEach((f) => {
        if(!f.value) {
          errors += 1;
        f.classList.add("error");
      } else if (f.classList.contains("error")) {
        f.classList.remove("error");
      }
      });
      return errors === 0;
    },
    submitForm(e) {
      // console.log(e);
      if(!this.checkForm()) return;

      const url = "http://localhost:3333/post/testimony";
      const req = new XMLHttpRequest();

      // req.onreadystatechange = function(event) {
      //   // XMLHttpRequest.DONE === 4
      //   if (this.readyState === XMLHttpRequest.DONE) {
      //     if (this.status === 200) {
      //       console.log("Réponse reçu: %s", this.responseText);
      //     } else {
      //       console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
      //     }
      //   }
      // };

      req.open('POST', url);
      req.setRequestHeader('Content-Type', 'application/json');
      req.onload = function() {
        const data = JSON.parse(this.response);

        if (!data.error) {
          eventBus.testimonyPosted();
        }
      };

      const data = JSON.stringify({
        name_client: document.getElementById('name_client').value,
        name_project: document.getElementById('name_project').value || null,
        message: document.getElementById('message').value,
        published: false,
      })
      req.send(data);
      e.preventDefault();
    }
  }
}
</script>

<style lang="css" scoped>
.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  border: 1px solid grey;
  max-width: 320px;
  background: white;
  color: black;
  padding: 20px;
  margin: 20px auto;
}

input[type="text"] {
  width: 220px;
  padding: 3px 3px 3px 30px;
  border-radius: .3rem;
  border: 1px solid;
  margin-bottom: 10px;
}

textarea {
  width: 220px;
  min-height: 200px;
  padding: 3px 3px 3px 20px;
  border-radius: .3rem;
}

.btn {
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  width: 120px;
  margin-top: 10px;
}

.btn:hover {
  color: white;
  background: firebrick;
  border: none;
}
</style>
