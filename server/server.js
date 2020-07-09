import express from 'express';
import devBundle from './devBundle';
import path from 'path';
import template from './../template';
import { MongoClient } from 'mongodb';

const CURRENT_WORKING_DIR = process.cwd();

const app = express();

devBundle.compile(app);

app.use('/dist',
    express.static(
        path.join(CURRENT_WORKING_DIR, 'dist')
    )
);

app.get('/', (req, res) => {
        res.status(200).send(template());
    }
)

let port = process.env.PORT || 5004;

app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('Server started on portaaaaaaable %s.', port);
})

const db_url = process.env.MONGODB_URI || "mongodb://localhost:27017/bms"
MongoClient.connect(db_url, (err, db) => {
    console.log("Connected succesfully to database bms in mongodb server.")
    db.close();
});

// Babel Config
// Webpack Config - Client
// Webpack Config - Client Proddction
// Webpack Config - Server
// Nodemon
// React Compoent
// Created Server
// Created devBundle
// Created Routes
// Conneected to the DB









