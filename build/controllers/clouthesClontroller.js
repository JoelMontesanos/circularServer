"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ClouthesController {
    index(req, res) {
        database_1.default.query('DESCRIBE sheet1');
        res.json('Clouthes Index');
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const clouthes = yield database_1.default.query('SELECT * FROM sheet1');
            res.json(clouthes);
        });
    }
    getid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const clouthes = yield database_1.default.query('SELECT * FROM sheet1 WHERE id=?', [id]);
            if (clouthes.length > 0) {
                return res.json(clouthes[0]);
            }
            else {
                res.status(404).json({ text: 'The clouthes does not exist' });
            }
        });
    }
    getProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idMarca = req.params.idMarca;
            const idTipo = req.params.idTipo;
            const clouthes = yield database_1.default.query(`SELECT ${idTipo} FROM sheet1 WHERE marca=?`, [idMarca]);
            if (clouthes.length > 0) {
                return res.json(clouthes[0]);
            }
            else {
                res.status(404).json({ text: 'The clouthesProduct does not exist' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO sheet1 set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Product Created' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updated = yield database_1.default.query('UPDATE sheet1 set ? WHERE id= ?', [req.body, id]);
            res.json({ text: 'Clouthe Updated' });
            res.json(updated);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM sheet1 WHERE id=?', [id]);
            res.json({ message: 'Product Deleted' });
        });
    }
}
const clouthesController = new ClouthesController();
exports.default = clouthesController;
// Code for two parameters in a url rq
/*Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

Si queremos definir una ruta con parámetros lo especificariamos en la parte del path de la ruta:

app.get('/users/:userId/books/:bookId', function (req, res) {
        res.send(req.params)
    })

*/ 
