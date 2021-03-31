import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main'
import Foo from '../markdown/older/test.md'
import Blog from '../views/Blogs.vue'
import BlogEntries from '../static/blogs.json'



Vue.use(VueRouter)

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries[section].map(child => ({
        path: child.id,
        name: child.id,
        component: () => import(`../markdown/${section}/${child.id}.md`)
    }))
    return {
        path: `/${section}`,
        name: section,
        component: () => import('../views/Blog.vue'),
        children
    }
})

const routes = [
    { path: '/', name: 'HelloWorld', component: Home },
    { path: '/blogs', name: 'Blogs', component: Blog },
    { path: '/foo', name: 'foo', component: Foo },
    ...blogRoutes
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;