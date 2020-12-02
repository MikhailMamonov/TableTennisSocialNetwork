"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("../../services/auth.service");
var event_bus_1 = require("../../event-bus");
var state = { token: localStorage.getItem('auth-token') || '', status: '' };
var getters = {
    isAuthenticated: function (authState) { return !!authState.token; },
    authStatus: function (authState) { return authState.status; },
    authToken: function (authState) { return authState.token; },
};
var actions = {
    authRequest: function (_a, credentials) {
        var commit = _a.commit, dispatch = _a.dispatch;
        return new Promise(function (resolve, reject) {
            commit('authRequest');
            auth_service_1.authService.login(credentials)
                .subscribe(function (result) {
                localStorage.setItem('auth-token', result); // stash the auth token in localStorage
                commit('authSuccess', result);
                event_bus_1.EventBus.$emit('logged-in', null);
                dispatch('user/userRequest', null, { root: true });
                resolve(result);
            }, function (errors) {
                commit('authError', errors);
                localStorage.removeItem('auth-token');
                reject(errors);
            });
        });
    },
    facebookAuthRequest: function (_a, accessToken) {
        var commit = _a.commit, dispatch = _a.dispatch;
        return new Promise(function (resolve, reject) {
            commit('authRequest');
            auth_service_1.authService.facebookLogin(accessToken)
                .subscribe(function (result) {
                localStorage.setItem('auth-token', result); // stash the auth token in localStorage
                commit('authSuccess', result);
                event_bus_1.EventBus.$emit('logged-in', null);
                dispatch('user/userRequest', null, { root: true });
                resolve(result);
            }, function (errors) {
                commit('authError', errors);
                localStorage.removeItem('auth-token');
                reject(errors);
            });
        });
    },
    authLogout: function (_a) {
        var commit = _a.commit, dispatch = _a.dispatch;
        return new Promise(function (resolve, reject) {
            commit('authLogout');
            localStorage.removeItem('auth-token');
            resolve();
        });
    },
};
var mutations = {
    authRequest: function (authState) {
        authState.status = 'attempting authentication request';
    },
    authSuccess: function (authState, authToken) {
        authState.status = 'authentication succeeded';
        authState.token = authToken;
    },
    authError: function (authState) {
        authState.status = 'error';
    },
    authLogout: function (authState) {
        authState.token = '';
    },
};
exports.default = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
};
//# sourceMappingURL=auth.js.map