<template>
  <div class="book-list">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item text="Books" active></b-breadcrumb-item>
    </b-breadcrumb>

    <h1>BookList</h1>
    <b-table striped hover :items="books">
      <template slot="category" slot-scope="data">{{ categories[data.item.category] }}</template>
    </b-table>

    <div>
      <b-button variant="primary" to="books/new">Create</b-button>
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
    axios.get(ApiHost.url + "/categories").then(response => {
      let categories = response.data;
      for (var i in categories) {
        var category = categories[i];
        this.categories[category.id] = category.name;
      }
      axios.get(ApiHost.url + "/books").then(response => {
        this.books = response.data;
      });
    });
  }
};
</script>