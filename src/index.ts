import App from './app';
import database from './database';

async function main(){
    // DB connection
    await database();
    // Express App from app.ts
    const app = new App();
    app.start();
}

main();