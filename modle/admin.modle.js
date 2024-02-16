import pool from "../Database/db.config.js";

export default class Admin{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    SignUp(){
        return new promises((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(err){
                    reject(err);
                }
                else{
                    let sql = "INSERT INTO admin(username,email,password) values(?,?,?)";
                    con.query(sql,[this.username,this.email,this,password],())
                }
            })
        })
    }
}
