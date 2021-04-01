import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Main'
import BlogEntries from '../static/blogs.json'
import goTo from 'vuetify/es5/services/goto'
import Blogs from '@/views/Blogs'
import Podcasts from "@/views/Podcasts"
import Videos from "@/views/Videos"


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
    { path: '/blogs', name: 'Blogs', component: Blogs },
    { path: '/videos', name: 'Videos', component: Videos },
    { path: '/podcasts', name: 'Podcasts', component: Podcasts },

    ...blogRoutes
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
    routes,

});

router.beforeEach((to, from, next) => {

    window.scrollTo(0, 0);

    // More code ...
    next();
});

export default router;