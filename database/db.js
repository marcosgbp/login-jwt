import mysql from "mysql";
import dotenv from 'dotenv'
dotenv.config()

const db = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect( (err)=>{
    if(err) throw err;
    console.log("Database connected");
})