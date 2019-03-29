<template>
  <div class="book-list">
    <v-toolbar color="teal">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title>Manage</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <div>
      <router-link to="/">back to top</router-link>
    </div>
    <h1>BookList</h1>
    <div v-for="book in books" :key="book.id">
      <p>Name: {{ book.name }}</p>
      <p>Category: {{ categories[book.category] ? categories[book.category] : 'undefined' }}</p>
    </div>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "BookList",
  data: function() {
    return {
      books: [],
      categories: {}
    };
  },
  created: function() {
    axios
      .get(ApiHost.url + "/books", {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        this.books = response.data;
      });
    axios
      .get(ApiHost.url + "/categories", {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        let categories = response.data;
        for (var i in categories) {
          var category = categories[i];
          this.categories[category.id] = category.name;
        }
      });
  }
};
</script>