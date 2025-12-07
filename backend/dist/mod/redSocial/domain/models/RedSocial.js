"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedSocial = void 0;
class RedSocial {
    constructor(data) {
        this.id = data.id;
        this.provider = data.provider;
        this.url = data.url;
        this.label = data.label;
        this.order = data.order;
    }
    // Getters
    getId() {
        return this.id;
    }
    getProvider() {
        return this.provider;
    }
    getUrl() {
        return this.url;
    }
    getLabel() {
        return this.label;
    }
    getOrder() {
        return this.order;
    }
}
exports.RedSocial = RedSocial;
//# sourceMappingURL=RedSocial.js.map