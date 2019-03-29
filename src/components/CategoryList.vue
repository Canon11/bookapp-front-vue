<template>
  <div class="category-list">
    <div>
      <router-link to="/">back to top</router-link>
    </div>
    <h1>CategoryList</h1>
    <div v-for="category in categories" :key="category.id">
      <p>ID: {{ category.id }}</p>
      <p>Name: {{ category.name }}</p>
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
      categories: {}
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