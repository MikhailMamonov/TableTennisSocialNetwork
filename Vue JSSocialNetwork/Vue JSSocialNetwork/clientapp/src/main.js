"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store/store");
var axios_1 = require("axios");
vue_1.default.prototype.$http = axios_1.default;
axios_1.default.defaults.baseURL = process.env.API_ENDPOINT;
vue_1.default.config.productionTip = false;
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    render: function (h) { return h(App_vue_1.default); },
}).$mount('#app');
axios_1.default.interceptors.request.use(function (config) {
    var authToken = store_1.default.getters['auth/authToken'];
    if (authToken) {
        config.headers.Authorization = "Bearer " + authToken;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});
//# sourceMappingURL=main.js.map