<template>
  <div class="book-list">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item text="Books" active="true"></b-breadcrumb-item>
    </b-breadcrumb>

    <h1>BookList</h1>
    <b-table striped hover :items="books">
      <template
        slot="category"
        slot-scope="data"
      >{{ categories[data.category] ? categories[data.category] : 'undefined' }}</template>
    </b-table>
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