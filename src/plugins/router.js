import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main'
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
    { path: '/', name: 'Home', component: Home },
    ...blogRoutes
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes,

});

router.beforeEach((to, from, next) => {

    window.scrollTo(0, 0);

    // More code ...
    next();
});

export default router;