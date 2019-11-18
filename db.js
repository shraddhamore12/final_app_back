
const mysql=require("mysql");

function connect(){
const connection=mysql.createConnection({
    host    :'192.168.43.88',
    user    :'root',
    password :'Manager@123',
    database :'app_db',
    port : 9099
})

connection.connect();
return connection
}
module.exports = {
    connect:connect
}
