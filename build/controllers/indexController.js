"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'Hola Joy, Desde Index Controller' });
    }
}
exports.indexController = new IndexController();
