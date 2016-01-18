var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var xenon_1 = require("xenon");
var RefinementOption = (function (_super) {
    __extends(RefinementOption, _super);
    function RefinementOption() {
        _super.apply(this, arguments);
    }
    __decorate([
        xenon_1.field(xenon_1.Component, { qa: "checkbox" }), 
        __metadata('design:type', xenon_1.Component)
    ], RefinementOption.prototype, "checkbox");
    __decorate([
        xenon_1.field(xenon_1.Component, { qa: "label" }), 
        __metadata('design:type', xenon_1.Component)
    ], RefinementOption.prototype, "label");
    __decorate([
        xenon_1.field(xenon_1.Component, { qa: "count" }), 
        __metadata('design:type', xenon_1.Component)
    ], RefinementOption.prototype, "count");
    return RefinementOption;
})(xenon_1.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RefinementOption;
//# sourceMappingURL=RefinementOption.js.map