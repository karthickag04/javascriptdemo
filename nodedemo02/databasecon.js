const { createPool } =require('mysql')

const con= createPool({
host:"192.168.1.240",
user:"cad",
password:"password",
database:"a",
connectionLimit:10
})

con.query("select * from sys_info", (err,result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})