"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var auth_1 = require("./modules/auth");
var user_1 = require("./modules/user");
vue_1.default.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth: {
            namespaced: true,
            state: auth_1.default.state,
            mutations: auth_1.default.mutations,
            getters: auth_1.default.getters,
            actions: auth_1.default.actions,
        },
        user: {
            namespaced: true,
            state: user_1.default.state,
            actions: user_1.default.actions,
            mutations: user_1.default.mutations,
            getters: user_1.default.getters,
        },
    },
});
//# sourceMappingURL=store.js.map