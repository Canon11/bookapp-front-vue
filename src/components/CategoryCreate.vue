<template>
  <div class="category-create">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item to="/categories" text="Categories"></b-breadcrumb-item>
      <b-breadcrumb-item text="Create" active></b-breadcrumb-item>
    </b-breadcrumb>

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
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "CategoryCreate",
  data: function() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();

      var params = new URLSearchParams();
      params.append("name", this.form.name);

      axios.post(ApiHost.url + "/categories", params).then(response => {
        console.log(response);
      });
    }
  }
};
</script>