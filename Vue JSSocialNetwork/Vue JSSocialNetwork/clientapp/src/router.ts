import Vue from 'vue';
import Router from 'vue-router';
import User from './components/Users/User.vue';
import AddUser from './components/Users/AddUser.vue';
import UserList from './components/Users/Users.vue';
import LoginForm from './views/account/LoginForm.vue';
import RegisterForm from './views/account/RegistrationForm.vue';
import store from './store/store';
import DashboardRoot from './views/dashboard/Root.vue';
import DashboardHome from './views/dashboard/Home.vue';

console.log(Vue);
Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/users/:id',
      name: 'user-details',
      component: User,
    },
    {
      path: '/add',
      name: 'add',
      component: AddUser,
    },
    {
      path: '/users',
      name: 'users',
      component: UserList,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/dashboard',
      component: DashboardRoot,
      children: [
        {
          path: 'home',
          component: DashboardHome,
          // a meta field
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm,
    },
  ],
});


router.beforeEach((to: any, from: any, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
