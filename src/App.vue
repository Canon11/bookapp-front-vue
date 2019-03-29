<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>BookApp</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <b-link to="/">Top</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="categories">Categories</b-link>
          </b-nav-item>
          <b-nav-item>
            <b-link to="books">Books</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- this is main area -->
    <b-container class="mt-2 mb-2">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
