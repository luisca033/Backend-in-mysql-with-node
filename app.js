const express= require('express')
const cors=require('cors')
const rutas=require('./routes/routes');
const connection = require('./db/db');

const app=express();

app.use(cors())
app.use(express.json())
app.use(rutas)

app.listen(3000, async ()=>{
    console.log('Start in port 3000');
    try {
        await connection;
    } catch (error) {
        throw new Error('Its imposible the connection')
    }
})