"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clouthesClontroller_1 = __importDefault(require("../controllers/clouthesClontroller"));
class ClothesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clouthesClontroller_1.default.index); // Testing, working
        this.router.get('/all', clouthesClontroller_1.default.get); //get the list of the db, working
        this.router.get('/marca/:idMarca/tipo/:idTipo', clouthesClontroller_1.default.getProducto); //get the list of clouthes by arguments /users/:userId/books/:bookId working
        this.router.get('/:id', clouthesClontroller_1.default.getid); //get only one product, working
        this.router.post('/', clouthesClontroller_1.default.create); // create a product, Working
        this.router.put('/:id', clouthesClontroller_1.default.update); // edit a product, NOT Working
        this.router.delete('/:id', clouthesClontroller_1.default.delete); // delete a product, Working
    }
}
const clothesRoutes = new ClothesRoutes();
exports.default = clothesRoutes.router;
/*INSERT INTO `sheet1`( `marca`, `playera`, `blusa`, `camisa`, `pantalon`, `falda`, `chamarra`, `saco`, `sueter`, `sudadera`, `zapatos`, `vestido`, `bolsa`, `monoEnterizo`, `image`) VALUES ('Spiderman',15,15,15,16,17,18,19,20,21,22,22,24,23,26);*/ 
