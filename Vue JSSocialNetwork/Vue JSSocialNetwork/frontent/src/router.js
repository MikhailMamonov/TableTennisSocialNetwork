import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';
import DashboardRoot from './views/dashboard/Root.vue';
import DashboardHome from './views/dashboard/Home.vue';
import LoginForm from './views/account/LoginForm.vue';
import RegisterForm from './views/account/RegistrationForm.vue';
import About from './views/About.vue';
import Home from './views/Home.vue';


Vue.use(Router);

const router =  new Router({
    mode: 'history',
    routes: [
    //   {
    //     path: '/users/:id',
    //     name: 'user-details',
    //     component: User,
    //   },
    //   {
    //     path: '/add',
    //     name: 'add',
    //     component: AddUser,
    //   },
    //   {
    //     path: '/users',
    //     name: 'users',
    //     component: UserList,
    //   },
    {
      path: '/',
      name: 'home',
      component: Home,
                  // a meta field
                  meta: { requiresAuth: true },
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
      {
      path: '/about',
      name: 'about',
      component: About,
    },
    ],
  });

  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
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