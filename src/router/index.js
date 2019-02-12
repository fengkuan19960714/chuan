import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import HomeContaiter from "../page/home"
import MemberContaiter from "../page/member"
import ShopcarContaiter from "../page/shopcar"
import SearchContaiter from "../page/search"

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home"
        }, {
            path: '/home',
            component: HomeContaiter
        }, {
            path: '/member',
            component: MemberContaiter
        },
        {
            path: '/shopcar',
            component: ShopcarContaiter
        },
        {
            path: '/search',
            component: SearchContaiter
        }
    ],
    linkActiveClass: "mui-active"
})