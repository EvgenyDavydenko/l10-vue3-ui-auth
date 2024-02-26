import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import App from './components/App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'home' },
        { path: '/login', component: Login, name: 'login' },
        { path: '/register', component: Register, name: 'register' },
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if(token) {
        if (to.name === 'login' || to.name === 'register') {
            return next({name: 'home'});
        }
    } 
    
    if(!token) {
        if (to.name === 'login' || to.name === 'register') {
            return next();
        } else {
            return next({name: 'login'});
        }
    }

    next();
})

const app = createApp(App);
app.use(router);
app.mount('#app');
