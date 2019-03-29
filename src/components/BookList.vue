<template>
  <div class="book-list">
    <h1>BookList</h1>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "BookList",
  created: function() {
    axios
      .get(ApiHost.url + "/books", {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        console.log(response);
      });
  }
};
</script>