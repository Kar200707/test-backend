import {pass} from "../DB/passwoard";
import router from "../router";

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB_URL:string = `mongodb+srv://harutyunyan2007karen:${pass}@cluster0.6des7zb.mongodb.net/?retryWrites=true&w=majority`

app.set('view engine', 'ejs');

app.use(express.json());
app.use('/api', router);

async function startApp ():Promise<void> {
    try {
        await mongoose.connect(DB_URL);
        console.log('Mongo Db Connected');
        app.listen(4000, ():void => {
            console.log(`server started: http://localhost:4000`);
        })
    } catch (e) {
        console.log(e);
    }
}

startApp();