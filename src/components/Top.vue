<template>
  <div class="top">
    <h1>Top</h1>
    <div>
      <router-link to="books">BookList</router-link>
    </div>
    <div>
      <router-link to="categories">CategoryList</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top"
};
</script>
