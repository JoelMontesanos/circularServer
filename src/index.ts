import express, {Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import clouthesRoutes from './routes/clouthesRoutes';
import morgan from 'morgan';
import cors from 'cors';

// Here is where i created the server for nodejs as my backend in typescript

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config (){
        this.app.set('port', process.env.PORT || 3000); // in case of not having a default port
        this.app.use(morgan('dev')); //Shows the http request's info in console
        this.app.use(cors()); //Allow me to send info from a server to another
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    routes(){
        this.app.use('/',indexRoutes);
        this.app.use('/clouthes',clouthesRoutes);
    }
    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start(); 