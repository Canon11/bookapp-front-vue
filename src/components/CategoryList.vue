<template>
  <div class="category-list">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item text="Categories" active></b-breadcrumb-item>
    </b-breadcrumb>

    <h1>CategoryList</h1>
    <b-table striped hover :items="categories"></b-table>

    <div>
      <b-button variant="primary" to="categories/new">Create</b-button>
    </div>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "CategoryList",
  data: function() {
    return {
      categories: []
    };
  },
  created: function() {
    axios
      .get(ApiHost.url + "/categories", {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        this.categories = response.data;
      });
  }
};
</script>