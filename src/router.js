import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/HelloWorld.vue'
import Foo from './components/test.md'
import Blogs from './views/Blogs.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'HelloWorld', component: Home },
    { path: '/blogs', name: 'Blogs', component: Blogs },
    { path: '/foo', name: 'foo', component: Foo }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;