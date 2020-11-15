"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClouthesController {
    index(req, res) {
        res.json({ text: 'Hola Desde Clouthes Controller' });
    }
}
const clouthesController = new ClouthesController();
exports.default = clouthesController;
