import {Router} from 'express';
import clouthesController from '../controllers/clouthesClontroller';
import pool from '../database';

class ClothesRoutes {
    public router: Router = Router();

    constructor(){
        this.config(); 
    }
    config(): void{
        this.router.get('/',clouthesController.index);// Testing, working
        this.router.get('/all', clouthesController.get); //get the list of the db, working
        this.router.get('/marca/:idMarca/tipo/:idTipo', clouthesController.getProducto); //get the list of clouthes by arguments /users/:userId/books/:bookId working
        this.router.get('/:id', clouthesController.getid); //get only one product, working
        this.router.post('/', clouthesController.create); // create a product, Working
        this.router.put('/:id', clouthesController.update); // edit a product, NOT Working
        this.router.delete('/:id',clouthesController.delete);// delete a product, Working
    }
}
const clothesRoutes = new ClothesRoutes();
export default clothesRoutes.router;

/*INSERT INTO `sheet1`( `marca`, `playera`, `blusa`, `camisa`, `pantalon`, `falda`, `chamarra`, `saco`, `sueter`, `sudadera`, `zapatos`, `vestido`, `bolsa`, `monoEnterizo`, `image`) VALUES ('Spiderman',15,15,15,16,17,18,19,20,21,22,22,24,23,26);*/