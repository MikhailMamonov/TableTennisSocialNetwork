"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
var Rx_1 = require("rxjs/Rx");
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.api = 'http://localhost:5000/api';
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers['Application-Error'];
        if (applicationError) {
            return Rx_1.Observable.throw(applicationError);
        }
        var modelStateErrors = '';
        if (error.data) {
            for (var key in error.data) {
                if (error.data[key]) {
                    modelStateErrors += error.data[key] + '\n';
                }
            }
        }
        modelStateErrors = modelStateErrors === '' ? null : modelStateErrors;
        return Rx_1.Observable.throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map