"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var testplan_1 = require("./testplan");
var TestplanService = (function () {
    function TestplanService() {
        this.testplans = new Array();
        this.testplans.push(new testplan_1.Testplan("Partner", "Fast tests for Partner"));
        this.testplans.push(new testplan_1.Testplan("Account", "Complete testsuite around all account methods"));
        this.testplans.push(new testplan_1.Testplan("Session", "Capacity tests for session handling"));
    }
    TestplanService.prototype.byId = function (id) {
        for (var _i = 0, _a = this.testplans; _i < _a.length; _i++) {
            var testplan = _a[_i];
            if (testplan.id == id) {
                return testplan;
            }
        }
        return null;
    };
    TestplanService = __decorate([
        core_1.Injectable()
    ], TestplanService);
    return TestplanService;
}());
exports.TestplanService = TestplanService;
