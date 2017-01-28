import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'

Vue.use(vueRouter);
Vue.use(vueResource);

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path:'/',
            component: Users
        },
        {
            path:'/test',
            component: Test
        },
    ]
});

/* eslint-disable no-new */
new Vue({
    router,
    template: `
        <div id=app>
            <ul>
                <li><router-link to="/">Users</router-link></li>
                <li><router-link to="/test">Test</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `,
}).$mount('#app');
