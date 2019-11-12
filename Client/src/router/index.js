import Vue from 'vue';
import Router from 'vue-router'
import Home from './../components/MainContent/MainContent.vue'
import Catalog from './../components/Catalog/Catalog.vue' // this is the import line to add
import About from './../components/About/About.vue'
import Basket from '../components/Basket/Basket.vue';

Vue.use(Router)


export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Catalog',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/Basket',
            name: 'Basket',
            component: Basket
        }
    ]
})