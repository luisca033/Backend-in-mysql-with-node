var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'location'
});
 
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection is ready');

});
 
module.exports=connection