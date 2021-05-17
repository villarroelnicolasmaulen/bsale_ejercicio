const mysql = require('mysql');

//datos de la BD
const mysqlConnection = mysql.createConnection({
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
});

//Conexion de la misma
mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connected');
        return;
    }
});

module.exports = mysqlConnection;