import {Request, Response} from 'express';
import pool from '../database';

class ClouthesController{

    public index (req: Request, res:Response) { // this is for testing
        pool.query('DESCRIBE sheet1');
        res.json('Clouthes Index');
    }

    public async get (req: Request,res:Response):Promise<void> {  // This gets all the products
        const clouthes = await pool.query('SELECT * FROM sheet1');
        res.json(clouthes);
    }

    public async getid (req: Request,res:Response):Promise<any> {  // This gets the product using the id
        const {id} = req.params;
        const clouthes= await pool.query('SELECT * FROM sheet1 WHERE id=?',[id]);
        if (clouthes.length > 0){
            return res.json(clouthes[0]);
        }else{
            res.status(404).json({text:'The clouthes does not exist'});
        }
    }

    public async getProducto (req: Request,res:Response):Promise<any> {  // This gets the product NOT by id
        const idMarca = req.params.idMarca;
        const idTipo = req.params.idTipo;
        const clouthes = await pool.query(`SELECT ${idTipo} FROM sheet1 WHERE marca=?`,[idMarca]);
        if (clouthes.length > 0){
            return res.json(clouthes[0]);
        }else{
            res.status(404).json({text:'The clouthesProduct does not exist'}); 
        }
    }

    public async create (req:Request, res: Response):Promise<void>{
        await pool.query('INSERT INTO sheet1 set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Product Created' });
    }

    public async update (req:Request, res: Response):Promise<void>{
        const {id} = req.params;
        const updated =await pool.query('UPDATE sheet1 set ? WHERE id= ?', [req.body,id]);
        res.json({text:'Clouthe Updated'});
        res.json(updated);
    }

    public async delete(req:Request, res:Response):Promise<void>{ //Working
        const {id} = req.params;
        await pool.query('DELETE FROM sheet1 WHERE id=?',[id]);
        res.json({message:'Product Deleted'});
    }
}
const clouthesController = new ClouthesController();
export default clouthesController;



// Code for two parameters in a url rq
/*Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

Si queremos definir una ruta con parámetros lo especificariamos en la parte del path de la ruta:

app.get('/users/:userId/books/:bookId', function (req, res) {
        res.send(req.params)
    })

*/