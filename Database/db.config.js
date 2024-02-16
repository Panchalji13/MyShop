import mysql from "mysql2";


const pool = mysql.creatpool({
    user : "root",
    password : "Ankit@123",
    host : "localhost",
    databases : "myshop",
    connectionLimit : 100
});
export default pool;