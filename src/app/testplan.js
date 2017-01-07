"use strict";
var Testplan = (function () {
    // attributes: Set<string>;
    function Testplan(title, description) {
        this.id = "TID-" + Math.random() * 651651;
        this.title = title;
        this.description = description;
    }
    return Testplan;
}());
exports.Testplan = Testplan;
