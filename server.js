import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// components
import Connection from './database/db.js';
import Router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 
app.use('/', Router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;


app.listen(PORT, () =>console.log(`Server is running successfully on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-ezrfi8s-shard-00-00.yx7xp7d.mongodb.net:27017,ac-ezrfi8s-shard-00-01.yx7xp7d.mongodb.net:27017,ac-ezrfi8s-shard-00-02.yx7xp7d.mongodb.net:27017/?ssl=true&replicaSet=atlas-bonphb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blogApp`;

Connection(URL);


