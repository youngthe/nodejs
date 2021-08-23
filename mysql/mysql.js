var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'student',
    password : 'secret',
    database : 'my_db'
});

connection.connect();

connection.query('select * from users', function(error, results, fields){
    if(error) throw error;
    console.log('The solution is: ', results[0].num, results[0].id, results[0].pwd);
});

connection.end();

