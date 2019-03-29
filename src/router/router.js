import Vue from "vue";
import Router from "vue-router";

import Top from "../components/Top";
import BookCreate from "../components/BookCreate";
import BookList from "../components/BookList";
import CategoryCreate from "../components/CategoryCreate";
import CategoryList from "../components/CategoryList";
import CategoryDetail from "../components/CategoryDetail"

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      component: Top
    },
    {
      path: "/books",
      component: BookList
    },
    {
      path: "/books/new",
      component: BookCreate
    },
    {
      path: "/categories",
      component: CategoryList
    },
    {
      path: "/categories/new",
      component: CategoryCreate
    },
    {
      path: "/categories/:id",
      component: CategoryDetail
    }
  ]
});