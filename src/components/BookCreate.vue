<template>
  <div class="category-create">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item to="/books" text="Books"></b-breadcrumb-item>
      <b-breadcrumb-item text="Create" active></b-breadcrumb-item>
    </b-breadcrumb>

    <b-alert variant="success" v-model="createSucceeded" fade>
      <h4 class="alert-heading">Succeeded!</h4>
      <p>
        Succeed! Move to book list in 2 seconds.
        <b-spinner label="Spinning" small></b-spinner>
      </p>
    </b-alert>

    <h1>BookCreate</h1>
    <b-form @submit="onSubmit">
      <b-form-group id="input-book-name-group" label="Name" label-for="input-book-name">
        <b-form-input
          id="input-book-name"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Book Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="select-book-category-group"
        label="Category"
        label-for="select-book-category"
      >
        <b-form-select
          id="select-book-category"
          v-model="form.categoryId"
          :options="categories"
          required
        >
          <template slot="first">
            <option :value="null" disabled>-- Prease select a category --</option>
          </template>
        </b-form-select>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="createSucceeded">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import ApiHost from "../api/ApiHost";
import axios from "axios";

export default {
  name: "BookCreate",
  data: function() {
    return {
      form: {
        name: "",
        categoryId: null
      },
      categories: [],
      createSucceeded: false
    };
  },
  methods: {
    onSubmit: function(e) {
      e.preventDefault();

      var params = new URLSearchParams();
      params.append("name", this.form.name);
      params.append("category_id", this.form.categoryId);

      axios.post(ApiHost.url + "/books", params).then(() => {
        this.createSucceeded = true;

        var router = this.$router;

        // 2秒後に無理やりbooksに遷移させる
        setTimeout(function() {
          router.push("/books");
        }, 2000);
      });
    }
  },
  created: function() {
    axios.get(ApiHost.url + "/categories").then(response => {
      var categories = response.data;

      // select boxで使うために整形
      for (var i in categories) {
        var category = categories[i];
        var newCategory = {
          value: category.id,
          text: category.name
        };
        this.categories.push(newCategory);
      }
    });
  }
};
</script>