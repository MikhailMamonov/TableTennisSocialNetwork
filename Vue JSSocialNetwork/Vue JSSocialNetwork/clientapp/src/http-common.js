"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.default = axios_1.default.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-type': 'application/json'
    }
});
//# sourceMappingURL=http-common.js.map