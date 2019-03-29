import Vue from 'vue'
import Router from 'vue-router'

import Top from '../components/Top'
import BookList from '../components/BookList'
import CategoryCreate from '../components/CategoryCreate'
import CategoryList from '../components/CategoryList'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Top
        },
        {
            path: '/books',
            component: BookList
        },
        {
            path: '/categories',
            component: CategoryList
        },
        {
            path: '/categories/new',
            component: CategoryCreate
        },
    ]
})