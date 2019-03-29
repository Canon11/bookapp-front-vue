<template>
  <div class="category-create">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item to="/categories" text="Categories"></b-breadcrumb-item>
      <b-breadcrumb-item text="Create" active></b-breadcrumb-item>
    </b-breadcrumb>

    <b-alert variant="success" v-model="createSucceeded" fade>
      <h4 class="alert-heading">Succeeded!</h4>
      <p>
        Succeed! Move to category list in 2 seconds.
        <b-spinner label="Spinning" small></b-spinner>
      </p>
    </b-alert>

    <h1>CategoryCreate</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-category-name-group" label="Name" label-for="input-category-name">
        <b-form-input
          id="input-category-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Category Name"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="createSucceeded">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";
import { setTimeout } from "timers";

export default {
  name: "CategoryCreate",
  data: function() {
    return {
      form: {
        name: ""
      },
      createSucceeded: false
    };
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();

      var params = new URLSearchParams();
      params.append("name", this.form.name);

      axios.post(ApiHost.url + "/categories", params).then(() => {
        this.createSucceeded = true;

        var router = this.$router;
        setTimeout(function() {
          router.push("/categories");
        }, 2000);
      });
    }
  }
};
</script>