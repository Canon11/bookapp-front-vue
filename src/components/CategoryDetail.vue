<template>
  <div class="category-detail">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item to="/categories" text="Categories"></b-breadcrumb-item>
      <b-breadcrumb-item text="Detail" active></b-breadcrumb-item>
    </b-breadcrumb>

    <h1>CategoryDetail</h1>
    <ul>
      <li>ID: {{ category.id }}</li>
      <li>Name: {{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "CategoryDetail",
  data: function() {
    return {
      category: {}
    };
  },
  created: function() {
    var categoryId = this.$route.params.id;
    axios.get(ApiHost.url + "/categories/" + categoryId).then(response => {
      this.category = response.data;
    });
  }
};
</script>