import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
require('dotenv').config()


class Application{

    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(require('./routes/users.routes.ts'));
        this.app.use(require('./routes/category.routes.ts'));
        this.app.use(require('./routes/event.routes.ts'))
    }


    start (){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on PORT ', this.app.get('port'));
        })
    }
}

export default Application;
