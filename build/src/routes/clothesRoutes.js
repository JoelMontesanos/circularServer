"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ClothesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/clothes');
    }
}
const clothesRoutes = new ClothesRoutes();
exports.default = clothesRoutes.router;
