"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardService = void 0;
var axios_1 = require("axios");
var base_service_1 = require("./base.service");
var DashboardService = /** @class */ (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService() {
        return _super.call(this) || this;
    }
    Object.defineProperty(DashboardService, "Instance", {
        get: function () {
            // Do you need arguments? Make it a regular method instead.
            return this.instance || (this.instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    DashboardService.prototype.getHomeDetails = function () {
        return axios_1.default.get(this.api + "/dashboard/home");
    };
    return DashboardService;
}(base_service_1.BaseService));
// export a singleton instance in the global namespace
exports.dashboardService = DashboardService.Instance;
//# sourceMappingURL=dashboard.service.js.map