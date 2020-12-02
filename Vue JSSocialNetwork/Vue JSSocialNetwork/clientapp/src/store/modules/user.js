"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_service_1 = require("../../services/profile.service");
var vue_1 = require("vue");
var state = { profile: {}, status: '' };
var getters = {
    profile: function (userState) { return userState.profile; },
};
var actions = {
    userRequest: function (_a) {
        var commit = _a.commit, dispatch = _a.dispatch;
        commit('userRequest');
        profile_service_1.profileService.get()
            .subscribe(function (result) {
            commit('userSuccess', result);
        }, function (errors) {
            commit('userError');
            dispatch('auth/authLogout', null, { root: true });
        });
    },
};
var mutations = {
    userRequest: function (userState) {
        userState.status = 'attempting request for user profile data';
    },
    userSuccess: function (userState, userResp) {
        userState.status = 'success';
        vue_1.default.set(userState, 'profile', userResp);
    },
    userError: function (userState) {
        userState.status = 'error';
    },
};
exports.default = {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations,
};
//# sourceMappingURL=user.js.map