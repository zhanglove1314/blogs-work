import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Loading from '@/components/loading'
import Froms from '@/components/froms'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/loading',
        name: 'loading',
        component: Loading
    }, {
        path: '/froms',
        name: 'froms',
        component: Froms
    }]
})