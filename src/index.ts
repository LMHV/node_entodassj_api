import App from './app';
import database from './database';
import dotenv from 'dotenv'
require('dotenv').config()

async function main(){
    // DB connection
    await database();
    // Express App from app.ts
    const app = new App();
    app.start();
}

main();