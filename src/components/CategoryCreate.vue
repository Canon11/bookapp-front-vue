<template>
  <div class="category-create">
    <b-breadcrumb>
      <b-breadcrumb-item to="/" text="Top"></b-breadcrumb-item>
      <b-breadcrumb-item to="/categories" text="Categories"></b-breadcrumb-item>
      <b-breadcrumb-item text="Create" active="true"></b-breadcrumb-item>
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
      alert(JSON.stringify(this.form));
    }
  }
};
</script>