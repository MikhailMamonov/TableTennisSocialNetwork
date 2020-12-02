"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var User_vue_1 = require("./components/Users/User.vue");
var AddUser_vue_1 = require("./components/Users/AddUser.vue");
var Users_vue_1 = require("./components/Users/Users.vue");
var LoginForm_vue_1 = require("./views/account/LoginForm.vue");
var RegistrationForm_vue_1 = require("./views/account/RegistrationForm.vue");
var store_1 = require("./store/store");
var Root_vue_1 = require("./views/dashboard/Root.vue");
var Home_vue_1 = require("./views/dashboard/Home.vue");
console.log(vue_1.default);
vue_1.default.use(vue_router_1.default);
var router = new vue_router_1.default({
    mode: 'history',
    routes: [
        {
            path: '/users/:id',
            name: 'user-details',
            component: User_vue_1.default,
        },
        {
            path: '/add',
            name: 'add',
            component: AddUser_vue_1.default,
        },
        {
            path: '/users',
            name: 'users',
            component: Users_vue_1.default,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginForm_vue_1.default,
        },
        {
            path: '/dashboard',
            component: Root_vue_1.default,
            children: [
                {
                    path: 'home',
                    component: Home_vue_1.default,
                    // a meta field
                    meta: { requiresAuth: true },
                },
            ],
        },
        {
            path: '/register',
            name: 'register',
            component: RegistrationForm_vue_1.default,
        },
    ],
});
router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (record) { return record.meta.requiresAuth; })) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store_1.default.getters['auth/isAuthenticated']) {
            next({
                path: '/login',
                query: { redirect: to.fullPath },
            });
        }
        else {
            next();
        }
    }
    else {
        next(); // make sure to always call next()!
    }
});
exports.default = router;
//# sourceMappingURL=router.js.map