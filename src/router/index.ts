import {createRouter, createWebHashHistory} from 'vue-router'
import SignIn from '@/vue/SignIn.vue';
import Home from "../vue/home.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Home,
        meta: { requiresAuth: true }, // 인증이 필요한 경우 설정
        children: [
            {
                name: 'HomeMain',
                component: () => import('@/views/home-main.vue'),
                path: '/',
            },
            {
                name: 'HomePopular',
                component: () => import('@/views/home-popular.vue'),
                path: 'popular',
            },
            {
                name: 'HomeWishList',
                component: () => import('@/views/home-wishlist.vue'),
                path: 'wishlist',
            },
            {
                name: 'HomeSearch',
                component: () => import('@/views/home-search.vue'),
                path: 'search',
            }
        ]
    },
    {
        path: '/signin',
        name: 'SignIn', // name 추가
        component: SignIn,
    },
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

router.beforeEach((to, _from, next): void => {
    const currentUser = localStorage.getItem('currentUser'); // users가 아닌 currentUser를 체크
    const isAuthenticated = currentUser !== null;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ name: 'SignIn' });
        } else {
            next();
        }
    } else {
        if (to.name === 'SignIn' && isAuthenticated) {
            next({ path: '/' }); // name 대신 path 사용
        } else {
            next();
        }
    }
});


export default router

